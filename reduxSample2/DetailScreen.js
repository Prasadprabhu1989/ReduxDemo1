import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { getDetailsById } from './action';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';


 class DetailScreen extends Component{
    componentDidMount(){
        // const { params } = this.props.navigation.state;
       
        // const itemId = params ? params.id : null;
        // const {itemId} = this.props.route.params;


        const itemId = this.props.route.params.itemid;
         console.log(itemId);
        this.props.getDetails(itemId);

    }
    render(){
        // const itemId = this.props.navigation.itemId;
        // const itemId = this.props.route.params.itemid;

        // // const itemId = this.props.navigation.itemid;
        // console.log({itemId});
        // const itemId = this.props.navigation.getParam('itemid', '');
        // console.log(itemId);
        return(
            <View>
            {
                <>
                {this.props.items.map(obj =>
                    <Text>{obj.title}</Text>
                )}
                </>
            }
            <Text></Text></View>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("detail items ", state.normal.id);

    return{
    items: state.normal.id,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    getDetails: (id) => dispatch(getDetailsById(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailScreen);