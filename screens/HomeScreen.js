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
    ImageBackground
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Detail from './Detail';

function HomeScreen({ navigation }) {
    const [text, setText] = useState('');

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons
                                name='search'
                                size={24}
                                style={{ opacity: 0.5 }}>
                            </Ionicons>
                        </TouchableOpacity>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0, padding: 8, width: 100, marginRight: 250, marginTop: -8, }}
                            value={text} 
                            placeholder="Search"
                        />
                        <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 8 }}>
                            <Ionicons
                                name='filter'
                                size={32}
                                color='white'
                            >
                            </Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
                                <Text style={{ fontSize: 20, marginBottom: 15, marginTop: 10, fontWeight: 700 }}>Next to you</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text>On the map</Text>
                                <Ionicons name="arrow-forward"
                                    style={{ marginTop: 4, }}></Ionicons>
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
                                            width: 200,
                                            height: 200,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10,
                                        }}
                                        source={require('../assets/avt.jpg')}
                                    >
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{marginTop: 2}}>Util 10.10</Text>
                                        <Ionicons name="heart" size={24}></Ionicons>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 14, width: 120 }}>Go for a walk and feed the dog</Text>
                                        <Ionicons name="mail" size={24} style={{ marginRight: 30 }} color="black"></Ionicons>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginRight: 10, marginLeft: 20, }}
                                onPress={() => navigation.navigate('Category')}
                            >
                                <View>
                                    <ImageBackground
                                        style={{
                                            width: 200,
                                            height: 200,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10,
                                        }}
                                        source={require('../assets/avt.jpg')}
                                    >
                                        <Ionicons name="heart" size={32} style={{ marginLeft: 160 }}></Ionicons>
                                    </ImageBackground>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 14, width: 120 }}>Go for a walk and feed the dog</Text>
                                        <Ionicons name="mail" size={24} style={{ marginRight: 30 }} color="black"></Ionicons>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginRight: 10, marginLeft: 20, }}
                                onPress={() => navigation.navigate('Category')}
                            >
                                <View>
                                    <ImageBackground
                                        style={{
                                            width: 200,
                                            height: 200,
                                            resizeMode: 'contain',
                                            marginRight: 20,
                                            borderRadius: 10,
                                        }}
                                        source={require('../assets/avt.jpg')}
                                    >
                                        <Ionicons name="heart"></Ionicons>
                                    </ImageBackground>
                                    <Text>Hamburger</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
                            <Text style={{ fontSize: 20, marginBottom: 15, marginTop: 10, fontWeight: 700 }}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text>See all</Text>
                            <Ionicons name="arrow-forward"
                                style={{ marginTop: 4, }}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { }} style={{
                            flexDirection: "row"

                        }}>
                            <View>
                                <Image
                                    resizeMode='contain'
                                    source={require('../assets/avt.jpg')}
                                    style={{
                                        height: 80,
                                        width: 80,
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: 20, }}>
                                <Text style={{ fontWeight: 700, fontSize: 18 }}>Moving and things</Text>
                                <Text style={{fontSize: 12}}>24 tasks</Text>
                            </View>
                            <Ionicons name="arrow-forward" size={32} style={{ marginTop: 24, marginLeft: 160, opacity: 0.5, }}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={{
                            flexDirection: "row"

                        }}>
                            <View>
                                <Image
                                    resizeMode='contain'
                                    source={require('../assets/avt.jpg')}
                                    style={{
                                        height: 80,
                                        width: 80,
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: 20, }}>
                                <Text style={{ fontWeight: 700, fontSize: 18 }}>Help around the house</Text>
                                <Text style={{ fontSize: 12}}>8 tasks</Text>
                            </View>
                            <Ionicons name="arrow-forward" size={32} style={{ marginTop: 24, marginLeft: 160, opacity: 0.5, }}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', 
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        backgroundColor: 'white'}}>
                        <TouchableOpacity onPress={() => { }}
                            style={{marginTop: 12}}>
                            <Ionicons name="list" size={32} color="black"></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}
                            style={{marginTop: 12}}>
                            <Ionicons name="heart" size={32}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}
                            style={{backgroundColor: 'white', borderRadius: 25}}>
                            <Ionicons name="add" size={48}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}
                            style={{marginTop: 12}}>
                            <Ionicons name="mail" size={32}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}
                            style={{marginTop: 12}}>
                            <Ionicons name="person" size={32}></Ionicons>
                        </TouchableOpacity>

                    </View>

                    {/* <View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 17, marginBottom: 15 }}>Most Popular</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/avt.jpg')}
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
            </ScrollView>
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
        resizeMode: 'contain'
    }
});