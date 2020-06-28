//@refresh reset
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from 'react-native-gesture-handler';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItems = itemData => {
        return (
            <MealItem item={itemData.item} onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "MealDetails",
                    params:{
                        mealId: itemData.item.id
                    }
                })
             }} />
        )
    }

    const categoryId = props.navigation.getParam("categoryId");

    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.screen}>
            {/* <Text>Category Meal Screen</Text> */}
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItems}
                style={{width:"100%"}}
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
        justifyContent: "center",
        margin: 10
    }
});

export default CategoryMealsScreen;
