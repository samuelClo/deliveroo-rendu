import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import {COLORS, ELEVATION} from "../Assets";

export const ButtonCircleComponent = (props) => {
    const {
        onPress,
        name,
        size = 38,
        style
    } = props

    const sizeStyle = {
        height: size,
        width: size,
        borderRadius: size / 2,
    }

    return (
        <TouchableOpacity onPress={onPress} style={{
            ...styles.wrapper,
            ...sizeStyle,
            ...style
        }}>
            <Icon
                name={name}
                size={size / 2}
                color={COLORS.primary}
                style={styles.locationIcon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
        ...ELEVATION.E2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
