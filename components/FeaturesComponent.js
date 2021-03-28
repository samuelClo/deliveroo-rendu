import React from "react";
import {ImageBackground, View, StyleSheet, TouchableOpacity} from "react-native";

import {Text} from "native-base";
import {SharedElement} from 'react-navigation-shared-element';

import {COLORS, TYPOGRAPHY, ELEVATION} from "../Assets";

export const FEATURE_WIDTH = 310

export const FeaturesComponent = ({item, style, navigation}) => (
    <View style={{...styles.wrapperFeature, ...style}}>
        <View style={styles.wrapperFeatureImage}>
            <TouchableOpacity onPress={() => navigation.navigate('detailScreen', {item})}>
                <SharedElement id={`item.${item.id}.photo`}>
                    <ImageBackground source={{uri: item.url}} style={styles.featureImage}>
                        <View style={styles.featurePromoWrapper}>
                            <Text style={styles.featurePromoLabel}>
                                {item.promoLabel}
                            </Text>
                        </View>
                    </ImageBackground>
                </SharedElement>
            </TouchableOpacity>

            <View style={styles.featureTimeWrapper}>
                <Text style={styles.featureTimeValue}>
                    {item.deliveryTime}
                </Text>
                <Text style={styles.featureTimeUnit}>
                    min
                </Text>
            </View>
        </View>
        <Text style={styles.featureTitle}>
            {item.title}
        </Text>

        <Text>
            <Text style={styles.featureDescriptionNote}>
                {item.note}
            </Text>
            <Text style={styles.textGray}>
                {item.describe}
            </Text>
        </Text>
        <Text style={styles.textGray}>
            {item.distance}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    textGray: {
        ...TYPOGRAPHY.M3,
    },
    wrapperFeature: {
        marginRight: 7,
        flexDirection: "column",
        width: FEATURE_WIDTH,
        overflow: "hidden",
    },
    wrapperFeatureImage: {
        overflow: "hidden",
        paddingBottom: 15,
        position: "relative",
    },
    featureImage: {
        width: "100%",
        height: 180,
        borderRadius: 5,
        overflow: "hidden",
    },
    featurePromoWrapper: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 3,
        paddingVertical: 5,
        alignSelf: "flex-start",
        borderRadius: 5,
        marginTop: 7,
        marginLeft: 7,
    },
    featurePromoLabel: {
        ...TYPOGRAPHY.M1
    },
    featureTimeWrapper: {
        paddingVertical: 6,
        paddingHorizontal: 17,
        borderRadius: 25,
        backgroundColor: "#ffffff",
        alignSelf: "flex-start",
        overflow: "hidden",
        position: "absolute",
        bottom: 3,
        right: 12,
        ...ELEVATION.E1
    },
    featureTimeUnit: {
        ...TYPOGRAPHY.M1,
        textAlign: "center",
        color: COLORS.FONT.gray,
        lineHeight: 14,
    },
    featureTimeValue: {
        ...TYPOGRAPHY.M2
    },
    featureTitle: {
        fontWeight: "bold",
    },
    featureDescriptionNote: {
        ...TYPOGRAPHY.M3,
        color: COLORS.FONT.primaryDarken,
    },
})
