import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridData}>
            <Text>{itemData.item.title}</Text>
        </View>
    );
}

const CategoriesScreen = props => {
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
