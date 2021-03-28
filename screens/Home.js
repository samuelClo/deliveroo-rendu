import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, FlatList, TextInput} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";

import {connect} from 'react-redux';

import {COLORS, TYPOGRAPHY} from "../Assets";

import {NEWS_WIDTH} from "../components/NewsComponent";
import {CATEGORY_WIDTH} from "../components/CategoriesComponent";
import {FEATURE_WIDTH} from "../components/FeaturesComponent";

import {CATEGORIES, NEWS, FEATURES} from "../Assets/DATA";

import {
    FirstItemFeaturesComponent,
    FirstItemNewsComponent,
    FirstItemCategoriesComponent,
} from "../components";


export const MARGIN_LEFT_BODY = 13;

class Home extends React.PureComponent {
    renderCategories({item, index}) {
        return (
            <FirstItemCategoriesComponent item={item} index={index}/>
        )
    }

    renderNews({item, index}) {
        return (
            <FirstItemNewsComponent item={item} index={index}/>
        )
    }

    renderFeatures({item, index, navigation}) {
        return (
            <FirstItemFeaturesComponent item={item} index={index} navigation={navigation}/>
        )
    }

    render() {
        const {navigation} = this.props;

        return (
            <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
                {/*HEADER*/}
                <View style={styles.wrapperHeader}>
                    {/* LOCATION-USER */}
                    <View style={styles.wrapperLocationUser}>
                        <Image
                            source={require("../Assets/Pictures/cyclist.png")}
                            style={styles.headerPicture}
                        />
                        <View style={styles.headerContent}>
                            <Text style={styles.locationTimeLabel}>
                                Now
                            </Text>
                            <View style={styles.locationWrapper}>
                                <Text style={styles.locationLabel}>
                                    Current location
                                </Text>
                                <Icon
                                    name="chevron-down"
                                    size={15}
                                    color={COLORS.primary}
                                    style={styles.locationIcon}
                                />
                            </View>
                        </View>
                        <View style={styles.headerUserIcon}>
                            <Icon
                                name="user"
                                size={25}
                                color={COLORS.primary}
                            />
                        </View>
                    </View>
                    {/* DELIVERY TYPE */}
                    <View style={styles.wrapperDeliveryType}>
                        <View style={[styles.deliveryType, styles.deliveryTypeActive]}>
                            <Text style={{...styles.deliveryTypeLabel, ...styles.deliveryTypeActiveLabel}}>
                                Delivery
                            </Text>
                        </View>
                        <View style={styles.deliveryType}>
                            <Text style={styles.deliveryTypeLabel}>
                                Pickup
                            </Text>
                        </View>
                    </View>
                    {/* INPUT-SETTINGS */}
                    <View style={styles.wrapperInputSettings}>
                        <View style={styles.wrapperInput}>
                            <MaterialIcons
                                name="search"
                                color={COLORS.FONT.lightGray}
                                size={22}
                            />
                            <TextInput
                                placeholder="Dishes, restaurants or cuisines"
                                placeholderTextColor={COLORS.FONT.lightGray}
                                style={styles.inputSettingInput}
                            />
                        </View>
                        <Icon
                            name="sliders"
                            color={COLORS.primary}
                            size={23}
                            style={styles.settingIcon}
                        />
                    </View>
                </View>
                {/* BODY */}
                <View style={styles.body}>
                    {/* CATEGORIES SLIDER */}
                    <FlatList
                        data={CATEGORIES}
                        renderItem={this.renderCategories}
                        numColumns={1}
                        scrollEnabled
                        horizontal
                        style={styles.categoriesWrapper}
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={CATEGORY_WIDTH}
                        decelerationRate={"normal"}
                        pagingEnabled
                    />
                    {/*NEWS SLIDER*/}
                    <FlatList
                        data={NEWS}
                        renderItem={this.renderNews}
                        contentContainerStyle={styles.newsSliderWrapper}
                        numColumns={1}
                        scrollEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={NEWS_WIDTH}
                        decelerationRate={"normal"}
                        pagingEnabled
                    />
                    <Text style={styles.trendingNowLabel}>
                        Featured
                    </Text>
                    {/* FEATURES SLIDER*/}
                    <FlatList
                        data={FEATURES}
                        renderItem={(renderObject) => this.renderFeatures({...renderObject, navigation})}
                        numColumns={1}
                        scrollEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={FEATURE_WIDTH}
                        decelerationRate={"normal"}
                        pagingEnabled
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#ffffff",
    },
    // HEADER
    wrapperHeader: {
        paddingRight: 5,
        paddingLeft: 15,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.shadow,
    },
    // LOCATION-USER
    wrapperLocationUser: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    locationTimeLabel: {
        ...TYPOGRAPHY.M3
    },
    locationLabel: {
        ...TYPOGRAPHY.M2
    },
    locationWrapper: {
        flexDirection: "row",
    },
    headerContent: {
        flex: 1,
        marginLeft: 5,
    },
    wrapperLocation: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerPicture: {
        height: 45,
        width: 45,
        borderRadius: 25,
    },
    locationIcon: {
        marginLeft: 7,
        marginTop: 5,
    },
    headerUserIcon: {
        height: 45,
        width: 45,
        backgroundColor: COLORS.lightGray,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    // DELIVERY TYPE
    wrapperDeliveryType: {
        flexDirection: "row",
        marginBottom: 12,
    },
    deliveryType: {
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 20,
        color: COLORS.primary,
    },
    deliveryTypeActive: {
        backgroundColor: COLORS.primary,
    },
    deliveryTypeActiveLabel: {
        ...TYPOGRAPHY.M1,
        fontWeight: 'bold'
    },
    deliveryTypeLabel: {
        ...TYPOGRAPHY.M1,
        color: COLORS.primary,
    },
    // INPUT-SETTINGS
    wrapperInputSettings: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        color: COLORS.FONT.gray,
    },
    wrapperInput: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGrayDarken,
        flex: 1,
        paddingHorizontal: 14,
        borderRadius: 3,
    },
    inputSettingInput: {
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 7,
        borderRadius: 3,
        ...TYPOGRAPHY.M4,
    },
    settingIcon: {
        paddingRight: 12,
        paddingLeft: 19,
    },
    // BODY
    body: {
        paddingTop: 7,
        backgroundColor: COLORS.backgroundGray,
    },
    // CATEGORIES SLIDER
    categoriesWrapper: {
        marginBottom: 15,
    },
    // NEWS SLIDER
    newsSliderWrapper: {
        marginBottom: 20,
    },
    // TRENDING NOW LABEL
    trendingNowLabel: {
        ...TYPOGRAPHY.M2,
        marginBottom: 15,
        marginLeft: MARGIN_LEFT_BODY,
    },
});

const mapStateToProps = state => {
    return {
        displayFood: state.ParametersStore.displayFood
    }
}
// export default Home;
export default connect(
    mapStateToProps
)(Home)
