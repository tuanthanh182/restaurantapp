import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity } from 'react-native';

function LandingScreen({ navigation }) {
  return (
    <View style={{ flex:1 }}>  
        <ImageBackground style={styles.bgimg} source={require('../assets/bgLanding.jpg')} resizeMode="cover">
        <Text style={styles.textIntro}>Welcome to Restaurant App</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity 
                style = {styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.button}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
    bgimg: {
        height: "100%",
    },
    textIntro: {
        fontSize: 32,
        color: 'white',
        backgroundColor: 'rgba(0,0,124,0.6)',
        
        textAlign: 'center',
    },
    btnContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgba(0,0,200,0.8)',
        height: 40,
        width: 100,
        borderRadius: 4,
    },
    btnText: {
        color: "#ffffff",
        fontSize: 20,

        textAlign: 'center',
        verticalAlign: 'middle',
    }
})