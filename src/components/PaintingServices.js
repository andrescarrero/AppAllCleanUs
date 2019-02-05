import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { Container, Header, Content, Text, Body, Title } from "native-base";

import FooterServiceActive from "./footer/FooterServiceActive";

export default class PaintingServices extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header style={styles.backgroundHeader}>
                    <Body style={styles.body}>
                        <TouchableOpacity
                            style={styles.press}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <View style={styles.back}>
                                <Image
                                    style={styles.imageHeaderBack}
                                    source={require("../images/services/painting/header/backHeader.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerCenter}>
                            <Image
                                style={styles.imageHeaderPainting}
                                source={require("../images/services/painting/header/imageHeader.png")}
                            />
                            <Title>Painting</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate(
                                "PaintingServices2",
                                {
                                    navigation: this.props.navigation
                                }
                            )
                        }
                    >
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentPainting}
                                    source={require("../images/services/painting/paintingServices.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Painting Services
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate(
                                "PaintingFrontDoor",
                                {
                                    navigation: this.props.navigation
                                }
                            )
                        }
                    >
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentPainting}
                                    source={require("../images/services/painting/paintingFrontDoor.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Painting Front Door
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => null}>
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentPainting}
                                    source={require("../images/services/painting/paintingGarage.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Painting Garage
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                </Content>
                <FooterServiceActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundHeader: {
        backgroundColor: "#ff0012"
    },
    body: {
        flex: 1,
        flexDirection: "row"
    },
    headerCenter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 40
    },
    imageHeaderPainting: {
        height: 35,
        width: 35,
        marginRight: 10
    },
    imageHeaderBack: {
        height: 19,
        width: 14
    },
    back: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 5
    },
    list: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#c2c2c2"
    },
    imageContentPainting: {
        marginRight: 20,
        marginLeft: 40
    },
    titleService: {
        color: "#5e5e5e",
        fontSize: 18
    },
    descriptionService: {
        color: "#bbbbbb",
        fontSize: 14
    },
    press: {
        height: 40,
        width: 40,
        alignItems: "flex-start"
    }
});
