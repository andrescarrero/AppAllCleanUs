import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon
} from "native-base";

import Services from "./Services";
import CleaningServices from "./CleaningServices";
import PaintingServices from "./PaintingServices"

import { createStackNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");

class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        style={styles.thumbnail}
                        source={require("../images/homeImage.jpg")}
                    />
                    <Form>
                        <Item inlineLabel>
                            <Label style={styles.textLabel}>Username</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.textLabel}>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </Form>
                    <View style={styles.passHelp}>
                        <Button transparent dark>
                            <Text>Password Help</Text>
                        </Button>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate("Services")
                        }
                    >
                        <View style={styles.loginButton}>
                            <Image
                                style={styles.buttonImage}
                                source={require("../images/loginImage.png")}
                            />
                            <View style={styles.buttonText}>
                                <Text style={styles.loginText}>Login</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.loginGoogleButton}>
                            <Image
                                style={styles.buttonImage}
                                source={require("../images/googleImage.png")}
                            />
                            <View style={styles.buttonText}>
                                <Text style={styles.loginText}>
                                    Sign in with Google
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.createButton}>
                            <View style={styles.containerCreateText}>
                                <Text style={styles.createText}>
                                    Create a new Account
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}

const Nav = createStackNavigator(
    {
        Home: { screen: Home },
        Services: { screen: Services },
        CleaningServices: { screen: CleaningServices },
        PaintingServices: {screen: PaintingServices}
    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);

class IndexApp extends Component {
    render() {
        return <Nav />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumbnail: {
        width: width,
        height: height / 2
    },
    textLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#da4733"
    },
    passHelp: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 10
    },
    loginButton: {
        flex: 1,
        backgroundColor: "#42addd",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    buttonImage: {
        marginLeft: 10,
        height: 30,
        width: 30
    },
    buttonText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 40
    },
    loginText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center"
    },
    loginGoogleButton: {
        flex: 1,
        backgroundColor: "#da4733",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    createButton: {
        flex: 1,
        backgroundColor: "#fff",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    containerCreateText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    createText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#42addd",
        justifyContent: "center"
    }
});

export default IndexApp;