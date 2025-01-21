import {Stack} from "expo-router";
import {DarkTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ThemeProvider value={DarkTheme}>
                <StatusBar style="light"/>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="+not-found"/>
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
