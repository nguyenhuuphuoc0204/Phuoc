import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
    const handleIconPress = () => {
        // Xử lý các hành động khi nhấn vào biểu tượng ở đây
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleIconPress}>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.tabs}>
                <Text style={styles.tab}>Nóng</Text>
                <Text style={styles.tab}>Mới</Text>
                <Text style={styles.tab}>Bóng đá VN</Text>
                <Text style={styles.tab}>Bóng</Text>
            </View>
            <TouchableOpacity onPress={handleIconPress}>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleIconPress}>
                <Image source={require('../assets/icon.jpg')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00A4DE',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    tab: {
        color: '#FFFFFF',
        paddingHorizontal: 8,
        fontSize: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default Header;
