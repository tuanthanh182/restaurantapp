import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    Modal,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons"

function Detail({ navigation }) {
    const [showMessageBox, setShowMessageBox] = useState(false);
    return (
        <SafeAreaView style={{
            marginTop: 24,
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showMessageBox}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    // alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        width: '100%',
                        padding: 20,
                        backgroundColor: 'white',
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            borderBottomWidth: 1, borderBottomColor: 'rgb(160,160,160)',
                            paddingBottom: 12,
                        }}>
                            <Text style={{
                                color: 'black', fontWeight: 700, fontSize: 16,
                            }}><Ionicons name="logo-apple" size={20}></Ionicons>Pay</Text>
                            <TouchableOpacity onPress={() => setShowMessageBox(false)}>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'blue',
                                }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            borderBottomWidth: 1, borderBottomColor: 'rgb(160,160,160)',
                            paddingBottom: 12, marginTop: 12,
                        }}>
                            <Text style={{
                                color: 'rgb(100,100,100)', fontSize: 18,
                                flex: 1,
                            }}>CARD</Text>
                            <View style={{
                                flex: 2, 
                            }}>
                                <Text>
                                    BANK OF SKETCH CREDIT
                                </Text>
                                <Text>
                                    (****4242)
                                </Text>
                            </View>
                            <Ionicons name="arrow-forward" size={24} color="blue"></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            borderBottomWidth: 1, borderBottomColor: 'rgb(160,160,160)',
                            paddingBottom: 12, marginTop: 12,
                        }}>
                            <Text style={{
                                color: 'rgb(100,100,100)', fontSize: 18,
                                flex: 1,
                            }}>CARD</Text>
                            <View style={{
                                flex: 2, 
                            }}>
                                <Text>
                                    BANK OF SKETCH CREDIT
                                </Text>
                                <Text>
                                    (****4242)
                                </Text>
                            </View>
                            <Ionicons name="arrow-forward" size={24} color="blue"></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            borderBottomWidth: 1, borderBottomColor: 'rgb(160,160,160)',
                            paddingBottom: 12, marginTop: 12,
                        }}>
                            <Text style={{
                                color: 'rgb(100,100,100)', fontSize: 18,
                                flex: 1,
                            }}>CARD</Text>
                            <View style={{
                                flex: 2, 
                            }}>
                                <Text>
                                    BANK OF SKETCH CREDIT
                                </Text>
                                <Text>
                                    (****4242)
                                </Text>
                            </View>
                            <Ionicons name="arrow-forward" size={24} color="blue"></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            borderBottomWidth: 1, borderBottomColor: 'rgb(160,160,160)',
                            paddingBottom: 12, marginTop: 12,
                        }}>
                            <Text style={{
                                color: 'rgb(100,100,100)', fontSize: 18,
                                flex: 1,
                            }}></Text>
                            <View style={{
                                flex: 2, 
                            }}>
                                <Text>
                                    BANK OF SKETCH CREDIT
                                </Text>
                                <Text>
                                    (****4242)
                                </Text>
                            </View>
                            <Text>$1.000.000</Text>
                        </TouchableOpacity>
                        <View style={{
                            width: '100%',
                            marginTop: 20,
                        }}>
                            <TouchableOpacity onPress={() => setShowMessageBox(false)} style={{
                            }}>
                                <Ionicons name="finger-print" style={{
                                    color: 'red',
                                    textAlign: 'center',
                                    fontSize: 48,
                                }}></Ionicons>
                                <Text style={{
                                    fontSize: 17, color: 'black',
                                    textAlign: 'center',
                                }}>Pay with TouchID</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <ImageBackground
                source={require('../assets/1P.jpg')}
                style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: 760,
                    position: 'relative',
                    top: 0,
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name="arrow-down" size={32} color="white"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="share" size={32} color="white"></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: '125%',
                }}>
                    <Ionicons name="heart" size={32} color='red' style={{

                    }}></Ionicons>
                </View>
            </ImageBackground>
            <View style={{
                marginHorizontal: 24, marginTop: 8,
                borderBottomWidth: 2, borderBottomColor: 'rgb(160,160,160)',
                height: 90,
            }}>
                <Text style={{
                    marginTop: 8,
                    fontWeight: 700, fontSize: 24,
                }}>Iron Armor</Text>
                <Text style={{
                    marginTop: 8,
                    fontWeight: 700, fontSize: 20, color: 'rgb(80,80,80)'
                }}>$1.000.000</Text>
            </View>
            <View style={{
                marginTop: 12, marginHorizontal: 40,
                flexDirection: 'row', justifyContent: 'space-around',
            }}>
                <TouchableOpacity onPress={() => { }} style={{
                    height: 50, width: 200,
                    backgroundColor: 'rgb(60,60,60)', borderRadius: 10,
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <Text style={{
                        color: 'white', fontWeight: 700, fontSize: 16,
                    }}>ADD TO BAG</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowMessageBox(true)} style={{
                    height: 50, width: 200,
                    backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'black',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <Text style={{
                        color: 'black', fontWeight: 700, fontSize: 16,
                    }}><Ionicons name="logo-apple" size={20}></Ionicons>Pay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    );
}

export default Detail;