import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The Category Screen
            </Text>
            <Button
                title="Goto Category Meals"
                onPress={() => {
                    props.navigation.replace({ routeName: "CategoryMeals" })
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

export default CategoriesScreen;
