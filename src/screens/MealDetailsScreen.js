import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Meal Detail Screen
            </Text>
            <Button
                title="Go To Home"
                onPress={() => {
                    props.navigation.popToTop();
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

export default MealDetailsScreen;
