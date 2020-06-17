import React, { Component } from 'react';
// import {Text} from 'react';
import { connect } from 'react-redux';
import store from './store';
import { ActivityIndicator, View, Text, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {itemsFetchData, saveLogin, getData} from './action';


class ItemList extends Component{
    componentDidMount(){
        // unsubscribe();
        console.log("Component did mount");
        NetInfo.fetch().then(
            state => {
                console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        
            this.retrieveData(state.isConnected);
    })
    // const unsubscribe = NetInfo.addEventListener(state => {
    //     console.log("Connection type", state.type);
    //     console.log("Is connected?", state.isConnected);



    // })
        // let s = store.getState()
        // console.log("Stor objects:",s);

    }
     retrieveData = (isConnected) => {
        if(isConnected){
            this.props.fetchdata('https://jsonplaceholder.typicode.com/todos');
        }
        else{
            console.log('disconnected');
            // this.props.getDataFromCache();
            let s = store.getState();
            console.log(s);
        }
    }
    render(){

        let lists = this.props.lists
        const { navigate } = this.props.navigation;
     


            if (this.props.hasErrored){
                return (<View style={{
                
                    flex:1,
                    justifyContent:'center',
                    alignSelf:'center'
                }}><Text>Error while fetching</Text></View>)
            }
            if(this.props.isLoading){
                return (
                   
                <ActivityIndicator ></ActivityIndicator>
              
                )
            }
            return(
               
                <View style= {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
            <FlatList data={this.props.lists}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <TouchableOpacity style={{
                    marginTop : 40,
                    borderColor: 'blue',
                    borderWidth: 2,

                }}
                onPress = {() => navigate('DetailScreen', 
                {
                    itemid: item.id,
                    otherParam: 'Pass whatever you want here',
                    
                    
                })}>

                    <Text style={{
                        fontSize: 30
                    }}>{item.title}</Text>
                </TouchableOpacity>
            )}>
          {/* {this.props.lists.map(item => 

                    <Text key={item.id}>{item.title}</Text>
                )} */}
                </FlatList>
                <Button title="Save" onPress={() =>this.clickLogin()}></Button>
                </View>
                // </SafeAreaView>
            )
            

        }
        clickLogin = () =>{
            this.props.saveLogins(true);
        }
    }



const mapStateToProps = (state) => {
    console.log('isloading ',state.normal.isLoading);

   
    // console.log('lists ',state.lists);
    console.log('haserored ',state.normal.hasErrored);
    return{
        lists: state.normal.lists,
        hasErrored: state.normal.hasErrored,
        isLoading: state.normal.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchdata: (url) => dispatch(itemsFetchData(url)),
        saveLogins: (bool) => dispatch(saveLogin(bool)),
    getDataFromCache: () => dispatch(getData()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
