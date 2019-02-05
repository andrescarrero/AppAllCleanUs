import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Keyboard
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
import PaintingServices from "./PaintingServices";
import Booking from "./Booking";
import Past from "./Past";
import Account from "./Account";
import HomeCleaning from "./ServiceDetails/homeCleaning";
import OfficeCleaning from "./ServiceDetails/officeCleaning";
import DeepCleaning from "./ServiceDetails/deepCleaning";
import GarageCleaning from "./ServiceDetails/garageCleaning";
import PaintingFrontDoor from "./ServiceDetails/paintingFrontDoor";
import PaintingGarage from "./ServiceDetails/paintingGarage";
import PaintingServices2 from "./ServiceDetails/paintingServices";

import { createStackNavigator } from "react-navigation";

const { width, height } = Dimensions.get("window");

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userPassword: ""
        };
    }

    login = () => {
        const { userEmail, userPassword } = this.state;
        //alert(userEmail);

        

        //alert("aqui estamos");

        Keyboard.dismiss();
    };

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
                            <Input
                                onChangeText={userEmail =>
                                    this.setState({ userEmail })
                                }
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label style={styles.textLabel}>Password</Label>
                            <Input
                                onChangeText={userPassword =>
                                    this.setState({ userPassword })
                                }
                                secureTextEntry={true}
                            />
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
        PaintingServices: { screen: PaintingServices },
        Booking: { screen: Booking },
        Past: { screen: Past },
        Account: { screen: Account },
        HomeCleaning: { screen: HomeCleaning },
        OfficeCleaning: { screen: OfficeCleaning },
        DeepCleaning: { screen: DeepCleaning },
        GarageCleaning: { screen: GarageCleaning },
        PaintingFrontDoor: { screen: PaintingFrontDoor },
        PaintingGarage: { screen: PaintingGarage },
        PaintingServices2: { screen: PaintingServices2 }
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
