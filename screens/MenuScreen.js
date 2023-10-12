import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

function MenuScreen({ navigation }) {

    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons
                        name='menu'
                        size={37}>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name='menu'
                        size={37}>
                    </Ionicons>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48%',
                            height: 115,
                            marginBottom: 20,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: "100%",
                                height: 120,
                                resizeMode: 'contain',
                                position: 'absolute',

                            }}
                            source={require('../assets/1P.jpg')}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', color: '#fff' }}>Breakfast</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48%',
                            height: 115,
                            marginBottom: 20,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: "100%",
                                height: 120,
                                resizeMode: 'contain',
                                position: 'absolute',

                            }}
                            source={require('../assets/1P.jpg')}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', color: '#fff' }}>Breakfast</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48%',
                            height: 115,
                            marginBottom: 20,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: "100%",
                                height: 120,
                                resizeMode: 'contain',
                                position: 'absolute',

                            }}
                            source={require('../assets/1P.jpg')}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', color: '#fff' }}>Breakfast</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48%',
                            height: 115,
                            marginBottom: 20,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: "100%",
                                height: 120,
                                resizeMode: 'contain',
                                position: 'absolute',

                            }}
                            source={require('../assets/1P.jpg')}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', color: '#fff' }}>Breakfast</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48%',
                            height: 115,
                            marginBottom: 20,
                        }}
                    >
                        <ImageBackground
                            style={{
                                width: "100%",
                                height: 120,
                                resizeMode: 'contain',
                                position: 'absolute',

                            }}
                            source={require('../assets/1P.jpg')}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ position: 'absolute', color: '#fff' }}>Breakfast</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default MenuScreen;
