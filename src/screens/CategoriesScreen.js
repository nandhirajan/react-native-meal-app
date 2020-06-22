//@refresh reset
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: "CategoryMeals",
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CategoriesScreen;
