//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme'
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledImage = styled(Image)



const MyComponent = () => {
    const navigation = useNavigation();
    
    return (
        <ScreenWrapper >
                 <StyledView className="h-full flex justify-around bg-white">
                     <StyledView className="flex-row justify-center mt-10">
                            <StyledImage source={require('../assets/images/logo.png')} className="h-96 w-96 shadow rounded-full" />
                     </StyledView>
                     <StyledView>
                          <StyledText className={`text-center text-3xl ${colors.heading} mb-10`}>Welcome to our application were you can orgnaze your budget </StyledText>
                     </StyledView>
                    <StyledView className=" mx-5 mb-20">
                        <StyledTouchableOpacity onPress={()=> navigation.navigate('SignIn')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                            <StyledText className="text-center text-white text-lg font-bold">Sign In</StyledText>
                        </StyledTouchableOpacity>
                        <StyledTouchableOpacity onPress={()=> navigation.navigate('SignUp')} className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                            <StyledText className="text-center text-white text-lg font-bold">Sign Up</StyledText>
                        </StyledTouchableOpacity>
                        <StyledTouchableOpacity /*onPress={()=> signIn()}*/ className="shadow p-3 rounded-full bg-white" >
                            <StyledView className="flex-row justify-center items-center space-x-3">
                                <StyledImage source={require('../assets/images/googl.png')} className="h-8 w-8" />
                                <StyledText className="text-center text-gray-600 text-lg font-bold">Sign In with Google</StyledText>
                            </StyledView>
                        </StyledTouchableOpacity>
                    </StyledView>
                </StyledView>
        </ScreenWrapper>
    );
};

export default MyComponent;
