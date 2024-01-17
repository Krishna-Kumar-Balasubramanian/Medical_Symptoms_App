# MEDICAL SYMPTOM CHECKER

Software Engineering I: Analysis, Design, and Testing

## Team 6:
Bhargavi Basavapatna Keshav  
Divya Mahesh Prabhu  
Krishna Kumar Balasubramanian
Nhan Ngoc Pham  
Pooja Srinivasan  

## Introduction:
The project is a mobile application (Android) that will use machine learning models and data analysis to predict the disease that the user may have, based on the symptoms provided by user, and provide recommendations for nearest medical services based on severity of diseases.

## Contents:
1. Main App: Source files in cse5324-msc/assets/src for front end screens, navigation & routing, and unit tests (__tests__).
2. Backend: Source files in cse5324-msc/backend for main server file (predictor.py), model selection and training (diseaseprediction.ipynb), and final model (model_rfc.pkl)
3. Short walkthrough of app for reference.
4. README file with contents & instructions for setup & Execution

## Technologies Used:
1. React-Native
2. Android
3. Firebase Authentication
4. Jest for React-Native
5. Python
6. Python Flask
7. Sci-kit Learn for ML models
8. Google Search API for Medical Recommendations

## Instructions for Execution:

### Prerequisites:
1. Node (^12.x)
2. Python (^3.x)
3. Android Simulator

### Setup & Execution:
1. In the main project directory, execute the following commands to install dependencies:
    ```
    npm install
    npm install --save @react-native-firebase/app
    ```
2. In the backend directory, execute the following commands to install dependencies:
    ```
    pip install -U scikit-learn
    pip install -U Flask
    pip install -U flask-cors
    pip install pgeocode
    pip install google-search-results
    ```
3. Start Python Server using `python predictor.py`
4. In the main directory, execute app using `npm start`. Further, press `w` to run on a web browser. If you have an Android Emulator connected, press `a` instead to run it on Android.

#### Please refer to attached video for a sample walkthrough of the project.

