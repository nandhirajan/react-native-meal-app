import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            style={styles.gridData}
            onPress={props.onSelect}>
            <View style={{ ...styles.tileContainer,...{backgroundColor: props.color} }}>
                <Text style ={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridData: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden" // to restrict the ripple effect going outside of the tile
    },
    tileContainer:{
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding : 15,
        justifyContent: "flex-end",
        alignItems:"flex-end"
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "right"
    }
});

export default CategoryGridTile;