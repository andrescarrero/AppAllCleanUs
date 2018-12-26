import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import {
    Container,
    Header,
    Content,
    Body,
    Title,
    Picker,
    Form,
    Icon,
    Item,
    Label,
    Input
} from "native-base";

import FooterServiceActive from "./../footer/FooterServiceActive";
import DatePicker from "react-native-datepicker";
import Total from "./total";
import Places from "./places";

export default class PaintingFrontDoor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paint: "0",
            date: "2016-05-15"
        };
    }

    onValueChangeValue(value: string) {
        this.setState({
            paint: value
        });
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
                                    source={require("../../images/services/painting/header/backHeader.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerCenter}>
                            <Image
                                style={styles.imageHeaderPainting}
                                source={require("../../images/services/painting/paintingFrontDoorW.png")}
                            />
                            <Title>Painting Front Door</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <Places />
                    <Form>
                        <Item inlineLabel>
                            <Label>Quantity</Label>
                            <Input keyboardType="number-pad" />
                        </Item>
                        <Item inlineLabel>
                            <Label>Date </Label>
                            <DatePicker
                                style={{ width: 300 }}
                                date={this.state.date}
                                mode="datetime"
                                placeholder="select date"
                                format="YYYY-MM-DD HH:mm:ss"
                                minDate="2018-12-03"
                                maxDate="2019-01-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateInput: {
                                        marginLeft: 0,
                                        borderWidth: 0
                                    }
                                }}
                                onDateChange={date => {
                                    this.setState({ date: date });
                                }}
                            />
                        </Item>
                        <Total />
                    </Form>
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
        height: 36,
        width: 46,
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
    press: {
        height: 40,
        width: 40,
        alignItems: "flex-start"
    }
});
