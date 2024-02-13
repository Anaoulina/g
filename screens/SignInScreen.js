//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,  Image, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import Loading from '../components/loading';
import { colors } from '../theme';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledImage = styled(Image)
const StyledTextInput=styled(TextInput)


// create a component
const MyComponent = () => {
    return (
       <ScreenWrapper>
          <StyledView className="flex justify-between h-full mx-4 ">
        <StyledView>
            <StyledView className="relative my-4 mt-5">
                <StyledView className="absolute top-0 left-0 z-10 ">
                    <BackButton/>
                </StyledView>
                <StyledText className={`${colors.heading} text-xl font-bold text-center text-3xl `}>Sign In</StyledText>
            </StyledView>
            
            <StyledView className="flex-row justify-center my-3 mt-5">
                <StyledImage className="h-80 w-80 rounded-2xl" source={require('../assets/images/login.jpg')} />
            </StyledView>
            <StyledView className="space-y-2 mx-2">
                <StyledText className={`${colors.heading} text-lg font-bold`}>Email</StyledText>
                <StyledTextInput /*value={email} onChangeText={value=> setEmail(value)}*/ className="p-4 bg-white rounded-full mb-3" />
                <StyledText  className={`${colors.heading} text-lg font-bold`}>Password</StyledText>
                <StyledTextInput /*value={password} secureTextEntry onChangeText={value=> setPassword(value)}*/ className="p-4 bg-white rounded-full mb-3" />
                <StyledTouchableOpacity className="flex-row justify-end">
                    <StyledText>Forget Password?</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
        
        <StyledView>
            {   /*
                userLoading? (
                    <Loading />
                ):(
                    
                    
                )*/
            }
            <StyledTouchableOpacity /*onPress={handleSubmit}*/ style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                        <StyledText className="text-center text-white text-lg font-bold">Sign In</StyledText>
                    </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
       </ScreenWrapper>
    );
};


//make this component available to the app
export default MyComponent;
