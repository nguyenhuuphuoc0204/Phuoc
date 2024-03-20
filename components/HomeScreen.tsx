import React from 'react';
import { StyleSheet, View } from 'react-native'; // Import ScrollView
import LuuBai from '../components/Luubai';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Render your content here */}
        <LuuBai/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
        color: 'red'
    },
});

export default HomeScreen;
