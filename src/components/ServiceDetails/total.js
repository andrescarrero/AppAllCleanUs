import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Text, Item, Input, Toast } from "native-base";

export default class total extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Bearer: this.props.bearer,
            cuponText: "",
            cuponId: null,
            cuponTotalPorc: null,
            cuponTotalMont: null,
            discountText: "This service does not have a current discount",
            discountId: null,
            discountTotalPorc: null,
            discountTotalMont: null,
            //Valores motrasdos en la vista
            subtotalCalculate: this.props.total,
            discountCalculate: 0,
            cuponCalculate: 0,
            totalCalculate: 0,
            showToast: false
        };
    }

    /**
     * Método que se encarga de revisar los valores previos con los actuales para determiar si actualiza algunas secciones del componente
     * @param {propsPrevios} prevProps
     * @param {*} prevState
     */
    componentDidUpdate(prevProps, prevState) {
        // only update if the data has changed
        if (prevProps.total !== this.props.total) {
            this.consultarDescuento();
            //this.setearTotal();
        }

        if (prevProps.date !== this.props.date) {
            if (this.state.cuponText.length === 10) {
                this.consultarCupon();
            }
            this.consultarDescuento();
        }
    }

    /**
     * Método que detecta el ingreso de texto en el input de cupón y ejecuta algunas acciones.
     * @param {Valor del campo de texto} value
     */
    onchangeCuponText(value) {
        //var string = value.toUpperCase();
        this.setState(
            { cuponText: value },
            //Una vez se escribe el código del cupon, se procede a determinar si el cupón es válido
            function() {
                if (this.state.cuponText.length === 10) {
                    this.consultarCupon();
                }
            }
        );
    }

    //Seteo del total luego de descontar lo correspondiente a descuentos y cupones
    setearTotal() {
        this.setState({
            subtotalCalculate: this.props.total,
            totalCalculate: parseFloat(
                this.props.total -
                    this.state.discountCalculate -
                    this.state.cuponCalculate
            ).toFixed(2)
        });
    }

    /**
     *Método para consultar los posibles descuentos que pueda tener el producto
     *
     * @returns resultado de la búsqueda
     * @memberof total
     */
    consultarDescuento() {
        return fetch("http://192.168.2.104:8000/api/v1/consultarDescuento", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                Authorization: this.state.Bearer
            },
            body: JSON.stringify({
                monto: this.props.total,
                service: this.props.service,
                date: this.props.date
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (typeof responseJson.Discount !== "undefined") {
                    this.setState(
                        {
                            discountId: responseJson.Discount.id,
                            discountTotalPorc:
                                responseJson.Discount.descuento_porcentaje,
                            discountTotalMont:
                                responseJson.Discount.descuento_monto
                        },
                        function() {
                            //Actualizamos la data a mostrar y recalculamos el total.
                            if (this.state.discountTotalPorc == null) {
                                this.setState(
                                    {
                                        discountCalculate: parseFloat(
                                            responseJson.Discount
                                                .descuento_monto
                                        ).toFixed(2),
                                        discountText:
                                            "You have a discount of " +
                                            responseJson.Discount
                                                .descuento_monto +
                                            "$"
                                    },
                                    function() {
                                        this.setearTotal();
                                    }
                                );
                            } else {
                                this.setState(
                                    {
                                        discountCalculate: parseFloat(
                                            this.props.total *
                                                (responseJson.Discount
                                                    .descuento_porcentaje /
                                                    100)
                                        ).toFixed(2),
                                        discountText:
                                            "You have a discount of " +
                                            responseJson.Discount
                                                .descuento_porcentaje +
                                            "%"
                                    },
                                    function() {
                                        this.setearTotal();                                        
                                    }
                                );
                            }
                            Toast.show({
                                text: "We have a discount for you!",
                                type: "success",
                                duration: 2500
                            })
                        }
                    );
                }
                //En caso de que venga una alerta
                if (typeof responseJson.Alerta !== "undefined") {
                    this.setState(
                        {
                            discountId: null,
                            discountTotalPorc: null,
                            discountTotalMont: null,
                            subtotalCalculate: this.props.total,
                            discountCalculate: 0,
                            totalCalculate: 0,
                            discountText:
                                "This service does not have a current discount"
                        },
                        function() {
                            this.setearTotal();
                        }
                    );
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    /**
     * Método que realizará la consulta del cupon según el servicio, la fecha y el código de cupon ingresado
     */
    consultarCupon() {
        return fetch("http://192.168.2.104:8000/api/consultarCupon", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                Authorization: this.state.Bearer                
            },
            body: JSON.stringify({
                cupon_code: this.state.cuponText,
                service: this.props.service,
                date: this.props.date
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (typeof responseJson.Cupon !== "undefined") {
                    this.setState(
                        {
                            cuponId: responseJson.Cupon.id,
                            cuponTotalPorc:
                                responseJson.Cupon.descuento_porcentaje,
                            cuponTotalMont: responseJson.Cupon.descuento_monto
                        },
                        function() {
                            //Actualizamos la data a mostrar y recalculamos el total.
                            if (this.state.cuponTotalPorc == null) {
                                this.setState(
                                    {
                                        cuponCalculate: parseFloat(
                                            responseJson.Cupon.descuento_monto
                                        ).toFixed(2)
                                    },
                                    function() {
                                        this.setearTotal();
                                    }
                                );
                            } else {
                                this.setState(
                                    {
                                        cuponCalculate: parseFloat(
                                            this.props.total *
                                                (responseJson.Cupon
                                                    .descuento_porcentaje /
                                                    100)
                                        ).toFixed(2)
                                    },
                                    function() {
                                        this.setearTotal();
                                    }
                                );
                            }
                            Toast.show({
                                text: "Cupon applied successfully",
                                type: "success",
                                duration: 2500
                            })
                        }
                    );
                }

                if (typeof responseJson.Alerta !== "undefined") {
                    this.setState(
                        {
                            cuponId: null,
                            cuponTotalPorc: null,
                            cuponTotalMont: null,
                            cuponCalculate: 0,
                            totalCalculate: 0
                        },
                        function() {
                            this.setearTotal();
                            Toast.show({
                                text: responseJson.Alerta,
                                type: "warning",
                                duration: 2500
                            })
                        }
                    );
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <View style={styles.cuponContainer}>
                    <View style={styles.textCenter}>
                        <Text style={styles.textCupon}>Cupon!</Text>
                    </View>
                    <View style={styles.textCenter}>
                        <Item rounded style={styles.inputCupon}>
                            <Input
                                placeholder="Enter cupon code here!        "
                                value={this.state.cuponText}
                                onChangeText={this.onchangeCuponText.bind(this)}
                                maxLength={10}
                            />
                        </Item>
                    </View>
                </View>
                <View style={styles.discountContainer}>
                    <View style={styles.textCenter}>
                        <Text style={styles.textCupon}>Discount</Text>
                    </View>
                    <View style={styles.textCenter}>
                        <Text style={styles.textDiscount}>
                            {this.state.discountText}
                        </Text>
                    </View>
                </View>
                <View style={styles.totalContainer}>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotal}>
                                SubTotal:{"  "}
                            </Text>
                        </View>
                        <Text style={styles.textTotalNumber}>
                            {this.state.subtotalCalculate}$
                        </Text>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotal}>
                                Discount:{"  "}
                            </Text>
                        </View>
                        <Text style={styles.textTotalNumber}>
                            -{this.state.discountCalculate}$
                        </Text>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotal}>Cupon!:{"  "}</Text>
                        </View>
                        <Text style={styles.textTotalNumber}>
                            -{this.state.cuponCalculate}$
                        </Text>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotalSum}>Total: </Text>
                        </View>
                        <Text style={styles.textTotalNumberSum}>
                            {this.state.totalCalculate}$
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.loginButton}>
                        <View style={styles.buttonText}>
                            <Text style={styles.loginText}>Next</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cuponContainer: {
        flex: 1,
        flexDirection: "row",
        height: 60,
        backgroundColor: "#da4733",
        color: "white",
        marginLeft: 10,
        marginRight: 10
    },
    textCenter: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 15
    },
    textCupon: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 15
    },
    inputCupon: {
        flexDirection: "column",
        height: 40,
        backgroundColor: "white"
    },
    discountContainer: {
        flex: 1,
        flexDirection: "row",
        height: 45,
        backgroundColor: "#42addd",
        color: "white",
        marginLeft: 10,
        marginRight: 10
    },
    textDiscount: {
        fontSize: 14,
        color: "white",
        paddingRight: 15
    },
    serviceContainer: {
        flex: 1,
        flexDirection: "row",
        height: 40,
        backgroundColor: "#fff",
        color: "white",
        marginTop: 50
    },
    totalContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        color: "black",
        paddingTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    columnContainer: {
        flexDirection: "row"
    },
    textCenterTotalTitle: {
        flex: 1,
        alignItems: "flex-end"
    },

    textTotal: {
        fontSize: 20,
        color: "#6b6b6b",
        fontWeight: "bold"
    },
    textTotalNumber: {
        fontSize: 20,
        color: "#6b6b6b",
        fontWeight: "bold"
    },
    textTotalSum: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    },
    textTotalNumberSum: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold"
    },
    textTotalDiscount: {
        fontSize: 20,
        color: "#42addd",
        fontWeight: "bold"
    },
    textTotalCupon: {
        fontSize: 20,
        color: "#da4733",
        fontWeight: "bold"
    },
    loginButton: {
        flex: 1,
        backgroundColor: "#42addd",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 5,
        marginTop: 15,
        marginBottom: 5
    },
    buttonText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    loginText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center"
    }
});
