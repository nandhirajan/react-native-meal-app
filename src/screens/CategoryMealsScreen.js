import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Category Meal Screen
            </Text>
            <Button
                title="Goto Meal Details"
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetails" })
                }}>
            </Button>
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
