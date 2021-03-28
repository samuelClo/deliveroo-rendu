import React from "react";
import {ImageBackground, StyleSheet} from "react-native";

import {Text} from "native-base";

import {COLORS, TYPOGRAPHY} from "../Assets";

export const CATEGORY_WIDTH = 85;

export const CategoriesComponent = ({item, style}) => (
    <ImageBackground source={{uri: item.url}} style={{...styles.category, ...style}}>
        <Text style={styles.categoryLabel}>
            {item.label}
        </Text>
    </ImageBackground>
);

const styles = StyleSheet.create({
    categoryLabel: {
        ...TYPOGRAPHY.M1,
        fontWeight: "bold",
        textShadowColor: COLORS.gray,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    category: {
        height: 85,
        width: CATEGORY_WIDTH,
        borderRadius: 3,
        marginRight: 7,
        justifyContent: "flex-end",
        paddingBottom: 7,
        paddingLeft: 5,
        overflow: "hidden",
    },
});
