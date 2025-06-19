import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyInput } from '../../components'
import { showMessage } from 'react-native-flash-message'
import { getData } from '../../utils/localStorage' // Import getData from local storage

export default function Login({navigation}) {
    const [data, setData] = useState({
        username: '', // Changed from email to NIK
        password: '',
    });

    const handleLogin = async () => {
        // Validation
        if (!data.username || !data.password) {
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'All fields must be filled!',
                position: 'top',
                style: {borderBottomRightRadius: 10, borderBottomLeftRadius: 10},
                textStyle: {fontFamily: fonts.primary[600]}
            });
            return;
        }

        try {
            // Get user data from local storage
            const userData = await getData('user');
            
            if (!userData) {
                showMessage({
                    type: 'danger',
                    backgroundColor: colors.danger,
                    color: colors.white,
                    message: 'No registered user found!',
                    position: 'top'
                });
                return;
            }

            // Check credentials
            if (userData.username === data.username && userData.password === data.password) {
                showMessage({
                    type: 'success',
                    backgroundColor: colors.success,
                    color: colors.white,
                    message: 'Login successful!',
                    position: 'top'
                });
                navigation.navigate('WelcomePage');
            } else {
                showMessage({
                    type: 'danger',
                    backgroundColor: colors.danger,
                    color: colors.white,
                    message: 'Invalid Username or password!',
                    position: 'top'
                });
            }

            /* 
            // Database version (commented out)
            axios.post('API KEY', data)
                .then((res) => {
                    if (res.data.status == 'success') {
                        showMessage({
                            type:'success',
                            backgroundColor:colors.white,
                            color:colors.success,
                            message:res.data.message
                        });
                        navigation.navigate('Home');
                    } else {
                        showMessage({
                            type:'danger',
                            backgroundColor:colors.white,
                            color:colors.danger,
                            message:res.data.message
                        });
                    }
                })
                .catch((err) => {
                    console.error('Error: ', err);
                })
            */
        } catch (error) {
            console.error('Login error:', error);
            showMessage({
                type: 'danger',
                backgroundColor: colors.danger,
                color: colors.white,
                message: 'Login failed!',
                position: 'top'
            });
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <ScrollView>
                <View style={{padding: 10}}>
                    <View style={{
                        marginTop: 50,
                        alignItems: "center"
                    }}>
                        <Image style={{
                            width: 240,
                            height: 240,
                            alignSelf: 'center'
                        }} source={require("../../assets/logo.png")}/>

                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 23, 
                            color: colors.primary,
                            marginTop: 20
                        }}>TropiScan TravelWell</Text>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 23,
                            color: colors.primary
                        }}>(TSTW)</Text>
                    </View>

                    {/* Input fields */}
                    <View style={{
                        marginTop: 20,
                        padding: 10
                    }}>
                        <MyInput 
                            label="Username" 
                            placeholder="Enter your Username"
                            value={data.nik}
                            onChangeText={(text) => setData({...data, username: text})}
                        />
                        <MyInput 
                            label="Password" 
                            placeholder="Enter your password" 
                            secureTextEntry={true}
                            value={data.password}
                            onChangeText={(text) => setData({...data, password: text})}
                        />

                        {/* Forgot password */}
                        <TouchableNativeFeedback>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop: 10
                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[500],
                                    color: colors.primary,
                                    fontSize: 12,
                                }}>Forgot password?</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <View>
                            <TouchableNativeFeedback onPress={handleLogin}>
                                <View style={{
                                    padding: 10,
                                    backgroundColor: colors.primary,
                                    borderRadius: 10,
                                    marginTop: 50,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[600],
                                        textAlign: "center",
                                        color: colors.white,
                                        fontSize: 15,
                                    }}>Sign In</Text>
                                </View>
                            </TouchableNativeFeedback>

                            <TouchableNativeFeedback onPress={() => navigation.navigate("Register")}>
                                <View style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    marginTop: 20,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[400],
                                        textAlign: "center",
                                        color: colors.primary,
                                        fontSize: 12,
                                    }}>Don't have an account? Please <Text style={{fontFamily: fonts.primary[600]}}> Sign Up</Text></Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}