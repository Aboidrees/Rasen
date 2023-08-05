import {ImageBackground, StyleSheet, Text, View} from "react-native";
import horse from "../../../../assets/images/horse.png";
import React from "react";

export default function BookmarkCollection() {
    return (<ImageBackground source={horse} borderRadius={30}>
            <View style={styles.collectionContainer}>
                <Text style={{alignSelf: 'flex-end',}}>| |</Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.collectionName}>Title</Text>
                    <Text style={styles.articlesNumber}>12 Articles</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
const textStyle = {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontStyle: "normal",
};

const styles = StyleSheet.create({
    collectionContainer: {
        justifyContent: "space-between",
        backgroundColor: "#00000060",
        height: 200,
        width: 140,
        padding: 20,
        borderRadius: 30
    },
    titleContainer: {
        alignItems: "flex-start",
        flexDirection: "column",
    },
    collectionName: {
        ...textStyle,
        fontSize: 14,
        fontWeight: "700"
    },
    articlesNumber: {
        ...textStyle,
        fontSize: 12,
        fontWeight: "400"

    }
})