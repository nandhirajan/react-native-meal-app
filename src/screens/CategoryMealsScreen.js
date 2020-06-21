//@refresh reset
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam("categoryId");

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="Goto Meal Details"
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetails" })
                }}
            />
            <Button
                title="Go back"
                onPress={() => {
                    props.navigation.goBack();
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CategoryMealsScreen;
