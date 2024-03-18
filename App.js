import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from '../PhuocExpo/Login'; // Đảm bảo bạn import đúng đường dẫn của component Login

export default function App() {
  return (
    <View style={styles.container}>
      
      <Login />
    </View>
  );
}

// Thêm một số styles để bố cục không bị chồng chéo và trông đẹp mắt hơn
const styles = StyleSheet.create({
  container: {
    flex: 1, // Sử dụng flex để đảm bảo <View> chiếm đầy màn hình
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    backgroundColor: '#fff', // Màu nền trắng cho ứng dụng
  },
  headerText: {
    fontSize: 22, // Kích thước chữ lớn hơn một chút cho tiêu đề
    margin: 10, // Khoảng cách giữa các component
    // Các styles khác nếu bạn cần
  },
});
