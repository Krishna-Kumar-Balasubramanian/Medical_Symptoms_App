import { View, Text, StyleSheet, ScrollView, LogBox } from 'react-native'
import React, { useState } from "react";
import CustomButton from '../../components/CustomButton/CustomButton';
import ImagePicker from 'react-native-image-picker';
import MultiSelect from 'react-native-multiple-select';

const Symptoms = ({route, navigation}) => {
  LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

  const {name} = route.params;

  const General = [
    { id: 24, name: 'Cough' },
    { id: 2, name: 'Mild Fever' },
    { id: 3, name: 'High Fever' },
    { id: 3, name: 'Sneezing' },
    { id: 4, name: 'Shivering' },
    { id: 5, name: 'Chills' },
    { id: 14, name: 'Fatigue' },
    { id: 21, name: 'Lethargy' },
    { id: 17, name: 'Cold hands and feet' },
    { id: 28, name: 'Sweating' },
    { id: 31, name: 'Headache' },
    { id: 34, name: 'Nausea' },
    { id: 36, name: 'Pain behind Eyes' },
    { id: 48, name: 'Malaise' },
    { id: 50, name: 'Phlegm' },
    { id: 54, name: 'Runny Nose' },
    { id: 55, name: 'Congestion' },
    { id: 64, name: 'Dizziness' },
    { id: 65, name: 'Cramps' },
    { id: 70, name: 'Puffy Face and Eyes' },
    { id: 100, name: 'Belly Pain' },
    { id: 103, name: 'Watering Eyes ' },
    { id: 29, name: 'Dehydration' },
  ];
  const Skin = [
    { id: 0, name: 'Itching' },
    { id: 1, name: 'Rash' },
    { id: 66, name: 'Bruising' },
    { id: 76, name: 'Drying and Tingling Lips' },
    { id: 72, name: 'Brittle Nails' },
    { id: 128, name: 'inflammatory Nails' },
    { id: 127, name: 'Dents in Nails' },
    { id: 93, name: 'Internal Itching' },
    { id: 99, name: 'Red Spots Over Body' },
    { id: 102, name: 'Dischromic Patches' },
    { id: 119, name: 'Prominent Veins on Calves' },
    { id: 122, name: 'Pimples with Pus' },
    { id: 123, name: 'Blackheads' },
    { id: 125, name: 'Peeling Skin' },
    { id: 126, name: 'Silver Dusting' },
    { id: 129, name: 'Blisters' },
    { id: 131, name: 'Yellow Crusted Ooze' },
    { id: 130, name: 'Soreness or Redness Around Nose' },
    { id: 9, name: 'Ulcers on Tongue' },
    { id: 2, name: 'Nodal Eruptions' },
  ];
  
  const Joints = [
    { id: 6, name: 'Joint Pain' },
    { id: 57, name: 'Weakness in Limbs' },
    { id: 73, name: 'Swollen Extremities' },
    { id: 71, name: 'Enlarged Thyroid' },
    { id: 68, name: 'Swollen Legs' },
    { id: 26, name: 'Sunken Eyes ' },
    { id: 32, name: 'Yellowish Skin' },
    { id: 37, name: 'Back Pain' },
    { id: 63, name: 'Neck Pain ' },
    { id: 78, name: 'Knee Pain' },
    { id: 79, name: 'Hip Pain' },
    { id: 80, name: 'Muscle Weakness' },
    { id: 97, name: 'Muscle Pain  ' },
    { id: 10, name: 'Muscle Wasting' },
    { id: 81, name: 'Stiff Neck ' },
    { id: 82, name: 'Swollen Joints' },
    { id: 83, name: 'Stiff Movements' },
    { id: 121, name: 'Painful to Walk' },
    { id: 84, name: 'Spinning Movements' },
  ];
  
  const Stomach = [
    { id: 7, name: 'Stomach Ache' },
    { id: 11, name: 'Vomiting' },
    { id: 30, name: 'Indigestion' },
    { id: 40, name: 'Diarrhoea' },
    { id: 104, name: 'Increased Appetite' },
    { id: 35, name: 'Loss of Appetite' },
    { id: 38, name: 'Constipation' },
    { id: 39, name: 'Abdominal Pain' },
    { id: 46, name: 'Swollen Stomach' },
    { id: 74, name: 'Excessive Hunger' },
    { id: 115, name: 'Distented Abdomen ' },
    { id: 8, name: 'Acidity' },
  ];
  
  const Urination = [
    { id: 74, name: 'Painful Urination' },
    { id: 42, name: 'Yellow Urine' },
    { id: 33, name: 'Dark Urine' },
    { id: 89, name: 'Bladder Discomfort' },
    { id: 90, name: 'Foul Smell of Urine' },
    { id: 105, name: 'Polyuria' },
    { id: 91, name: 'Continuous Feeling of Urination' },
    { id: 13, name: 'Spotting Urination' },
  ];
  
  const Weight = [
    { id: 15, name: 'Weight Gain' },
    { id: 67, name: 'Obesity' },
    { id: 19, name: 'Weight Loss' },
  ];
  
  const MentalIssues = [
    { id: 16, name: 'Anxiety' },
    { id: 18, name: 'Mood Swings' },
    { id: 95, name: 'Depression' },
    { id: 96, name: 'Irritability' },
    { id: 109, name: 'Lack of Concentration' },
    { id: 20, name: 'Restlessness' },
  ];
  
  const Lungs = [
    { id: 27, name: 'Breathlessness' },
    { id: 51, name: 'Throat Irritation' },
    { id: 53, name: 'Sinus Pressure' },
    { id: 107, name: 'Mucoid Sputum' },
    { id: 118, name: 'Bloody Sputum' },
    { id: 107, name: 'Rusty Sputum' },
    { id: 22, name: 'Patches in Throat' },
  ];
  
  const InternalSymptoms = [
    { id: 44, name: 'Acute Liver Failure' },
    { id: 45, name: 'Fluid Overload' },
    { id: 114, name: 'Stomach Bleeding' },
    { id: 69, name: 'Swollen Blood Vessels' },
    { id: 47, name: 'Swollen Lymph Nodes' },
  ];
  
  const Eyes = [
    { id: 110, name: 'Visual Disturbances' },
    { id: 49, name: 'Blurred and Distorted Vision' },
    { id: 43, name: 'Yellowing Eyes' },
    { id: 52, name: 'Redness of Eye' },
  ];
  
  const Heart = [
    { id: 56, name: 'Chest Pain' },
    { id: 120, name: 'Palpitations' },
    { id: 58, name: 'Accelerated Heart Rate' },
  ];
  
  const Bowel = [
    { id: 60, name: 'Pain in Anal Region' },
    { id: 61, name: 'Bloody Stool' },
    { id: 62, name: 'Irritation in Anus' },
    { id: 92, name: 'Passage of Gases' },
    { id: 59, name: 'Pain During Bowel Movements' },
  ];
  
  const Brain = [
    { id: 77, name: 'Slurred Speech' },
    { id: 85, name: 'Loss of Balance' },
    { id: 86, name: 'Unsteadiness' },
    { id: 87, name: 'One Side of Body Weak' },
    { id: 88, name: 'Loss of Smell' },
    { id: 113, name: 'Coma' },
    { id: 98, name: 'Altered Sensorium' },
  ];
  
  const Miscellaneous = [
    { id: 101, name: 'Abnormal Menstruation' },
    { id: 23, name: 'Irregular Sugar Levels' },
    { id: 112, name: 'Had Unsterile Injections?' },
    { id: 111, name: 'Had Blood Transfusion?' },
    { id: 106, name: 'Heridatory' },
    { id: 75, name: 'Unsafe Intercourse or Contact' },
    { id: 116, name: 'History of Alcohol Consumption' },
  ];

    const [selectGeneral, setselectGeneral] = useState([])
    const [selectSkin, setselectSkin] = useState([])
    const [selectJoints, setselectJoints] = useState([])
    const [selectStomach, setselectStomach] = useState([])
    const [selectUrination, setselectUrination] = useState([])
    const [selectWeight, setselectWeight] = useState([])
    const [selectMentalIssues, setselectMentalIssues] = useState([])
    const [selectLungs, setselectLungs] = useState([])
    const [selectInternalSymptoms, setselectInternalSymptoms] = useState([])
    const [selectEyes, setselectEyes] = useState([])
    const [selectHeart, setselectHeart] = useState([])
    const [selectBowel, setselectBowel] = useState([])
    const [selectBrain, setselectBrain] = useState([])
    const [selectMiscellaneous, setselectMiscellaneous] = useState([])

    const onSelectGeneralChange = selectGeneral => {
      setselectGeneral(selectGeneral);
    }
    const onSelectSkinChange = selectSkin => {
      setselectSkin(selectSkin );
    }
  
    const onSelectJointsChange = selectJoints => {
      setselectJoints(selectJoints );
    }
  
    const onSelectStomachChange = selectStomach => {
      setselectStomach(selectStomach);
    }
  
    const onSelectUrinationChange = selectUrination => {
      setselectUrination(selectUrination);
    }
  
    const onSelectWeightChange = selectWeight => {
      setselectWeight(selectWeight);
    }
  
    const onSelectMentalIssuesChange = selectMentalIssues => {
      setselectMentalIssues(selectMentalIssues);
    }
  
    const onSelectLungsChange = selectLungs => {
      setselectLungs(selectLungs);
    }
  
    const onSelectInternalSymptomsChange = selectInternalSymptoms => {
      setselectInternalSymptoms(selectInternalSymptoms);
    }
  
    const onSelectEyesChange = selectEyes => {
      setselectEyes(selectEyes);
    }
  
    const onSelectHeartChange = selectHeart => {
      setselectHeart(selectHeart);
    }
  
    const onSelectBowelChange = selectBowel => {
      setselectBowel(selectBowel);
    }
  
    const onSelectBrainChange = selectBrain => {
      setselectBrain(selectBrain);
    }
  
    const onSelectMiscellaneousChange = selectMiscellaneous => {
      setselectMiscellaneous(selectMiscellaneous);
    }
    
const acuteDiagnosis = async () => {
  const all = [...selectGeneral, ...selectBrain, ...selectSkin, ...selectJoints, ...selectStomach, ...selectUrination, ...selectWeight, ...selectMentalIssues, ...selectLungs, ...selectInternalSymptoms, ...selectEyes, ...selectHeart, ...selectBowel, ...selectBrain, ...selectMiscellaneous];
  console.log(all);
  let pred = '';
  let perc = 0;
  var list = {};
  let tier = 0;
  if(all) {
  const {symptoms} = {
    symptoms: all
  };
  const ipdata = JSON.stringify(symptoms);
        await fetch('http://10.0.2.2:5001/predict', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: ipdata
          }).then((response) => response.json())
          .then((json) => {
            if(json.result) {
              console.log(json.result)
            } else {
              pred = json.prediction;
              perc = json.percent;
              list = json.diagnoses;
              tier = json.tier;
              console.log(json.prediction);
              console.log(json.percent);
            } 
          })
          .catch((error) => {
            console.error(error);
          });
        navigation.navigate("ResultScreen", {pred: pred ? pred : null, perc: perc, list: list, name: name});
    
}

};

return (
    <View style={styles.root}>
      <Text>SYMPTOMS FORM</Text>
      <Text style={styles.textfield}>Please select your symptoms.</Text>
      <View style={styles.container}>
        <View style={styles.multiSelectContainer}>
        <ScrollView>
      <MultiSelect
            style={styles.multiselect}
            items={General}
            uniqueKey='id'
            onSelectedItemsChange={onSelectGeneralChange}
            selectedItems={selectGeneral}
            selectText='General Symptoms'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />
          <MultiSelect
            items={Skin}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectSkinChange}
            selectedItems={selectSkin}
            selectText='Skin'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Joints}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectJointsChange}
            selectedItems={selectJoints}
            selectText='Joints, Muscles & Movements'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Stomach}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectStomachChange}
            selectedItems={selectStomach}
            selectText='Stomach and Hunger'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Urination}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectUrinationChange}
            selectedItems={selectUrination}
            selectText='Urination '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Weight}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectWeightChange}
            selectedItems={selectWeight}
            selectText='Weight '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={MentalIssues}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectMentalIssuesChange}
            selectedItems={selectMentalIssues}
            selectText='Mental Issues'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Lungs}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectLungsChange}
            selectedItems={selectLungs}
            selectText='Lungs and Breathing '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={InternalSymptoms}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectInternalSymptomsChange}
            selectedItems={selectInternalSymptoms}
            selectText='Internal Symptoms'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Eyes}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectEyesChange}
            selectedItems={selectEyes}
            selectText='Eyes and Vision'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Heart}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectHeartChange}
            selectedItems={selectHeart}
            selectText='Heart'
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Bowel}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectBowelChange}
            selectedItems={selectBowel}
            selectText='Bowel '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Brain}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectBrainChange}
            selectedItems={selectBrain}
            selectText='Brain & Consciousness '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Miscellaneous}
            style={styles.multiselect}
            uniqueKey='id'
            onSelectedItemsChange={onSelectMiscellaneousChange}
            selectedItems={selectMiscellaneous}
            selectText='Miscellaneous Questions '
            searchInputPlaceholderText='Search Items...'
            onChangeInput={(text) => console.warn(text)}
            tagRemoveIconColor='#CCC'
            tagBorderColor='#CCC'
            tagTextColor='#CCC'
            selectedItemTextColor='#CCC'
            selectedItemIconColor='#CCC'
            itemTextColor='#000'
            displayKey='name'
            searchInputStyle={{ color: '#CCC' }}
            flatListProps={{nestedScrollEnabled: true}}
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />
</ScrollView>
</View>
</View>
      <CustomButton text="Submit Diagnosis" onPress={acuteDiagnosis} />
      
    </View>
  )
}
const styles = StyleSheet.create({
    root:{
        padding: "5%",
        backgroundColor:"#c33650",
        color: "white",
        flex: 1,

    },
 
    textfield: {
        marginTop: "5%",
        color: "white",
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    multiSelectContainer: {
      display:'flex',
      height: '90%',
      width: '100%',
      margin: "5%",
    },
    multiselect: {
      marginBottom: "20%",
      padding: 20,
    }
 
})

export default Symptoms




































// import { View, Text, StyleSheet } from 'react-native'
// import React, { useEffect } from 'react'
// import CustomButton from '../../components/CustomButton/CustomButton';
// import ImagePicker from 'react-native-image-picker';
// import MultipleSelect from '../../components/MultipleSelect/MultipleSelect';
// import Customerinput from '../../components/Customerinput';
// import { useNavigation } from '@react-navigation/native';

// const Symptoms = () => {

//     const navigation = useNavigation();

//     // useEffect(() => {
//     //     symptoms = MultipleSelect.multiSelect ? MultipleSelect.multiSelect.getSelectedItemsExt(selectGeneral) : "nope"
//     //     console.log(symptoms);
//     // }, []);

// const handleChoosePhoto = () => {
//         const options = {};
//         ImagePicker.launchImageLibrary(options, response => {
//             console.log("response", response);
//         });
//     };
// const acuteDiagnosis = async () => {

//     const {General} = localStorage.getItem("general");
//     console.log(General);

//     // symptoms = MultipleSelect.multiSelect ? MultipleSelect.multiSelect.getSelectedItemsExt(selectGeneral) : "nope"
//     // console.log(symptoms);
    
//     console.warn("acute");

//     // fetch
//         await fetch('http://127.0.0.1:5001/article', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//               param: 'hello'
//             })
//           }).then((response) => response.json())
//           .then((json) => {
//             // console.log(json.prediction);
//             alert(json.prediction)
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//     navigation.navigate("ResultScreen");
// };

// return (
//     <View style={styles.root}>
//       <Text>SYMPTOMS FORM</Text>
//       <Text style={styles.textfield}>Please select your symptoms.</Text>
//       <MultipleSelect/>
//       {/* <Text style={styles.textfield}>Specify if any others</Text>
//       <Customerinput placeholder="type here" /> */}
//       <Text style={styles.textfield}>Or kindly upload your symptoms (accepted format: .csv)</Text>
//       <CustomButton text="Upload File" onPress={handleChoosePhoto} bgColor="#D0D0D0" />
//       <CustomButton text="Submit Diagnosis" onPress={acuteDiagnosis} />

//       {/* <label>Please select your symptoms.</label>
//       <MultipleSelect/>
//       <Text style={styles.textfield}>Specify if any others</Text>
//       <Customerinput placeholder="type here" />
//       <label style={styles.textfield}>Or kindly upload your symptoms (accepted format- .pdf,.word)</label>
//       <CustomButton text="upload file" onPress={handleChoosePhoto} bgColor="#D0D0D0" />
//       <CustomButton text="Submit Diagnosis" onPress={acuteDiagnosis} /> */}
  

//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     root:{
//         // alignItems: 'center',
//         padding: "5%",
//         backgroundColor:"#c33650",
//         color: "white"

//     },
 
//     textfield: {
//         marginTop: "5%",
//         color: "white"
        
//     }
 
// })

// export default Symptoms