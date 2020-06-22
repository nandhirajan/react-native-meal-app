//@refresh reset
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate({
                    routeName: "CategoryMeals",
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}>
                <View style={styles.gridData}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    },
    gridData: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;
