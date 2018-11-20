import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

import {
    Container,
    Header,
    Content,
    Text,
    Body,
    Title,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Icon,
    Right
} from "native-base";

import FooterServiceActive from "./footer/FooterServiceActive";

export default class Services extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                {/* <Header style={styles.backgroundHeader}>
                    <Body style={styles.headerCenter}>
                        <Title>Services</Title>
                    </Body>
                </Header> */}
                <Content style={styles.content}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("CleaningServices")
                        }
                    >
                        <Card style={styles.cardServices}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={require("../images/services/cleaning.png")}
                                    />
                                    <Body>
                                        <Text>Cleaning Services</Text>
                                        <Text note>
                                            Lorem ipsum dolor sit amet,
                                            consectetur..
                                        </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    source={require("../images/services/b-cleaning.png")}
                                    style={{
                                        height: 190,
                                        width: null,
                                        flex: 1
                                    }}
                                />
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("PaintingServices")
                        }
                    >
                        <Card style={styles.cardServices}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={require("../images/services/painting.png")}
                                    />
                                    <Body>
                                        <Text>Painting Services</Text>
                                        <Text note>
                                            Lorem ipsum dolor sit amet,
                                            consectetur..
                                        </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    source={require("../images/services/b-painting.png")}
                                    style={{
                                        height: 190,
                                        width: null,
                                        flex: 1
                                    }}
                                />
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    {/* <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    "CleaningServices"
                                )
                            }
                        >
                            <View style={styles.center}>
                                <Image
                                    style={styles.servicesImageOn}
                                    source={require("../images/services/cleaning.png")}
                                />
                                <Text style={styles.servicesText}>
                                    Cleaning
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    "PaintingServices"
                                )
                            }
                        >
                            <View style={styles.center}>
                                <Image
                                    style={styles.servicesImageOn}
                                    source={require("../images/services/painting.png")}
                                />
                                <Text style={styles.servicesText}>
                                    Painting
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    {/* <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    "CleaningServices"
                                )
                            }
                        >
                            <View style={styles.center}>
                                <Image
                                    style={styles.servicesImageOn}
                                    source={require("../images/services/cleaning.png")}
                                />
                                <Text style={styles.servicesText}>
                                    Cleaning
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    "PaintingServices"
                                )
                            }
                        >
                            <View style={styles.center}>
                                <Image
                                    style={styles.servicesImageOn}
                                    source={require("../images/services/painting.png")}
                                />
                                <Text style={styles.servicesText}>
                                    Painting
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    {/* <View style={styles.row}>
                        <View style={styles.center}>
                            <Image
                                style={styles.servicesImageOn}
                                source={require("../images/services/electrician.png")}
                            />
                            <Text style={styles.servicesText}>Electrician</Text>
                        </View>
                        <View style={styles.center}>
                            <Image
                                style={styles.servicesImageOn}
                                source={require("../images/services/repair.png")}
                            />
                            <Text style={styles.servicesText}>Repair</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.center}>
                            <Image
                                style={styles.servicesImageOn}
                                source={require("../images/services/lawn.png")}
                            />
                            <Text style={styles.servicesText}>Lawn</Text>
                        </View>
                        <View style={styles.center}>
                            <Image
                                style={styles.servicesImageOn}
                                source={require("../images/services/pool.png")}
                            />
                            <Text style={styles.servicesText}>Pool</Text>
                        </View>
                    </View> */}
                </Content>
                <FooterServiceActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        height: 57
    },
    backgroundFooter: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#b1b8c1"
    },
    imageFooterCalendar: {
        flex: 1,
        height: 23,
        width: 25
    },
    imageFooterServices: {
        flex: 1,
        height: 24,
        width: 28
    },
    imageFooterShare: {
        flex: 1,
        height: 23,
        width: 22
    },
    active: {
        backgroundColor: "white"
    },
    activeText: {
        color: "#da4733"
    },
    footerText: {
        color: "#b1b8c1"
    },
    backgroundHeader: {
        backgroundColor: "#42addd"
    },
    headerCenter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    /* row: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    }, */
    row: {
        marginTop: 40
    },
    center: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginBottom: 30
    },
    /*  servicesImageOn: {
        width: 115,
        height: 122,
        marginBottom: 1
    },
    servicesText: {
        color: "#767676",
        fontSize: 18
    } */
    servicesImageOn: {
        width: 150,
        height: 157,
        marginBottom: 10
    },
    servicesText: {
        color: "#767676",
        fontSize: 24
    },
    /*  cardServices: {
        padding: 5
    }, */

    content: {
        padding: 5
    }
});
