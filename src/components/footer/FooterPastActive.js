import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

import { Footer, FooterTab, Button, Text } from "native-base";

export default class FooterPastActive extends Component {
    render() {
        return (
            <Footer style={styles.footer}>
                <FooterTab style={styles.backgroundFooter}>
                    <Button
                        vertical
                        onPress={() =>
                            this.props.navigation.navigate("Booking")
                        }
                    >
                        <Image
                            style={styles.imageFooterCalendar}
                            source={require("../../images/footer/bookingBW.png")}
                        />
                        <Text style={styles.footerText}>Booking</Text>
                    </Button>
                    <Button vertical active style={styles.active}>
                        <Image
                            style={styles.imageFooterCalendar}
                            source={require("../../images/footer/pastC.png")}
                        />
                        <Text style={styles.activeText}>Past</Text>
                    </Button>
                    <Button
                        vertical
                        onPress={() =>
                            this.props.navigation.navigate("Services")
                        }
                    >
                        <Image
                            style={styles.imageFooterServices}
                            source={require("../../images/footer/servicesBW.png")}
                        />
                        <Text style={styles.footerText}>Services</Text>
                    </Button>
                    <Button
                        vertical
                        onPress={() =>
                            this.props.navigation.navigate("Account")
                        }
                    >
                        <Image
                            style={styles.imageFooterServices}
                            source={require("../../images/footer/accountBW.png")}
                        />
                        <Text style={styles.footerText}>Account</Text>
                    </Button>
                    <Button vertical>
                        <Image
                            style={styles.imageFooterShare}
                            source={require("../../images/footer/shareBW.png")}
                        />
                        <Text style={styles.footerText}>Share</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 57
    },
    backgroundFooter: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#b1b8c1"
    },
    imageFooterCalendar: {
        flex: 1,
        height: 23,
        width: 25
    },
    imageFooterServices: {
        flex: 1,
        height: 24,
        width: 28
    },
    imageFooterShare: {
        flex: 1,
        height: 23,
        width: 22
    },
    active: {
        backgroundColor: "white"
    },
    activeText: {
        color: "#da4733"
    },
    footerText: {
        color: "#b1b8c1"
    }
});
