import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons"

function Detail({ navigation }) {
    return (
        <ImageBackground
            source = {require('../assets/avt.jpg')}
            resizeMode = 'contain'
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                top: 0,
            }}
        >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" size={32}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="" size={32}></Ionicons>
            </TouchableOpacity>
        </View>
        </ImageBackground>
            
        
    );
}

export default Detail;