import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

function MapHeader(props) {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "transparent",
        position: "absolute",
        padding: 18,
        alignSelf: "center",
        borderRadius: 24,
        backgroundColor: "white",
        top: 17,
        opacity: 0.85

    },
    text: {
        fontSize: 34,
        fontWeight: "bold",
        textTransform: "capitalize",
        justifyContent: "center",
        alignSelf: "center",
        opacity: 1.0
    }
})

export default MapHeader