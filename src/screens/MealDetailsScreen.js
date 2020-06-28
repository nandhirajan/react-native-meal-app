import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title="Go To Home"
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    )
}

MealDetailsScreen.navigateOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParams("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        {
            headerTitle: selectedMeal.title
        }
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default MealDetailsScreen;
