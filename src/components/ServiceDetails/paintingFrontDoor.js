import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

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
import Datejs from "./../../external/date"

var tomorrow = Date.parse("tomorrow").toString("MM-dd-yyyy");
var maxDate = Date.parse("+1year").toString("MM-dd-yyyy");
export default class PaintingFrontDoor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: "0",
            date: tomorrow,
            isLoading: true,
            prices: null,
            cuponId: null,
            cuponTotal: null,
            discountId: null,
            discountTotal: null,
            propsTotal: 0
        };
    }

    componentDidMount() {
        //Se realiza la petición a la API para obtener los precios del servicio
        return fetch(
            "http://192.168.2.104:8000/api/consultarPaintingFrontDoor/",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        prices: responseJson.PrecioServicio,
                        isLoading: false
                    },
                    //Una vez obtenidos los precios del servicio, se calcula el total para la selección actual
                    function() {
                        this.calculateTotal();
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    onchangeQuantity(value) {
        this.setState(
            {
                quantity: value
            },
            function() {
                this.calculateTotal();
            }
        );
    }

    /**
     * Método que calcula el total a pagar por el usuario
     */
    calculateTotal() {
        //Se realiza la búsqueda de los precios, para ver cual aplica según la selección
        var price = this.state.prices[0];
        this.setState({
            propsTotal:
                this.state.quantity == ""
                    ? "0.00"
                    : parseFloat(
                          price.precio * parseFloat(this.state.quantity)
                      ).toFixed(2)
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {
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
                                <Input
                                    keyboardType="number-pad"
                                    value={this.state.quantity}
                                    onChangeText={this.onchangeQuantity.bind(
                                        this
                                    )}
                                />
                            </Item>
                            <Item inlineLabel>
                                <Label>Date </Label>
                                <DatePicker
                                    style={{ width: 300 }}
                                    date={this.state.date}
                                    mode="datetime"
                                    placeholder="select date"
                                    format="MM-DD-YYYY HH:mm:ss"
                                    minDate={tomorrow}
                                    maxDate={maxDate}
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
                            <Total total={this.state.propsTotal} date={this.state.date} service={8} />
                        </Form>
                    </Content>
                    <FooterServiceActive navigation={this.props.navigation} />
                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
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
