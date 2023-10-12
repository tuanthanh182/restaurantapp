import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground,
    Modal,
    Button,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
    const [text, setText] = useState('');

    const [showMessageBox, setShowMessageBox] = useState(true);

    return (
        <SafeAreaView style={{
            height: "100%",
            marginTop: 24,
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showMessageBox}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        width: 300,
                        padding: 20,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 18, fontWeight: 700,
                        }}>"Shopertino" Would Like to Send You Notifications</Text>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 16,
                        }}>Notifications may include alerts, sounds and icon badges. These can be configured in Settings</Text>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: 20,
                        }}>
                            <TouchableOpacity onPress={() => setShowMessageBox(false)} style={{
                               marginLeft: 20,
                            }}>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'blue',
                                }}>Don't Allow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShowMessageBox(false)} style={{
                               marginLeft: 100,
                            }}>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'blue',
                                }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                marginBottom: 10, marginHorizontal: 12,
                position: "flex", top: 0, right: 0, left: 0,

            }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons
                        name='menu'
                        size={48}
                        style={{ opacity: 0.5 }}>
                    </Ionicons>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    marginTop: 6,
                }}>
                    Shopertino
                </Text>
                <TouchableOpacity style={{}}>
                    <Ionicons
                        name='cart'
                        size={48}
                        color='black'
                    >
                    </Ionicons>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <ScrollView horizontal style={{
                    marginTop: 12,
                }}>
                    <ImageBackground
                        source={require('../assets/1P.jpg')}
                        style={{
                            resizeMode: "contain",
                            height: 100, width: 200,
                            marginLeft: 12,
                            borderRadius: 10, overflow: "hidden",
                        }}>
                        <View style={{
                            height: '100%',
                            backgroundColor: 'rgba(80,80,80,0.8)',
                        }}>
                            <Text style={{
                                color: "white", fontWeight: 700,
                                textAlign: 'center',
                                marginVertical: 36,
                            }}>CLOTHING</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/1P.jpg')}
                        style={{
                            resizeMode: "contain",
                            height: 100, width: 200,
                            marginLeft: 12,
                            borderRadius: 10, overflow: "hidden",
                        }}>
                        <View style={{
                            height: '100%',
                            backgroundColor: 'rgba(80,80,80,0.8)',
                        }}>
                            <Text style={{
                                color: "white", fontWeight: 700,
                                textAlign: 'center',
                                marginVertical: 36,
                            }}>ACCESSORIES</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../assets/1P.jpg')}
                        style={{
                            resizeMode: "contain",
                            height: 100, width: 200,
                            marginLeft: 12,
                            borderRadius: 10, overflow: "hidden",
                        }}
                    >
                        <View style={{
                            height: '100%',
                            backgroundColor: 'rgba(80,80,80,0.8)',
                        }}>
                        </View>
                    </ImageBackground>
                </ScrollView>
                <View style={{ paddingVertical: 40, paddingHorizontal: 10, flex: 1, }}>
                    <View style={{ marginBottom: 30 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')} style={{
                                width: '100%',
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    marginBottom: 15, marginTop: 10,
                                    fontWeight: 700,
                                    textAlign: 'center',
                                }}>
                                    New Arrivals
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }}>
                            <TouchableOpacity
                                style={{ marginRight: 10, marginLeft: 20, }}
                                onPress={() => navigation.navigate('Detail')}
                            >
                                <View>
                                    <ImageBackground
                                        style={{
                                            width: 300,
                                            height: 400,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10, overflow: 'hidden',
                                        }}
                                        source={require('../assets/1P.jpg')}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ marginTop: 2 }}>Util 10.10</Text>
                                            <Ionicons name="heart" size={24}></Ionicons>
                                        </View>
                                    </ImageBackground>
                                    <View style={{

                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: 700, textAlign: 'center', }}>Iron Armor</Text>
                                        <Text style={{ fontSize: 16, color: "rgb(85,85,85)", textAlign: 'center', }}>$1M</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginRight: 10, marginLeft: 20, }}
                                onPress={() => navigation.navigate('Detail')}
                            >
                                <View>
                                    <ImageBackground
                                        style={{
                                            width: 300,
                                            height: 400,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10, overflow: 'hidden',
                                        }}
                                        source={require('../assets/1P.jpg')}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ marginTop: 2 }}>Util 10.10</Text>
                                            <Ionicons name="heart" size={24}></Ionicons>
                                        </View>
                                    </ImageBackground>
                                    <View style={{

                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: 700, textAlign: 'center', }}>Iron Armor</Text>
                                        <Text style={{ fontSize: 16, color: "rgb(85,85,85)", textAlign: 'center', }}>$1M</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginRight: 10, marginLeft: 20, }}
                                onPress={() => navigation.navigate('Detail')}
                            >
                                <View>
                                    <ImageBackground
                                        style={{
                                            width: 300,
                                            height: 400,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10, overflow: 'hidden',
                                        }}
                                        source={require('../assets/1P.jpg')}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ marginTop: 2 }}>Util 10.10</Text>
                                            <Ionicons name="heart" size={24}></Ionicons>
                                        </View>
                                    </ImageBackground>
                                    <View style={{

                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: 700, textAlign: 'center', }}>Iron Armor</Text>
                                        <Text style={{ fontSize: 16, color: "rgb(85,85,85)", textAlign: 'center', }}>$1M</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
                            <Text style={{
                                fontSize: 20, fontWeight: 700,
                                marginBottom: 15, marginTop: 10, marginLeft: 32,
                            }}>Featured</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal>
                        <View style={{
                            marginLeft: 32,
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                        <View style={{
                            marginLeft: 32,
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                        <View style={{
                            marginLeft: 32,
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                    </ScrollView>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-between",
                        marginTop: 10,
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
                            <Text style={{
                                fontSize: 20, fontWeight: 700,
                                marginBottom: 15, marginTop: 10, marginLeft: 32,
                            }}>Best Sellers</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: "space-evenly",
                    }}>
                        <View style={{
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                        <View style={{
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row', justifyContent: "space-evenly",
                    }}>
                        <View style={{
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                        <View style={{
                        }}>
                            <ImageBackground
                                source={require('../assets/1P.jpg')}
                                style={{
                                    resizeMode: "contain",
                                    width: 200, height: 300,
                                    borderRadius: 8, overflow: 'hidden',
                                }}>
                            </ImageBackground>
                            <Text style={{
                                fontWeight: 700, fontSize: 16,
                                marginTop: 8,
                            }}>$1M</Text>
                            <Text style={{
                                fontWeight: 700, color: "rgb(80,80,80)"
                            }}>Iron Armor</Text>
                        </View>
                    </View>


                    {/* <View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 17, marginBottom: 15 }}>Most Popular</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/1P.jpg')}
                                    style={styles.image}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text>Noodles</Text>
                                    <Text>$200</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
                <View style={{
                    marginBottom: 48, marginHorizontal: 60,
                    height: 60,
                }}>
                    <TouchableOpacity onpress={() => { }} style={{
                        height: 60,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 10,
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Text style={{
                            fontWeight: 700,
                        }}>Browse all</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <View style={{
                flexDirection: 'row', justifyContent: 'space-around',
                position: 'fixed', bottom: 0, left: 0, right: 0,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity onPress={() => { }}
                    style={{ marginTop: 12 }}>
                    <Ionicons name="list" size={32} color="blue"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={{ marginTop: 12 }}>
                    <Ionicons name="heart" size={32}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={{ backgroundColor: 'blue', borderRadius: 25 }}>
                    <Ionicons name="add" size={48}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={{ marginTop: 12 }}>
                    <Ionicons name="mail" size={32}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}
                    style={{ marginTop: 12 }}>
                    <Ionicons name="person" size={32}></Ionicons>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    section: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    }
});