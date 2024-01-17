import React from 'react';
import SignUpScreen from '../../SignUpScreen';
import { fireEvent, render } from "@testing-library/react-native";
import SignInScreen from '../SignInScreen';

describe('SignInScreen', () => {
    // it('should go to homepage on login', () => {
    //     const navigation = {navigate: () => {}}
    //     jest.spyOn(navigation, 'navigate');

    //     const page = render(<SignInScreen navigation={navigation}/>)
    //     const loginbtn = page.getByTestId('loginbtn');

    //     fireEvent.press(loginbtn);
    //     expect(navigation.navigate).toHaveBeenCalledWith("Home", {"name" : "divya"})
    // })

    it('should go to register on signup', () => {
        const navigation = {navigate: () => {}}
        jest.spyOn(navigation, 'navigate');

        const page = render(<SignInScreen navigation={navigation}/>)
        const signupbtn = page.getByTestId('signupbtn');

        fireEvent.press(signupbtn);
        expect(navigation.navigate).toHaveBeenCalledWith("Sign Up")
    })
})

