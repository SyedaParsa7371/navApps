import { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Icategory } from "../constant/interface";

const UserScreens: FC<Icategory> = ({ navigation }) => {

    function openDrawerHAndler() {
        // console.log();
        navigation?.toggleDrawer()
        // navigation.toogleDrawer();
    }

    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highLights}> "User" </Text> Screen!
            </Text>
            {/* <Button title="Open Drawer" onPress={openDrawerHAndler} /> */}
        </View>
    )
}
export default UserScreens;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    highLights: {
        color: 'red',
        fontSize: 24,
        fontWeight: "bold"
    }
})