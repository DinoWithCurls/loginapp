import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View,Text,StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

const First = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#607D8B'/>
            <View style={styles.header}>
                <Animatable.Text style={styles.title} animation="zoomIn">
                    LOGIN / REGISTRATION
                </Animatable.Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text}>Log in with account</Text>
                <View style={styles.button}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text>GET STARTED</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Don't have an account?</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')} 
                 style={[styles.signIn, {
                     borderColor: '#009387', borderWidth: 1}]}>
                    <Text style={[styles.textSign, {color: 'tomato'}]}>REGISTER NOW</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
export default First;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#607D8B'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:15,
        fontSize: 25,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});