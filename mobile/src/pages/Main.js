import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, Image } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main() {
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
            </Marker>
        </MapView>
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
    }
})

export default Main