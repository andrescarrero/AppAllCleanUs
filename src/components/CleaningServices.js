import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { Container, Header, Content, Text, Body, Title } from "native-base";

import FooterServiceActive from "./footer/FooterServiceActive";

export default class CleaningServices extends Component {
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
                                    source={require("../images/services/cleaning/header/backHeader.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerCenter}>
                            <Image
                                style={styles.imageHeaderCleaning}
                                source={require("../images/services/cleaning/header/imageHeader.png")}
                            />
                            <Title>Cleaning</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <TouchableOpacity onPress={() => null}>
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/cleaning/homeCleaning.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Home Cleaning
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/cleaning/officeCleaning.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Office Cleaning
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/cleaning/deepCleaning.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Deep Cleaning
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                        <View style={styles.list}>
                            <View>
                                <Image
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/cleaning/garageCleaning.png")}
                                />
                            </View>
                            <View>
                                <Text style={styles.titleService}>
                                    Garage Cleaning
                                </Text>
                                <Text style={styles.descriptionService}>
                                    Lorem ipsum dolor sit amet, consectetur..
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Content>
                <FooterServiceActive />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    backgroundHeader: {
        backgroundColor: "#42addd"
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
    imageHeaderCleaning: {
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
    imageContentCleaning: {
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
