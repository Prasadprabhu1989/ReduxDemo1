import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import {getLogin} from './action';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import {View} from 'react-native';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
class InitialView extends Component{
    
    // this.props.getLogin();
    componentDidMount(){

      this.props.getLogin();
      
    }
    render(){

    return(
      // <View></View>
        <NavigationContainer>
    <Stack.Navigator>
  
{/* <ItemList></ItemList> */}
          <Stack.Screen name="ItemScreen" component={ItemList} />
          <Stack.Screen name= "DetailScreen" component={DetailScreen}></Stack.Screen>
   
    </Stack.Navigator>
    </NavigationContainer>
    );
    }
}
const mapStateToProps = (state) => {
    console.log('IsLogin ', state.auth.isLogin);
    return{
      isLogin: state.isLogin,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      getLogin: () => dispatch(getLogin()),
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(InitialView);