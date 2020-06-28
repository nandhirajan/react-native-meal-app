//@refresh reset
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const MealItem = props => {
    const { title, duration, complexity, affordability, imageUrl } = props.item
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>

                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
                        <Text style ={styles.title} numberOfLines={1}>{title}</Text>
                    </ImageBackground>
                </View>

                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>

            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#ccc",
        borderRadius: 10,
        overflow:"hidden"
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: "center"
    },
    mealRow: {
        flexDirection: "row"
    },
    mealHeader: {
        height: "85%"
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems:"center"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent:"flex-end"
    }
})

export default MealItem;