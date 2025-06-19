import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { fonts } from '../../utils'
import { MyHeader, MyInput } from '../../components'
import { colors } from '../../utils/colors'
import { showMessage } from 'react-native-flash-message'
import { storeData } from '../../utils/localStorage'
import { Image } from 'react-native'

export default function Register({navigation}) {
    const [data, setData] = useState({
        fullName: '',
        username: '',
        domicile: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegister = async () => {
        // Validation
        if (!data.fullName || !data.username || !data.domicile || !data.password || !data.confirmPassword) {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'All fields must be filled!',
                position: 'top'
            });
            return;
        }

        if (data.password !== data.confirmPassword) {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Password and confirmation do not match!',
                position: 'top'
            });
            return;
        }

        // Prepare user data
        const userData = {
            fullName: data.fullName,
            username: data.username,
            domicile: data.domicile,
            password: data.password
        };

        try {
            // Save to local storage
            await storeData('user', userData);
            
            showMessage({
                type: 'success',
                backgroundColor: colors.success,
                color: colors.white,
                message: 'Registration successful!',
                position: 'top'
            });
            
            navigation.navigate('Login');
        } catch (error) {
            console.error('Registration error:', error);
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Registration failed!',
                position: 'top'
            });
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Sign Up"/>
            <ScrollView>
                <View style={{ padding: 20 }}>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    marginBottom:20

                }}>

                <Image style={{
                    width:74,
                    height:74,
                    alignSelf:"center"
                }} source={require('../../assets/logo.png')}/>

                <Text style={{
                    fontFamily:fonts.primary[600],
                    color:colors.primary,
                    fontSize:20
                }}>TropiScan TravelWell{'\n'}(TSTW)</Text>

                </View>

                    <MyInput 
                        value={data.fullName}
                        label="Full Name :" 
                        placeholder="Enter your full name"
                        onChangeText={(text) => setData({...data, fullName: text})}
                    />

                    <MyInput 
                        value={data.username}
                        label="Username :" 
                        placeholder="Enter your username"
                        onChangeText={(text) => setData({...data, username: text})}
                    />

                    <MyInput 
                        value={data.domicile}
                        label="Domicile :" 
                        placeholder="Enter your domicile"
                        onChangeText={(text) => setData({...data, domicile: text})}
                    />

                    <MyInput 
                        value={data.password}
                        label="Password :" 
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        onChangeText={(text) => setData({...data, password: text})}
                    />

                    <MyInput 
                        value={data.confirmPassword}
                        label="Confirm Password :" 
                        placeholder="Confirm your password"
                        secureTextEntry={true}
                        onChangeText={(text) => setData({...data, confirmPassword: text})}
                    />

                    <TouchableNativeFeedback onPress={handleRegister}>
                        <View style={{
                            padding: 15,
                            backgroundColor: colors.primary,
                            borderRadius: 10,
                            marginTop: 30,
                        }}>
                            <Text style={{
                                fontFamily: fonts.primary[600],
                                color: colors.white,
                                textAlign: 'center',
                                fontSize: 16
                            }}>Register</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
                        <View style={{
                            padding: 10,
                            marginTop: 20,
                        }}>
                            <Text style={{
                                fontFamily: fonts.primary[400],
                                textAlign: "center",
                                color: colors.primary,
                                fontSize: 14,
                            }}>
                                Already have an account? <Text style={{fontFamily: fonts.primary[600]}}>Login</Text>
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </View>
    )
}