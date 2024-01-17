import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const General = [
  { id: 1, name: 'Cough' },
  { id: 2, name: 'Mild Fever' },
  { id: 3, name: 'High Fever' },
  { id: 4, name: 'Sneezing' },
  { id: 5, name: 'Shivering' },
  { id: 6, name: 'Chills' },
  { id: 7, name: 'Fatigue' },
  { id: 8, name: 'Lethargy' },
  { id: 9, name: 'Cold hands and feet' },
  { id: 10, name: 'Sweating' },
  { id: 11, name: 'Headache' },
  { id: 12, name: 'Nausea' },
  { id: 13, name: 'Pain behind Eyes' },
  { id: 14, name: 'Malaise' },
  { id: 15, name: 'Phlegm' },
  { id: 16, name: 'Runny Nose' },
  { id: 17, name: 'Congestion' },
  { id: 18, name: 'Dizziness' },
  { id: 19, name: 'Cramps' },
  { id: 20, name: 'Puffy Face and Eyes' },
  { id: 21, name: 'Belly Pain' },
  { id: 22, name: 'Watering Eyes ' },
  { id: 23, name: 'Dehydration' },
];

const Skin = [
  { id: 24, name: 'Itching' },
  { id: 25, name: 'Rash' },
  { id: 26, name: 'Bruising' },
  { id: 27, name: 'Drying and Tingling Lips' },
  { id: 28, name: 'Brittle Nails' },
  { id: 29, name: 'inflammatory Nails' },
  { id: 30, name: 'Dents in Nails' },
  { id: 31, name: 'Internal Itching' },
  { id: 32, name: 'Red Spots Over Body' },
  { id: 33, name: 'Dischromic Patches' },
  { id: 34, name: 'Prominent Veins on Calves' },
  { id: 35, name: 'Pimples with Pus' },
  { id: 36, name: 'Blackheads' },
  { id: 37, name: 'Peeling Skin' },
  { id: 38, name: 'Silver Dusting' },
  { id: 39, name: 'Blisters' },
  { id: 40, name: 'Yellow Crusted Ooze' },
  { id: 41, name: 'Soreness or Redness Around Nose' },
  { id: 42, name: 'Ulcers on Tongue' },
  { id: 43, name: 'Nodal Eruptions' },
];

const Joints = [
  { id: 44, name: 'Joint Pain' },
  { id: 45, name: 'Weakness in Limbs' },
  { id: 46, name: 'Swollen Extremities' },
  { id: 47, name: 'Enlarged Thyroid' },
  { id: 48, name: 'Swollen Legs' },
  { id: 49, name: 'Sunken Eyes ' },
  { id: 50, name: 'Yellowish Skin' },
  { id: 51, name: 'Back Pain' },
  { id: 52, name: 'Neck Pain ' },
  { id: 53, name: 'Knee Pain' },
  { id: 54, name: 'Hip Pain' },
  { id: 55, name: 'Muscle Weakness' },
  { id: 56, name: 'Muscle Pain  ' },
  { id: 57, name: 'Muscle Wasting' },
  { id: 58, name: 'Stiff Neck ' },
  { id: 59, name: 'Swollen Joints' },
  { id: 60, name: 'Stiff Movements' },
  { id: 50, name: 'Painful to Walk' },
  { id: 61, name: 'Spinning Movements' },
];

const Stomach = [
  { id: 62, name: 'Stomach Ache' },
  { id: 63, name: 'Vomiting' },
  { id: 64, name: 'Indigestion' },
  { id: 65, name: 'Diarrhoea' },
  { id: 66, name: 'Increased Appetite' },
  { id: 67, name: 'Loss of Appetite' },
  { id: 68, name: 'Constipation' },
  { id: 69, name: 'Abdominal Pain' },
  { id: 70, name: 'Swollen Stomach' },
  { id: 71, name: 'Excessive Hunger' },
  { id: 72, name: 'Distented Abdomen ' },
  { id: 73, name: 'Acidity' },
];

const Urination = [
  { id: 74, name: 'Painful Urination' },
  { id: 75, name: 'Yellow Urine' },
  { id: 76, name: 'Dark Urine' },
  { id: 77, name: 'Bladder Discomfort' },
  { id: 78, name: 'Foul Smell of Urine' },
  { id: 79, name: 'Polyuria' },
  { id: 80, name: 'Continuous Feeling of Urination' },
  { id: 81, name: 'Spotting Urination' },
];

const Weight = [
  { id: 82, name: 'Weight Gain' },
  { id: 83, name: 'Obesity' },
  { id: 84, name: 'Weight Loss' },
];

const MentalIssues = [
  { id: 85, name: 'Anxiety' },
  { id: 86, name: 'Mood Swings' },
  { id: 87, name: 'Depression' },
  { id: 88, name: 'Irritability' },
  { id: 89, name: 'Lack of Concentration' },
  { id: 90, name: 'Restlessness' },
];

const Lungs = [
  { id: 91, name: 'Breathlessness' },
  { id: 92, name: 'Throat Irritation' },
  { id: 93, name: 'Sinus Pressure' },
  { id: 94, name: 'Mucoid Sputum' },
  { id: 95, name: 'Bloody Sputum' },
  { id: 96, name: 'Rusty Sputum' },
  { id: 97, name: 'Patches in Throat' },
];

const InternalSymptoms = [
  { id: 98, name: 'Acute Liver Failure' },
  { id: 99, name: 'Fluid Overload' },
  { id: 100, name: 'Stomach Bleeding' },
  { id: 101, name: 'Swollen Blood Vessels' },
  { id: 102, name: 'Lack of Concentration' },
  { id: 103, name: 'Swollen Lymph Nodes' },
];

const Eyes = [
  { id: 104, name: 'Visual Disturbances' },
  { id: 105, name: 'Blurred and Distorted Vision' },
  { id: 106, name: 'Yellowing Eyes' },
  { id: 107, name: 'Redness of Eye' },
];

const Heart = [
  { id: 108, name: 'Chest Pain' },
  { id: 109, name: 'Palpitations' },
  { id: 110, name: 'Accelerated Heart Rate' },
];

const Bowel = [
  { id: 111, name: 'Pain in Anal Region' },
  { id: 112, name: 'Bloody Stool' },
  { id: 113, name: 'Irritation in Anus' },
  { id: 114, name: 'Passage of Gases' },
  { id: 115, name: 'Pain During Bowel Movements' },
];

const Brain = [
  { id: 116, name: 'Slurred Speech' },
  { id: 117, name: 'Loss of Balance' },
  { id: 118, name: 'Unsteadiness' },
  { id: 119, name: 'One Side of Body Weak' },
  { id: 120, name: 'Loss of Smell' },
  { id: 121, name: 'Coma' },
  { id: 122, name: 'Altered Sensorium' },
];

const Miscellaneous = [
  { id: 201, name: 'Abnormal Menstruation' },
  { id: 202, name: 'Irregular Sugar Levels' },
  { id: 203, name: 'Had Unsterile Blood Transfusion' },
  { id: 204, name: 'Had Blood Transfusion' },
  { id: 205, name: 'Heridatory' },
  { id: 206, name: 'History of Alcohol Consumption' },
];

export default class MultipleSelect extends Component {
  state = {
    selectGeneral: [],
    selectSkin: [],
    selectJoints: [],
    selectStomach: [],
    selectUrination: [],
    selectWeight: [],
    selectMentalIssues: [],
    selectLungs: [],
    selectInternalSymptoms: [],
    selectEyes: [],
    selectHeart: [],
    selectBowel: [],
    selectBrain: [],
    selectMiscellaneous: []
  }

  onSelectGeneralChange = selectGeneral => {
    this.setState({ selectGeneral });
  }

  onSelectSkinChange = selectSkin => {
    this.setState({ selectSkin });
  }

  onSelectJointsChange = selectJoints => {
    this.setState({ selectJoints });
  }

  onSelectStomachChange = selectStomach => {
    this.setState({ selectStomach });
  }

  onSelectUrinationChange = selectUrination => {
    this.setState({ selectUrination });
  }

  onSelectWeightChange = selectWeight => {
    this.setState({ selectWeight });
  }

  onSelectMentalIssuesChange = selectMentalIssues => {
    this.setState({ selectMentalIssues });
  }

  onSelectLungsChange = selectLungs => {
    this.setState({ selectLungs });
  }

  onSelectInternalSymptomsChange = selectInternalSymptoms => {
    this.setState({ selectInternalSymptoms });
  }

  onSelectEyesChange = selectEyes => {
    this.setState({ selectEyes });
  }

  onSelectHeartChange = selectHeart => {
    this.setState({ selectHeart });
  }

  onSelectBowelChange = selectBowel => {
    this.setState({ selectBowel });
  }

  onSelectBrainChange = selectBrain => {
    this.setState({ selectBrain });
  }

  onSelectMiscellaneousChange = selectMiscellaneous => {
    this.setState({ selectMiscellaneous });
  }

  render() {
    const { selectGeneral,
      selectSkin,
      selectJoints,
      selectStomach,
      selectUrination,
      selectWeight,
      selectMentalIssues,
      selectLungs,
      selectInternalSymptoms,
      selectEyes,
      selectHeart,
      selectBowel,
      selectBrain,
      selectMiscellaneous } = this.state

    // If you want to render MultiSelect from JSON then below code will help you.
    // const [serverData, setServerData] = useState([]);
    // useEffect(() => {
    //   fetch('YOUR API URL')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       //Successful response from the API Call
    //       setServerData(responseJson.results);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);

    return (
      <View style={styles.container}>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            ref={(component) => { this.multiSelect = component }}
            style={styles.multiselect}
            items={General}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectGeneralChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Skin}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectSkinChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Joints}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectJointsChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Stomach}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectStomachChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Urination}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectUrinationChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Weight}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectWeightChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={MentalIssues}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectMentalIssuesChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Lungs}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectLungsChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={InternalSymptoms}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectInternalSymptomsChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Eyes}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectEyesChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Heart}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectHeartChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Bowel}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectBowelChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Brain}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectBrainChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />

          <MultiSelect
            items={Miscellaneous}
            uniqueKey='id'
            onSelectedItemsChange={this.onSelectMiscellaneousChange}
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
            submitButtonColor='#CCC'
            submitButtonText='Submit'
            removeSelected
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none'
  },
  multiSelectContainer: {
    height: '90%',
    width: '100%',
    margin: "5%",
  },
  multiselect: {
    marginBottom: "20%",
    padding: "10%",
  }
});
