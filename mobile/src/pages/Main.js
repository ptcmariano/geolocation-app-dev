import React, { useEffect, useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: false
                })
                const { latitude, longitude } = coords,
                        zoomDefault = 0.04
                console.log('ll',latitude,longitude);
                setCurrentRegion({
                    latitude,
                    longitude,
                    longitudeDelta: zoomDefault,
                    latitudeDelta: zoomDefault
                })
            }
        }
        loadInitialPosition()
    }, [])

    if (!currentRegion) {
        return null
    }

    return (
        <MapView style={styles.map}>
            <Marker coordinate={{latitude:-23.4894222,longitude:-47.4638434}}>
                <Image style={styles.avatar}
                    source={{uri:'https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s88-c-k-c0xffffffff-no-rj-mo'}} />

                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'diego3g' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Name fixed</Text>
                        <Text style={styles.devTechs}>Techs</Text>
                        <Text style={styles.devBio}>Bio</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
        <View style={styles.searchForm}>
            <TextInput
                style={styles.searchInput}
                placeholder="Busca por devs"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.loadButton}>
                <MaterialIcons name="my-location" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#a311ea'
    },
    callout: {
        width: 260
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    devTechs: {
        color: '#333',
        marginTop: 5
    },
    devBio: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8e4dff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
})

export default Main