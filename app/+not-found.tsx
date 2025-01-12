import {StyleSheet, View} from 'react-native';
import {Link, Stack} from 'expo-router';

function GoHomeLink() {
    return (
        <Link href="/" style={styles.linkButton}>
            Go back to Home screen!
        </Link>
    );
}

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Not Found'}}/>
            <View style={styles.centeredContainer}>
                <GoHomeLink/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkButton: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});