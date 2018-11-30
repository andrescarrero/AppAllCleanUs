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

import FooterPastActive from "./footer/FooterPastActive";

export default class Past extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header style={styles.backgroundHeader}>
                    <Body style={styles.headerCenter}>
                        <Image
                            style={styles.imageHeaderBooking}
                            source={require("../images/services/past/header/pastW.png")}
                        />
                        <Title>Past</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingFrontDoorBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Front Door
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 08:30
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.list}>
                        <TouchableOpacity
                            style={styles.touchService}
                            onPress={null}
                        >
                            <View style={styles.centerImageIcon}>
                                <Thumbnail
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/painting/paintingServicesBW.png")}
                                />
                            </View>
                            <View>
                                <View style={styles.row}>
                                    <Text style={styles.titleText}>
                                        Service:
                                    </Text>
                                    <Text style={styles.detailText}>
                                        Painting Service
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.titleText}>Date:</Text>
                                    <Text style={styles.detailText}>
                                        01/01/2018 - 13:00
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity
                            style={styles.touchService}
                            onPress={null}
                        >
                            <View style={styles.centerImageIcon}>
                                <Thumbnail
                                    style={styles.imageContentCleaning}
                                    source={require("../images/services/cleaning/homeCleaningBW.png")}
                                />
                            </View>
                            <View>
                                <View style={styles.row}>
                                    <Text style={styles.titleText}>
                                        Service:
                                    </Text>
                                    <Text style={styles.detailText}>
                                        Home Cleaning
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.titleText}>Date:</Text>
                                    <Text style={styles.detailText}>
                                        01/01/2018 - 16:00
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/officeCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Office Cleaning
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 09:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/homeCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Home Cleaning
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 06:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingServicesBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Service
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 10:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/garageCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Cleaning Garage
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 12:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingFrontDoorBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Front Door
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 10:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/deepCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Deep Cleaning
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 11:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingServicesBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Service
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 08:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingFrontDoorBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Front Door
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 16:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>

                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/homeCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Home Cleaning
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 09:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/cleaning/garageCleaningBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Cleaning Garage
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 07:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.centerImageIcon}>
                            <Thumbnail
                                style={styles.imageContentCleaning}
                                source={require("../images/services/painting/paintingGarageBW.png")}
                            />
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.titleText}>Service:</Text>
                                <Text style={styles.detailText}>
                                    Painting Garage
                                </Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.titleText}>Date:</Text>
                                <Text style={styles.detailText}>
                                    01/01/2018 - 13:00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.touchIcon}>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                            <View style={styles.centerImageIcon}>
                                <Icon
                                    type="FontAwesome"
                                    name="star"
                                    style={{
                                        color: "yellow",
                                        fontSize: 15
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.centerImageIcon}>
                            <TouchableOpacity
                                style={styles.touchIcon}
                                onPress={null}
                            >
                                <View style={styles.centerImageIcon}>
                                    <Icon
                                        type="FontAwesome"
                                        name="angle-right"
                                        style={{ color: "black", fontSize: 40 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                {/* <View style={styles.center}>
                        <Image style={styles.item}
                            source={require("../images/construccion3.gif")}
                        />
                    </View> */}
                <FooterPastActive navigation={this.props.navigation} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        alignSelf: "center"
    },
    backgroundHeader: {
        backgroundColor: "#da4733"
    },
    headerCenter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    content: {
        padding: 5
    },
    imageHeaderBooking: {
        height: 30,
        width: 30,
        marginRight: 10
    },
    list: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#c2c2c2"
    },
    centerImageIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 2
    },
    imageContentCleaning: {
        marginRight: 20,
        marginLeft: 10,
        width: 30,
        height: 30
    },
    titleService: {
        color: "#5e5e5e",
        fontSize: 18
    },
    descriptionService: {
        color: "#bbbbbb",
        fontSize: 14
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-end",
        width: 200
    },
    titleText: {
        color: "#5e5e5e",
        fontSize: 16
    },
    detailText: {
        color: "#bbbbbb",
        fontSize: 14,
        marginLeft: 5
    },
    touchIcon: {
        flex: 1,
        flexDirection: "row",
        width: 70,
        justifyContent: "center",
        alignItems: "stretch",
        marginLeft: 5
    },
    touchService: {
        flexDirection: "row"
    }
});
