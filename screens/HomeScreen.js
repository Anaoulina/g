//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,Image } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { styled } from 'nativewind';
import { colors } from '../theme'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledImage = styled(Image)

// create a component
const MyComponent = () => {

    const navigation = useNavigation();

    const handleLogout = async ()=>{
        await signOut(auth);
    }
    return (
        <ScreenWrapper  >
            <StyledView className="flex-row justify-between items-center p-4"> 
                <StyledText className="text-gray-700 font-bold text-3xl shadow-sm " >PiggyBank</StyledText>
                <StyledTouchableOpacity onPress={handleLogout} className="bg-red-200 rounded-3xl p-4">
                <Text className="text-gray-700 ">Logout</Text>
            </StyledTouchableOpacity>
            </StyledView>
            <StyledView className="flex-row justify-center items-center rounded-xl mx-4 mb-4">
            <StyledImage source={require('../assets/images/logo.png')} className="w-60 h-60 rounded-full" />
        </StyledView>
        </ScreenWrapper>
        
    );
};

export default MyComponent;
