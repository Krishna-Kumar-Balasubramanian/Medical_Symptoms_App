import pickle
import pandas as pd
import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
import pgeocode
from serpapi import GoogleSearch
import warnings
warnings.filterwarnings("ignore")

# Initialize app

app = Flask(__name__)
CORS().init_app(app)

@app.route('/')
def default():
    return "no route selected"

# Prediction Request Handling 

@app.route("/predict", methods=["POST"], strict_slashes=False)
def prediction():
    data = request.get_json()
    if not data:
        return jsonify(result="no symptoms")
    else:
        df = pd.DataFrame(np.zeros((1,132), dtype=int))
        arr = df.values.copy()
        arr.resize(1,132)
        for i in data:
            arr[0,i] = 1
        df = pd.DataFrame(arr)

        with open('model_rfc.pkl' , 'rb') as f:
            rfc = pickle.load(f)
            pred = rfc.predict(df)
            predprob = rfc.predict_proba(df)
            top5 = np.argsort(predprob)[:,-5:-1]
            classes = rfc.classes_[top5]
            illnesses = []
            probabilities = [0, 0, 0 ,0]
            index = 0

            print(type(top5))

            for i in top5:
                print(i)

            for i in range(4):
                illnesses.insert(i, rfc.classes_[i])
                probabilities.insert(i, round((predprob[0,i]*100), 2))

            print(illnesses)
            print(probabilities)

            ill = [str(e) for e in illnesses]
            prob = [str(e) for e in probabilities]

            print(len(ill), len(prob))

            diagnoses = dict(zip(ill, prob))
            
            tier = 2
            if('Vertigo' in pred
                or 'Acne' in pred
                or 'Cold' in pred
                or 'infection' in pred
                or 'GERD' in pred
                or 'Hypoglycemia' in pred
                or 'Migraine' in pred
                or 'Varicose' in pred
            ):
                tier = 1


            print(diagnoses)
            ls = [type(item) for item in ill]
            print(ls)

            ls = [type(item) for item in prob]
            print(ls)

            return jsonify(prediction = str(pred[0]), percent = round((np.amax(predprob))*100, 2), diagnoses=diagnoses, tier=tier)

# Medical Recommendations Request Handling

@app.route("/recommend", methods=["POST"], strict_slashes=False)
def recommendations():
    data = request.get_json()
    print(data)
    nomi = pgeocode.Nominatim('us')
    city = nomi.query_postal_code(data).place_name
    state = nomi.query_postal_code(data).state_name

    print(city, state)

    searchParams = {
        "engine": "google",
        "q": "Hospitals",
        "location": city+", "+state,
        "google_domain": "google.com",
        "gl": "us",
        "hl": "en",
        "api_key": "8f9e291d96f1385021dbe1e616c737da21afaf49e030b7c747bd467edc69c2ba"
    }
    client = GoogleSearch(searchParams)
    results = client.get_dict()
    res = results['local_results']
    name = ''
    addr = ''
    phone = ''
    link = ''
    response = []

    for res2 in res['places']:
        if('title' in res2):
            name = res2['title']
        if('address' in res2):
            addr = res2['address']
        if('phone' in res2):
            phone = res2['phone']
        if('directions_link' in res2):
            link = res2['directions_link']
        resp = dict(name=name, address=addr, phone=phone, link=link)
        print(resp)
        response.append(resp)
        name = ''
        addr = ''
        phone = ''
        link = ''
        resp = []
        
    print(response)
    return jsonify(response = response)

# Entry Point

if __name__ == "__main__":
    app.run(port=5001)

