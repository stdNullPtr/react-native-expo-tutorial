import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

const TabScreenOptions = [
    {
        name: "index",
        headerTitle: "Lume",
        iconConfig: {
            focusedName: "home-sharp" as const,
            unfocusedName: "home-outline" as const,
            size: 30
        }
    },
    {
        name: "about",
        headerTitle: "About",
        iconConfig: {
            focusedName: "information-circle" as const,
            unfocusedName: "information-circle-outline" as const,
            size: 24
        }
    }
];

type IconConfig = {
    focusedName: React.ComponentProps<typeof Ionicons>["name"];
    unfocusedName: React.ComponentProps<typeof Ionicons>["name"];
    size: number;
};

export default function TabLayout() {
    const renderTabBarIcon = (
        focused: boolean,
        color: string,
        iconConfig: IconConfig
    ) => (
        <Ionicons
            name={focused ? iconConfig.focusedName : iconConfig.unfocusedName}
            color={color}
            size={iconConfig.size}
        />
    );

    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "#681515"}}>
            {TabScreenOptions.map(({name, headerTitle, iconConfig}) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        headerTitle,
                        tabBarIcon: ({focused, color}) => renderTabBarIcon(focused, color, iconConfig)
                    }}
                />
            ))}
        </Tabs>
    );
}