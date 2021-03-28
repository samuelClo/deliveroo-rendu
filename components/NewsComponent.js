import React from "react";
import {ImageBackground, TouchableOpacity, StyleSheet} from "react-native";

import {Text} from "native-base";

import {COLORS, TYPOGRAPHY} from "../Assets";

export const NEWS_WIDTH = 325

export const NewsComponents = ({item, style}) => {
    return (
        <ImageBackground source={{uri: item.url}} style={{...styles.news, ...style}}>
            <TouchableOpacity style={styles.newsCommandButton}>
                <Text style={styles.newsCommandLabel}>
                    je commande
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    news: {
        justifyContent: "flex-end",
        width: NEWS_WIDTH,
        height: 170,
        borderRadius: 3,
        marginRight: 7,
        overflow: "hidden",
    },
    newsCommandButton: {
        marginBottom: 10,
        marginLeft: 10,
        paddingVertical: 4,
        paddingHorizontal: 7,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    newsCommandLabel: {
        ...TYPOGRAPHY.M1,
        fontWeight: 'bold'
    },
})
