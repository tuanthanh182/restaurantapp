import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet } from 'react-native';

function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpw, confirmPassword] = useState('');

  const handleSignUp = () => {
    //handle
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up for Restaurant App</Text>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                value={confirmpw}
                onChangeText={(text) => confirmPassword(text)}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={handleSignUp} >
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0, 160, 0, 0.48)',
        height: '100%',

        paddingTop: 20,
    },
    title:{
        fontSize: 32,
        color: 'rgba(150, 60, 90, 1)', 
        fontWeight: '700',

        textAlign: 'center',
    },
    form:{
        backgroundColor: 'rgba(255,255,255,0.25)',
        height: '48%',
        width: '80%',
        borderRadius: 12,

        margin: 40,
    },
    input:{
        color: "#ffffff",
        fontSize: 16,

        marginTop: 30,
        marginLeft: 20,
    },
    btn: {
        backgroundColor: "#ffffff",
        height: 36,
        width: 84,
        borderRadius: 6,

        marginTop: 40,
        marginLeft: 256,
    },
    btnText: {
        color: "rgb(0,180,180)",
        fontSize: 20,

        textAlign: 'center',
    }
})