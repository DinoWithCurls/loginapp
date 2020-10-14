import React from 'react';
import {View,Text, StyleSheet,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Final = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#0097A7" />
            <View style={styles.header}>
                <Animatable.Text style={styles.text_head} animation="zoomIn">THANK YOU!</Animatable.Text>
            </View>
        </View>
    );
}
export default Final;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0097A7'
    },
    text_head: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 110
    },
    header: {
        flex: 1,
        justifyContent: 'space-evenly',
        
        paddingBottom: 50
    },
});