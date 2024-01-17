// import {shallow, mount, render} from 'enzyme'
// import ResultScreen from '../ResultScreen';
// import React from 'react';
// import { fireEvent, render } from "@testing-library/react-native";

// import renderer from 'react-test-renderer';

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: jest.fn(),
//   }));

// describe('ResultScreen', () => {
//     it('result screen loads with button', () => {
//         const navigation = {navigate: () => {}}
//         jest.spyOn(navigation, 'navigate');

//         const route = { params: {pred:'dead', perc:'100', list:{}, tier:'2', name:'divya' } }

//         const page = render(<ResultScreen route={route} navigation={{navigation}} />);
//         const goBtn = page.getByTestId('go');

//         expect(goBtn).toBeTruthy();

//         // fireEvent.press(goBtn);
//         // expect(navigation.navigate).toHaveBeenCalledWith("Home", {"name" : "divya"})
//     })

//     it('text input change state', () => {
//         const setState = jest.fn();
//         const init = ''
//   const useStateMock = () => [initState, setState];

//   jest.spyOn(React, 'useState').mockImplementation(useStateMock);

//   afterEach(() => {
//     jest.clearAllMocks();
//   })
//         const navigation = {navigate: () => {}}
//         jest.spyOn(navigation, 'navigate');

//         const route = { params: {pred:'dead', perc:'100', list:{}, tier:'2', name:'divya' } }

//         const instanceOf = renderer.create(<ResultScreen route={route} navigation={{navigation}} />)

//         const navigation = {navigate: () => {}}
//         jest.spyOn(navigation, 'navigate');

//         const route = { params: {pred:'dead', perc:'100', list:{}, tier:'2', name:'divya' } }

//         const page = render(<ResultScreen route={route} navigation={{navigation}} />);
//         const goBtn = page.getByTestId('go');

//         expect(goBtn).toBeTruthy();

//         fireEvent.press(goBtn);
//         expect(navigation.navigate).toHaveBeenCalledWith("Home", {"name" : "divya"})
//     }
// })

