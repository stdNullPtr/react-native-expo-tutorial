import {StyleSheet, Text, View} from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Test.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    }
});