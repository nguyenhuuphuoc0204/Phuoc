import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    // Khởi tạo state cho thông tin đăng nhập: email, mật khẩu và trạng thái ghi nhớ
    const [credentials, setCredentials] = useState({ email: '', password: '', remember: false });

    // Hàm xử lý thay đổi thông tin đăng nhập khi người dùng nhập liệu
    const handleInputChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };

    // Hàm xử lý khi người dùng nhấn nút đăng nhập
    const handleLoginPress = () => {
        // Trong hàm này, bạn sẽ xử lý logic đăng nhập, ví dụ như gửi thông tin đăng nhập đến máy chủ của bạn.
        // Ở đây, chúng ta chỉ log thông tin đăng nhập ra console và hiển thị một thông báo
        console.log('Login credentials', credentials);
        Alert.alert('Login Pressed', 'Login functionality will be implemented.');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Cài đặt thanh trạng thái và tiêu đề màn hình */}
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
            <View style={styles.title}>
                <Text style={styles.titleText}>Login</Text>
                <Text style={styles.subtitleText}>Welcome to Our App</Text>
                <View style={styles.form}>
                    {/* Nhóm nhập liệu cho email */}
                    <View style={styles.inputGroup}>
                        <Icon name="envelope" style={styles.icon} size={20} color="#900" />
                        <TextInput
                            placeholder='Email Address'
                            style={styles.input}
                            value={credentials.email}
                            onChangeText={(value) => handleInputChange('email', value)}
                        />
                    </View>
                    {/* Nhóm nhập liệu cho mật khẩu */}
                    <View style={styles.inputGroup}>
                        <Icon name="lock" style={styles.icon} size={20} color="#900" />
                        <TextInput
                            placeholder='Enter Password'
                            style={styles.input}
                            secureTextEntry={true}
                            value={credentials.password}
                            onChangeText={(value) => handleInputChange('password', value)}
                        />
                    </View>
                    {/* Liên kết "Quên mật khẩu?" */}
                    <View style={styles.pass}>
                        <TouchableOpacity onPress={() => Alert.alert('Forgot Password Pressed')}>
                              <Text style={styles.linkText}>Forgot Password?   </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Forgot Password Pressed')}>
                             <Text style={styles.linkText}>Register </Text>
                        </TouchableOpacity>
</View>

                    {/* Nút đăng nhập */}
                    <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Các style của màn hình đăng nhập
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    title: {
        alignItems: 'center',
        marginBottom: 50, // Khoảng cách giữa tiêu đề và form
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
    subtitleText: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 20, // Khoảng cách giữa phụ đề và form
    },
    form: {
        width: '100%',
    },
    inputGroup: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginBottom: 20, // Khoảng cách giữa các nhóm nhập liệu
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 10, // Padding để tránh văn bản bị dính vào biểu tượng
        fontSize: 18, // Căn chỉnh tùy theo nhu cầu
    },
    icon: {
        marginRight: 10, // Khoảng cách giữa biểu tượng và trường nhập liệu
    },
    button: {
        backgroundColor: '#1a73e8',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    linkText: {
        color: '#1a73e8',
        marginTop: 20, // Khoảng cách giữa nút và liên kết
        fontSize: 16,
        fontWeight: 'bold',
    

    },
    pass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10


    }
});

export default Login;
