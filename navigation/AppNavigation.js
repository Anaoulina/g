import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { onAuthStateChanged } from 'firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../config/firebase';
import { setUser } from '../redux/user';



const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const {user} = useSelector(state=> state.user);

  const dispatch = useDispatch();

  onAuthStateChanged(auth , u=>{
    console.log('got user : ', u );
    dispatch(setUser(u)); 
  })

  if (user){
    return (
      <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
              <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
             
              
            
          </Stack.Navigator>
      </NavigationContainer>
);
}else {
    return (
      <NavigationContainer>
           <Stack.Navigator initialRouteName="welcome">
              <Stack.Screen options={{headerShown: false}} name="welcome" component={WelcomeScreen} />  
              <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> 
              <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
              <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
              
            
          </Stack.Navigator>
      </NavigationContainer>
);
  }
 
}