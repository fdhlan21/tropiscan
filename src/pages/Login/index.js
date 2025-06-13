import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyInput } from '../../components'
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';

export default function Login({navigation}) {
    const [data, setData] = useState({
        email: '',
        password:'',
    });

    const handleLogin = () => {
        if (data.email.length == '' || data.password.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Semua Field Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
            });
        } else if (data.email.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Email Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
                
            });
        } else if (data.password.length == '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.white,
                color:colors.danger,
                message:'Password Harus Diisi!',
            });
        }  else {
            console.log('Data yang dikirim: ', data);

            axios
            .post('API KEY', data)
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
        }
    };


  return (
    <View style={{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }}>
      <ScrollView>
        <View style={{
            padding:10,
        }}>


            <View style={{
                marginTop:50,
                alignItems:"center"
            }}>
                <Image style={{
                    width:240,
                    height:240,
                    alignSelf:'center'
                }} source={require("../../assets/logo.png")}/>

                <Text style={{
                    fontFamily:fonts.primary[600],
                    fontSize:23, 
                    color:colors.primary,
                    marginTop:20
                }}>TropiScan TravelWell</Text>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    fontSize:23,
                    color:colors.primary
                }}>(TSTW)</Text>
            </View>

            {/* input */}

            <View style={{
                marginTop:20,
                padding:10
            }}>


                <MyInput label="Username" placeholder="Username"/>
                <MyInput label="Password" placeholder="Password" secureTextEntry={true}/>


                {/* lupa pw */}
                <TouchableNativeFeedback>
                  <View style={{
                    flexDirection:'row',
                    justifyContent:"flex-end",
                    marginTop:10
                  }}>
                      <Text style={{
                        fontFamily:fonts.primary[500],
                        color:colors.primary,
                        fontSize:12,

                    }}>Forget password?</Text>
                  </View>
                </TouchableNativeFeedback>

                <View>

                
                <TouchableNativeFeedback>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:10,
                        marginTop:50,
                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            textAlign:"center",
                            color:colors.white,
                            fontSize:15,
                        

                        }}>Sign In</Text>
                    </View>
                </TouchableNativeFeedback>

                 <TouchableNativeFeedback onPress={() => navigation.navigate("Register")}>
                    <View style={{
                        padding:10,
                      
                        borderRadius:10,
                        marginTop:20,
                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[400],
                            textAlign:"center",
                            color:colors.primary,
                            fontSize:12,
                        

                        }}>Don’t have an account? Please <Text style={{fontFamily:fonts.primary[600]}}> Sign Up</Text></Text>
                    </View>
                </TouchableNativeFeedback>

                </View>

            </View>
       

        </View>
      </ScrollView>
    </View>
  )
}