import {Stack} from "expo-router";
import {DarkTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
    return (
        <ThemeProvider value={DarkTheme}>
            <StatusBar style="light"/>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found" />
            </Stack>
        </ThemeProvider>
    );
}
