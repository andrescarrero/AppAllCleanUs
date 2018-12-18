import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Text, Item, Input } from "native-base";

export default class total extends Component {
    constructor(props) {
        super(props);
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
                            <Input placeholder="Enter cupon code here!        " />
                        </Item>
                    </View>
                </View>
                <View style={styles.discountContainer}>
                    <View style={styles.textCenter}>
                        <Text style={styles.textCupon}>Discount</Text>
                    </View>
                    <View style={styles.textCenter}>
                        <Text style={styles.textDiscount}>
                            this service does not have a current discount
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
                        <View style={styles.textCenterTotalNumber}>
                            <Text style={styles.textTotalNumber}>0$</Text>
                        </View>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotal}>
                                Discount:{"  "}
                            </Text>
                        </View>
                        <View style={styles.textCenterTotalNumber}>
                            <Text style={styles.textTotalNumber}>0$</Text>
                        </View>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotal}>Cupon!:{"  "}</Text>
                        </View>
                        <View style={styles.textCenterTotalNumber}>
                            <Text style={styles.textTotalNumber}>0$</Text>
                        </View>
                    </View>
                    <View style={styles.columnContainer}>
                        <View style={styles.textCenterTotalTitle}>
                            <Text style={styles.textTotalSum}>
                                Total:{"  "}
                            </Text>
                        </View>
                        <View style={styles.textCenterTotalNumber}>
                            <Text style={styles.textTotalNumberSum}>0$</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={null}>
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
        backgroundColor: "#b1b8c1",
        color: "white",
        marginTop: 50
    },
    totalContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#b1b8c1",
        color: "black",
        paddingTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    columnContainer: {
        flexDirection: "row"
    },
    textCenterTotalTitle: {
        flex: 4,
        alignItems: "flex-end"
    },
    textCenterTotalNumber: {
        flex: 3
    },
    textTotal: {
        fontSize: 20,
        color: "#6b6b6b",
        fontWeight: "bold"
    },
    textTotalNumber: {
        fontSize: 20,
        color: "white",
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
