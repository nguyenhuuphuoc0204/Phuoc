import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import GiCungDuoc from './SectionHeader'; // Import component SectionHeader

const ProductList = () => {
    return (
        <View style={styles.container}>
            <GiCungDuoc title="Danh mục" /> {/* Sử dụng component SectionHeader */}

            <View style={styles.listContainer}>
                <ProductItem imageSource={require('../assets/moi.jpg')} />
                <ProductItem imageSource={require('../assets/thegoi.jpg')} />
                <ProductItem imageSource={require('../assets/nong.jpg')} />
                <ProductItem imageSource={require('../assets/giatri1.jpg')} />
            </View>
        </View>
    );
};

const ProductItem = ({ imageSource }) => {
    return (
        <View style={styles.item}>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    item: {
        width: '20%',
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#000',
    },
    image: {
        width: '100%',
        height: 100,
    },
});

export default ProductList;
