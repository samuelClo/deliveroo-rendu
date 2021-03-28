import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ScrollView, Animated} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {Container, Icon, Button} from 'native-base';
import {SharedElement} from 'react-navigation-shared-element';
import {connect} from 'react-redux';
import ParametersRedux from '../redux/ParametersRedux';

class detailScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            modalId: null,
            isSelectedBarbecue: false,
            isSelectedCurry: false,
            isSelectedAg: false,
            isSelectedCc: false,
            itemChicken: this.props.chicken,
            scrollY: new Animated.Value(0),
            optionalMenu: []
        }

        this.handleVisible = this.handleVisible.bind(this)
        this.setSelectionBarbecue = this.setSelectionBarbecue.bind(this)
        this.setSelectionCurry = this.setSelectionCurry.bind(this)
        this.setSelectionAg = this.setSelectionAg.bind(this)
        this.setSelectionCc = this.setSelectionCc.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.chicken !== state.itemChicken) {
            return {
                itemChicken: props.chicken
            };
        }
        return null;
    }

    componentDidMount() {
        this.setState({
            optionalMenu: this.props.optionalMenu,
        })
    }

    handleVisible = (visible, id) => {
        this.state.optionalMenu.map((item) => {
            if (item.id === id) {
                this.setState({
                    modalVisible: visible,
                    modalId: item.id
                })
            }
        })
    }

    setSelectionBarbecue = () => {
        this.setState({
            isSelectedBarbecue: !this.state.isSelectedBarbecue
        })
    }

    setSelectionCurry = () => {
        this.setState({
            isSelectedCurry: !this.state.isSelectedCurry
        })
    }

    setSelectionAg = () => {
        this.setState({
            isSelectedAg: !this.state.isSelectedAg
        })
    }

    setSelectionCc = () => {
        this.setState({
            isSelectedCc: !this.state.isSelectedCc
        })
    }

    render() {
        const opacityTranslation = this.state.scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

        const HEADER_MIN_HEIGHT = 50;
        const HEADER_MAX_HEIGHT = 250;
        const headerHeight = this.state.scrollY.interpolate(
            {
                inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
                outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
                extrapolate: 'clamp'
            });
        const subMenuHeaderOpacity = this.state.scrollY.interpolate({
            inputRange: [440, 445],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });

        const color = this.state.scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffffff', '#ffffff']
        });

        const {navigation, route} = this.props
        const {item} = route.params;
        return (
            <Container style={styles.whitesmokeColor}>
                <Animated.View style={{
                    position: "absolute",
                    top: 0,
                    borderBottomColor: "#94bf8c",
                    borderBottomWidth: 0.8,
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    zIndex: 99,
                    opacity: opacityTranslation,
                    backgroundColor: color,
                    width: Dimensions.get('window').width
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon style={[styles.greenDeliveroo, styles.br100]} name="arrow-back-outline"/>
                            </TouchableOpacity>

                            <Text style={[styles.titleAnimated, {marginLeft: 15}]}>🔥 McDonald'</Text>
                        </View>
                        <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]} name="search-outline"/>
                    </View>
                </Animated.View>

                <Animated.View style={{
                    position: "absolute",
                    top: 64,
                    paddingVertical: 10,
                    zIndex: 99,
                    opacity: subMenuHeaderOpacity,
                    backgroundColor: color,
                    width: Dimensions.get('window').width
                }}>
                    <View style={{paddingVertical: 5}}>
                        <ScrollView horizontal={true}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                width: Dimensions.get('window').width
                            }}>
                                <View style={styles.focusColor}>
                                    <Text>Les Bons plans</Text>
                                </View>

                                <View>
                                    <Text style={styles.greenDeliveroo}>Menus</Text>
                                </View>

                                <View>
                                    <Text style={styles.greenDeliveroo}>Snacks</Text>
                                </View>

                                <View>
                                    <Text style={styles.greenDeliveroo}>Menus specials</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Animated.View>

                <Animated.ScrollView onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}], {useNativeDriver: false}
                )}>
                    <View>
                        <View style={styles.headerIcon}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]}
                                      name="arrow-back-outline"/>
                            </TouchableOpacity>
                            <View style={styles.headerIconRight}>
                                <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]}
                                      name="share-social-outline"/>
                                <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]} name="search-outline"/>
                            </View>
                        </View>

                        <Animated.View style={{height: headerHeight}}>
                            <SharedElement id={`item.${item.id}.photo`}>
                                <Image style={{width: Dimensions.get('window').width, height: 250}}
                                       source={{uri: item.url}}/>
                            </SharedElement>
                        </Animated.View>
                    </View>

                    <View style={styles.widthTitle}>
                        <Text style={styles.title}>McDonald'</Text>

                        <Text>American Sandwich Burgers</Text>

                        <View style={styles.mapStyle}>
                            <Icon style={styles.gray} name="location-outline"/>
                            <Text style={styles.gray}>3.13 Km away * CENTRE COMMERCIAL CRETAIL SOLEIL - 101 AVENUE DU
                                GENERAL DE GAULE *
                                <Text style={styles.greenDeliveroo}> View map</Text>
                            </Text>
                        </View>

                        <Text style={[styles.gray, styles.mv10]}>
                            AMERICAN - BURGER - FASTFOOD
                        </Text>

                        <Text style={[styles.greenDeliveroo]}>
                            Show rating details
                        </Text>
                    </View>

                    <View style={[styles.widthTitle, styles.fxd, styles.aIc, styles.spb]}>
                        <View style={[styles.fxd, styles.aIc]}>
                            <Icon style={styles.mySize} name="bicycle"/>
                            <Text>Deliver in 25 - 40 min</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.greenDeliveroo}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.widthTitle, styles.fxd, styles.aIc]}>
                        <Icon style={styles.gray} name="alert-circle-outline"/>
                        <View style={styles.ml10}>
                            <Text>Restaurant info</Text>
                            <Text style={styles.gray}>Allergens and more</Text>
                        </View>
                    </View>

                    <View style={[styles.widthTitle]}>
                        <Text style={styles.gray}>
                            POUR LA SÉCURITÉ DE TOUS, CHAQUE COMMANDE EST PRÉPARÉ AVEC AMOUR
                            EN RESPECTANT DES MESURES SANITAIRES STRICTES 😷🍔✅
                        </Text>
                    </View>

                    <Text style={[styles.widthTitle, styles.fwb]}>LES BON PLANS</Text>

                    <View style={[styles.widthTitle]}>
                        {this.state.optionalMenu.map((item, index) => {
                            return <View key={index}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.handleVisible(true, item.id);
                                    }}>
                                    <View style={[styles.fxd, styles.aIc, styles.mv10]}>
                                        <View style={[styles.flex1, styles.pr10]}>
                                            <Text>{item.title}</Text>
                                            <Text numberOfLines={2} style={styles.gray}>{item.description}</Text>
                                            <Text style={[styles.gray, styles.mt10]}>{item.price}</Text>
                                        </View>
                                        <Image style={[styles.imagesFeatures]} source={{uri: item.image}}/>
                                    </View>
                                </TouchableOpacity>

                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={this.state.modalVisible && this.state.modalId === item.id}
                                >
                                    <View style={[styles.modalView]}>
                                        <TouchableOpacity
                                            style={[styles.headerIcon]}
                                            onPress={() => {
                                                this.handleVisible(false, item.id);
                                                this.props.updateChicken(0)
                                                this.setState({
                                                    isSelectedBarbecue: false,
                                                    isSelectedCurry: false,
                                                    isSelectedAg: false,
                                                    isSelectedCc: false
                                                })
                                            }}
                                        >
                                            <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]}
                                                  name="close-outline"/>
                                        </TouchableOpacity>

                                        <Image style={[styles.imagesFeaturesMenu]} source={{uri: item.image}}/>

                                        <View style={{paddingHorizontal: 12, marginTop: 15}}>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Text>{item.title}</Text>
                                                <Text style={[styles.gray]}>{item.price}</Text>
                                            </View>

                                            <Text numberOfLines={5} style={[styles.gray]}
                                                  style={{marginTop: 15}}>{item.description}</Text>
                                        </View>

                                        <View style={{paddingHorizontal: 12, marginTop: 25}}>
                                            <Text style={{fontWeight: "bold", paddingVertical: 20}}>Choisissez vos
                                                sauces (snackbox, kingbox)</Text>

                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: "space-between",
                                                paddingVertical: 5
                                            }}>
                                                <Text style={styles.label}>Sauce Barbecue</Text>
                                                <CheckBox
                                                    value={this.state.isSelectedBarbecue}
                                                    onValueChange={this.setSelectionBarbecue}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: "space-between",
                                                paddingVertical: 5
                                            }}>
                                                <Text style={styles.label}>Sauce Curry</Text>
                                                <CheckBox
                                                    value={this.state.isSelectedCurry}
                                                    onValueChange={this.setSelectionCurry}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: "space-between",
                                                paddingVertical: 5
                                            }}>
                                                <Text style={styles.label}>Sauce Aigre-Douce</Text>
                                                <CheckBox
                                                    value={this.state.isSelectedAg}
                                                    onValueChange={this.setSelectionAg}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: "space-between",
                                                paddingVertical: 5
                                            }}>
                                                <Text style={styles.label}>Sauce Chili Cheese</Text>
                                                <CheckBox
                                                    value={this.state.isSelectedCc}
                                                    onValueChange={this.setSelectionCc}
                                                />
                                            </View>
                                        </View>

                                        <View style={{
                                            paddingHorizontal: 12,
                                            marginTop: 25,
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            alignItems: 'center'
                                        }}>
                                            <TouchableOpacity
                                                disabled={this.state.itemChicken === 0}
                                                onPress={() => {
                                                    this.props.updateChicken(this.state.itemChicken - 1)
                                                }}
                                            >
                                                <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]}
                                                      name="remove-circle-outline"/>
                                            </TouchableOpacity>

                                            <Text>{this.state.itemChicken}</Text>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.updateChicken(this.state.itemChicken + 1)
                                                }}
                                            >
                                                <Icon style={[styles.greenDeliveroo, styles.bgc, styles.br100]}
                                                      name="add-circle-outline"/>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{paddingHorizontal: 12, paddingVertical: 20}}>
                                            <Button block success>
                                                <Text>Add item</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        })}
                    </View>

                    <Text style={[styles.widthTitle, styles.fwb]}>MENUS</Text>

                    <View style={[styles.widthTitle]}>
                        {this.state.optionalMenu.map((item, index) => {
                            return <View key={index}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.handleVisible(true, item.id);
                                    }}>
                                    <View style={[styles.fxd, styles.aIc, styles.mv10]}>
                                        <View style={[styles.flex1, styles.pr10]}>
                                            <Text>{item.title}</Text>
                                            <Text numberOfLines={2} style={styles.gray}>{item.description}</Text>
                                            <Text style={[styles.gray, styles.mt10]}>{item.price}</Text>
                                        </View>
                                        <Image style={[styles.imagesFeatures]} source={{uri: item.image}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        })}
                    </View>
                </Animated.ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "whitesmoke",
        shadowColor: "#000",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    bgt: {
        backgroundColor: 'transparent'
    },
    mt10: {
        marginTop: 10
    },
    flex1: {
        flex: 1
    },
    imagesFeaturesMenu: {
        width: Dimensions.get('window').width,
        height: 200
    },
    imagesFeatures: {
        width: 100,
        height: 100
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 10,
        position: 'absolute',
        top: 0,
        width: "95%",
        zIndex: 99
    },
    whitesmokeColor: {
        color: 'whitesmoke'
    },
    br100: {
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        padding: 8,
        fontSize: 25
    },
    bgc: {
        backgroundColor: 'white'
    },
    headerIconRight: {
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    mySize: {
        fontSize: 45,
        marginRight: 10,
    },
    greenDeliveroo: {
        color: "#01cdbb"
    },
    focusColor: {
        backgroundColor: "#01cdbb",
        color: 'whitesmoke',
        paddingVertical: 3,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    fwb: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 40
    },
    w100: {
        width: "80%",
        marginHorizontal: 5
    },
    pr10: {
        marginRight: 18
    },
    mv10: {
        marginVertical: 10
    },
    ml10: {
        marginLeft: 10
    },
    title: {
        fontSize: 30,
    },
    titleAnimated: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    widthTitle: {
        backgroundColor: '#fff',
        marginHorizontal: 18,
        marginVertical: 10
    },
    mapStyle: {
        flexDirection: "row",
        marginRight: 6
    },
    gray: {
        color: "gray"
    },
    fxd: {
        flexDirection: "row"
    },
    spb: {
        justifyContent: "space-between"
    },
    aIc: {
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        optionalMenu: state.ParametersStore.optionalMenu,
        chicken: state.ParametersStore.chicken
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateChicken: chicken => dispatch(ParametersRedux.updateChicken(chicken)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(detailScreen)
