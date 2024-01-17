import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import SelectList from "react-native-dropdown-select-list";


const Dropdown = () => {
    const [category, setCategory] = React.useState("GS");
    const [subcategory, setSubCategory] = React.useState("");


    const categories = [
        {key:'SK', value:'Skin'},
        {key:'GS', value:'General Symptoms'},
        {key:'JM', value:'Joints,Muscles & Movements'},
        {key:'SH', value:'Stomach and Hunger'},
        {key:'UR', value:'Urination'},
        {key:'WE', value:'Weight'},
        {key:'MI', value:'Mental Issues'},
        {key:'LB', value:'Lungs and Breathing'},
        {key:'IS', value:'Internal symptoms'},
        {key:'EV', value:'Eyes and Vision'},
        {key:'HE', value:'Heart'},
        {key:'BO', value:'Bowel'},
        {key:'BC', value:'Brain & Consciousness'},
        {key:'MQ', value:'Miscellaneous questions'},
    ]

    const subcategories = {
        "GS": [
            {key:'21', value:'Cough'},
            {key:'22', value:'Mild Fever'},
            {key:'23', value:'High Fever'},
            {key:'24', value:'Sneezing'},
            {key:'25', value:'Shivering'},
            {key:'26', value:'Chills'},
            {key:'27', value:'Fatigue'},
            {key:'28', value:'Lethargy'},
            {key:'29', value:'Cold hands and feet'},
            {key:'30', value:'Sweating'},
            {key:'31', value:'Headache'},
            {key:'32', value:'Nausea'},
            {key:'33', value:'Pain behind Eyes'},
            {key:'34', value:'Malaise'},
            {key:'35', value:'Phlegm'},
            {key:'36', value:'Lethargy'},
            {key:'37', value:'Runny Nose'},
            {key:'38', value:'Congestion'},
            {key:'39', value:'Dizziness'},
            {key:'40', value:'Cramps'},
            {key:'41', value:'Puffy Face and Eyes'},
            {key:'42', value:'Belly Pain'},
            {key:'43', value:'Watering Eyes'},
            {key:'44', value:'Dehydration'},

        ],
        "JM": [
            {key:'45', value:'Joint Pain'},
            {key:'46', value:'Weakness in Limbs'},
            {key:'47', value:'Swollen Extremities'},
            {key:'48', value:'Enlarged Thyroid'},
            {key:'49', value:'Swollen Legs'},
            {key:'50', value:'Sunken Eyes'},
            {key:'51', value:'Yellowish Skin'},
            {key:'52', value:'Back Pain'},
            {key:'53', value:'Neck Pain'},
            {key:'54', value:'Knee Pain'},
            {key:'55', value:'Hip Pain'},
            {key:'56', value:'Muscle Weakness'},
            {key:'57', value:'Muscle Pain'},
            {key:'58', value:'Muscle Wasting'},
            {key:'59', value:'Stiff Neck'},
            {key:'60', value:'Swollen Joints'},
            {key:'61', value:'Stiff Movements'},
            {key:'62', value:'Painful to Walk'},
            {key:'63', value:'Spinning Movements'},
        ],
        "SH": [
            {key:'64', value:'Stomach Ache '},
            {key:'65', value:'Vomiting'},
            {key:'66', value:'Indigestion '},
            {key:'67', value:'Diarrhoea'},
            {key:'68', value:'Increased Appetite '},
            {key:'69', value:'Loss of Appetite'},
            {key:'70', value:'Constipation '},
            {key:'71', value:'Abdominal Pain'},
            {key:'72', value:'Swollen Stomach'},
            {key:'73', value:'Excessive Hunger'},
            {key:'74', value:'Distented Abdomen'},
            {key:'75', value:'Acidity'},
        ],
        "UR": [
            {key:'76', value:'Painful Urination'},
            {key:'77', value:'Yellow Urine'},
            {key:'78', value:'Dark Urine  '},
            {key:'79', value:'Bladder Discomfort'},
            {key:'80', value:'Foul Smell of Urine '},
            {key:'81', value:'Polyuria '},
            {key:'82', value:'Continuous Feeling of Urination   '},
            {key:'83', value:'Spotting Urination'},
           
        ],
        "WE": [
            {key:'84', value:'Weight Gain'},
            {key:'85', value:'Obesity'},
            {key:'86', value:'Weight Loss'},
        ],
        "MI": [
            {key:'87', value:'Anxiety'},
            {key:'88', value:'Mood Swings'},
            {key:'89', value:'Depression'},
            {key:'90', value:'Irritability'},
            {key:'91', value:'Lack of Concentration'},
            {key:'92', value:'Restlessness'},
        ],
        "LB": [
            {key:'93', value:'Breathlessness '},
            {key:'94', value:'Throat Irritation'},
            {key:'95', value:'Sinus Pressure'},
            {key:'96', value:'Mucoid Sputum  '},
            {key:'97', value:'Bloody Sputum   '},
            {key:'98', value:'Rusty Sputum '},
            {key:'99', value:'Patches in Throat'},
        ],
        "IS": [
            {key:'100', value:'Acute Liver Failure'},
            {key:'101', value:'Fluid Overload'},
            {key:'102', value:'Stomach Bleeding'},
            {key:'103', value:'Swollen Blood Vessels'},
            {key:'104', value:'Swollen Lymph Nodes '},     
        ],
        "EV": [
            {key:'100', value:'Visual Disturbances'},
            {key:'101', value:'Blurred and Distorted Vision'},
            {key:'102', value:'Yellowing Eyes'},
            {key:'103', value:'Redness of Eye'},    
        ],
        "HE": [
            {key:'100', value:'Chest Pain'},
            {key:'101', value:'Palpitations'},
            {key:'102', value:'Accelerated Heart Rate'} 
        ],
        "BO": [
            {key:'103', value:'Pain in Anal Region '},
            {key:'104', value:'Bloody Stoo'},
            {key:'105', value:'Irritation in Anus'},
            {key:'106', value:'Passage of Gases'},
            {key:'107', value:'Pain During Bowel Movements'},
        ],
        "BC": [
            {key:'108', value:'Slurred Speech '},
            {key:'109', value:'Loss of Balance'},
            {key:'110', value:'Unsteadiness'},
            {key:'111', value:'One Side of Body Weak'},
            {key:'112', value:'Loss of Smell'},
            {key:'113', value:'Coma'},
            {key:'114', value:'Altered Sensorium '},
        ],
        "MQ": [
            {key:'115', value:'Abnormal Menstruation'},
            {key:'116', value:'Irregular Sugar Levels'},
            {key:'117', value:'Had Unsterile Blood Transfusion'},
            {key:'118', value:'Had Blood Transfusion'},
            {key:'119', value:'Heridatory'},
            {key:'120', value:'History of Alcohol Consumption'},
        ],
    }
    return (
        <View style={{paddingHorizontal:10, paddingTop:20}}>
            <label style={styles.textfield}>1. Please select the symptoms category that your facing? </label>

        <SelectList
            setSelected = {setCategory}
            data = {categories}
            placeholder={"Select Category"}
            defaultOption = {{key:'GS', value:'General Symptoms'}} 
            />
        <label style={styles.textoption} >2. please select the option.</label>
    
        <SelectList
            setSelected = {setSubCategory}
            boxStyles = {{marginTop:30}}
            data = {subcategories[category]}
            placeholder={"Select SubCategory"}
            />
        <SelectList
            setSelected = {setSubCategory}
            boxStyles = {{marginTop:30}}
            data = {subcategories[category]}
            placeholder={"Select SubCategory"}
            />
            <SelectList
            setSelected = {setSubCategory}
            boxStyles = {{marginTop:30}}
            data = {subcategories[category]}
            placeholder={"Select SubCategory"}
            />
        </View>
  )
}
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: "5%",

    },
    textfield: {
        marginTop: "10%",
        marginBottom:"10%",     
    },
    textoption : {
        marginTop: 20,
    }
})

export default Dropdown