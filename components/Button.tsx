import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    readonly label: string;
    readonly onPress?: () => void;
};

export default function Button({label, onPress}: Props) {
    return (
        <View
            style={[
                styles.buttonContainer,
                {borderWidth: 4, borderColor: '#681515', borderRadius: 18},
            ]}>
            <Pressable
                style={[styles.button, {backgroundColor: '#fff'}]}
                onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon}/>
                <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
