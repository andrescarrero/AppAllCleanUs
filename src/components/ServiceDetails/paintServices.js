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
import Datejs from "./../../external/date";

var tomorrow = Date.parse("tomorrow").toString("MM-dd-yyyy");
var maxDate = Date.parse("+1year").toString("MM-dd-yyyy");
export default class PaintServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Bearer: this.props.navigation.state.params.Bearer,
            User: this.props.navigation.state.params.User,
            paint: "Base Paint",
            sqf: "0",
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
            "http://192.168.2.104:8000/api/v1/consultarPaintingService/",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    Authorization: this.state.Bearer
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

    onValueChangePaint(value) {
        this.setState(
            {
                paint: value
            },
            function() {
                this.calculateTotal();
            }
        );
    }

    onchangeSQF(value) {
        this.setState(
            {
                sqf: value
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
        var price = this.search(this.state.paint, this.state.prices);
        this.setState({
            propsTotal:
                this.state.sqf == ""
                    ? "0.00"
                    : parseFloat(
                          price.precio * parseFloat(this.state.sqf)
                      ).toFixed(2)
        });
    }

    /**
     * Método que busca el precio en BD de lo indicado por el usuario
     * @param {Item seleccionado por el usuario que se comparará con los valores que están en BD} paint
     * @param {Array donde se buscará la información, contiene la data obtenida de BD} array
     */
    search(paint, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].descripcion.localeCompare(paint) == 0) {
                return array[i];
            }
        }
        return 0;
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
                                    source={require("../../images/services/painting/paintingServicesW.png")}
                                />
                                <Title>Painting Services</Title>
                            </View>
                        </Body>
                    </Header>
                    <Content>
                        <Places />
                        <Form>
                            <Item inlineLabel>
                                <Label>Paint Included </Label>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Paint Included"
                                    iosIcon={
                                        <Icon name="ios-arrow-down-outline" />
                                    }
                                    style={{ flex: 1 }}
                                    selectedValue={this.state.paint}
                                    onValueChange={this.onValueChangePaint.bind(
                                        this
                                    )}
                                >
                                    <Picker.Item
                                        label="Base Paint"
                                        value="Base Paint"
                                    />
                                    <Picker.Item
                                        label="Ceiling - Wall - Doors - Base Board"
                                        value="Ceiling - Wall - Doors - Base Board"
                                    />
                                    <Picker.Item
                                        label="Only Wall"
                                        value="Only Wall"
                                    />
                                </Picker>
                            </Item>
                            <Item inlineLabel>
                                <Label>SQF</Label>
                                <Input
                                    keyboardType="number-pad"
                                    value={this.state.sqf}
                                    onChangeText={this.onchangeSQF.bind(this)}
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
                            <Total
                                total={this.state.propsTotal}
                                date={this.state.date}
                                service={6}
                                bearer={this.state.Bearer}
                            />
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
