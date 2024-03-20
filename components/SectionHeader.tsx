import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold', // Đảm bảo giá trị 'bold' cho fontWeight
        color: '#333',
    },
});

export default SectionHeader;
