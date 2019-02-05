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

var tomorrow = Date.parse('tomorrow').toString("MM-dd-yyyy")
var maxDate = Date.parse('+1year').toString("MM-dd-yyyy")
export default class HomeCleaning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bed: "0",
            bath: "0",
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
        return fetch("http://192.168.2.104:8000/api/consultarHomeCleaning/", {
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
     * @param {Valor seleccionado del picker (bed)} value
     */
    onValueChangeBed(value) {
        this.setState(
            {
                bed: value
            },
            function() {
                this.calculateTotal();
            }
        );
    }

    /**
     * Método que setea el valor seleccionado del picker y llama a calcular el total
     * @param {Valor seleccionado del picker (bath)} value
     */
    onValueChangeBath(value) {
        this.setState(
            {
                bath: value
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
        var price = this.search(
            this.state.bed,
            this.state.bath,
            this.state.prices
        );
        this.setState({
            propsTotal: price.precio
        });

        console.log("manana " + tomorrow);
    }

    /**
     *
     * @param {Item seleccionado por el usuario que se comparará con los valores que están en BD} beds
     * @param {Item seleccionado por el usuario que se comparará con los valores que están en BD} baths
     * @param {Array donde se buscará la información, contiene la data obtenida de BD} array
     */
    search(beds, baths, array) {
        for (var i = 0; i < array.length; i++) {
            if (
                beds.localeCompare(array[i].bed) == 0 &&
                baths.localeCompare(array[i].bath) == 0
            ) {
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
                                    source={require("../../images/services/cleaning/homeCleaningW.png")}
                                />
                                <Title>Home Cleaning</Title>
                            </View>
                        </Body>
                    </Header>
                    <Content>
                        <Places />
                        <Form>
                            <Item inlineLabel>
                                <Label>Beds </Label>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select number"
                                    iosIcon={
                                        <Icon name="ios-arrow-down-outline" />
                                    }
                                    style={{ flex: 1 }}
                                    selectedValue={this.state.bed}
                                    onValueChange={this.onValueChangeBed.bind(
                                        this
                                    )}
                                >
                                    <Picker.Item label="00" value="0" />
                                    <Picker.Item label="01" value="1" />
                                    <Picker.Item label="02" value="2" />
                                    <Picker.Item label="03" value="3" />
                                    <Picker.Item label="04" value="4" />
                                    <Picker.Item label="05" value="5" />
                                </Picker>
                            </Item>
                            <Item inlineLabel>
                                <Label>Baths</Label>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select number"
                                    iosIcon={
                                        <Icon name="ios-arrow-down-outline" />
                                    }
                                    style={{ flex: 1 }}
                                    selectedValue={this.state.bath}
                                    onValueChange={this.onValueChangeBath.bind(
                                        this
                                    )}
                                >
                                    <Picker.Item label="00" value="0" />
                                    <Picker.Item label="01" value="1" />
                                    <Picker.Item label="02" value="2" />
                                    <Picker.Item label="03" value="3" />
                                    <Picker.Item label="04" value="4" />
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
