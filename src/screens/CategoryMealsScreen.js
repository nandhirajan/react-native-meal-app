//@refresh reset
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from 'react-native-gesture-handler';

const CategoryMealsScreen = props => {

    const renderMealItems = itemData => {
        return(
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        )
    }

    const categoryId = props.navigation.getParam("categoryId");

    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId));

    return (
        <View style={styles.screen}>
            {/* <Text>Category Meal Screen</Text> */}
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem ={renderMealItems}
            />
            {/* <Text>{selectedCategory.title}</Text>
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
            /> */}
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam("categoryId");

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return ({
        headerTitle: selectedCategory.title
    })
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CategoryMealsScreen;
