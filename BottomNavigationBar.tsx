// BottomNavigationBar.js

import React from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BottomNavigationBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.icon}>☰</Text>
                    <Text style={styles.menuText}>Tin tức</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={require('../PhuocExpo/assets/icon.jpg')} style={styles.iconImage} />
                    
                    <TouchableOpacity onPress={() => Alert.alert('Sau này Tao Làm chuyển Trang')}>
                        <Text style={styles.linkText}><Text style={styles.menuText}>Video</Text></Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={require('../PhuocExpo/assets/icon.jpg')} style={styles.iconImage} />
                    <TouchableOpacity onPress={() => Alert.alert('Sau này Tao Làm chuyển Trang')}>
                        <Text style={styles.linkText}> <Text style={styles.menuText}>Xu hướng</Text>
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={require('../PhuocExpo/assets/icon.jpg')} style={styles.iconImage} />
                    
                    <TouchableOpacity onPress={() => Alert.alert('Sau này Tao Làm chuyển Trang')}>
                        <Text style={styles.linkText}> <Text style={styles.menuText}>Tiện ích</Text>  </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        paddingVertical: 10,
    },
    menuItem: {
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
    },
    iconImage: {
        width: 24,
        height: 24,
    },
    menuText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default BottomNavigationBar;
