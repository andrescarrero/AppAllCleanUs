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
    Label
} from "native-base";

import FooterServiceActive from "./../footer/FooterServiceActive";
import DatePicker from "react-native-datepicker";
import Total from "./total";
import Places from "./places";

var tomorrow = Date.parse("tomorrow").toString("MM-dd-yyyy");
var maxDate = Date.parse("+1year").toString("MM-dd-yyyy");
export default class OfficeCleaning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "0-900 sq ft",
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
        return fetch("http://192.168.2.104:8000/api/consultarOfficeCleaning/", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
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

    /**
     * Método que setea el valor seleccionado del picker y llama a calcular el total
     * @param {Valor seleccionado del picker} value
     */
    onValueChangeSize(value) {
        this.setState(
            {
                size: value
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
        var price = this.search(this.state.size, this.state.prices);
        this.setState({
            propsTotal: price.precio
        });
    }

    /**
     * Método que busca el precio en BD de lo indicado por el usuario
     * @param {Item seleccionado por el usuario que se comparará con los valores que están en BD} size
     * @param {Array donde se buscará la información, contiene la data obtenida de BD} array
     */
    search(size, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].descripcion.localeCompare(size) == 0) {
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
                                        source={require("../../images/services/cleaning/header/backHeader.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.headerCenter}>
                                <Image
                                    style={styles.imageHeaderCleaning}
                                    source={require("../../images/services/cleaning/officeCleaningW.png")}
                                />
                                <Title>Office Cleaning</Title>
                            </View>
                        </Body>
                    </Header>
                    <Content>
                        <Places />
                        <Form>
                            <Item inlineLabel>
                                <Label>Select size </Label>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="What is the size of the office to be cleaned?"
                                    iosIcon={
                                        <Icon name="ios-arrow-down-outline" />
                                    }
                                    style={{ flex: 1 }}
                                    selectedValue={this.state.size}
                                    onValueChange={this.onValueChangeSize.bind(
                                        this
                                    )}
                                >
                                    <Picker.Item
                                        label="0 - 900 sq ft"
                                        value="0-900 sq ft"
                                    />
                                    <Picker.Item
                                        label="901 - 1200 sq ft"
                                        value="901-1200 sq ft"
                                    />
                                    <Picker.Item
                                        label="1201 - 1400 sq ft"
                                        value="1201-1400 sq ft"
                                    />
                                    <Picker.Item
                                        label="1401 - 1600 sq ft"
                                        value="1401-1600 sq ft"
                                    />
                                    <Picker.Item
                                        label="1601 - 1800 sq ft"
                                        value="1601-1800 sq ft"
                                    />
                                    <Picker.Item
                                        label="1801 - 2000 sq ft"
                                        value="1801-2000 sq ft"
                                    />
                                </Picker>
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
                            <Total total={this.state.propsTotal} />
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
