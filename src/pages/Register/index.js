import { View, Text, ImageBackground, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { fonts } from '../../utils'
import { MyHeader, MyInput } from '../../components'
import { colors } from '../../utils/colors'
import { showMessage } from 'react-native-flash-message'
import axios from 'axios'
import { Image } from 'react-native'

export default function Register({navigation}) {

    const [data, setData] = useState({
        nama:'',
        email:'',
        telepon:'',
        alamat:'',
        password:'',


    });

    const handleRegister = () => {
        if (data.nama.length == '' || data.email.length == '' || data.telepon.length == '' || data.alamat.length == '' || data.password.length == '') { 
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Semua Field Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
            })
        } else if (data.nama.length === '') {
            showMessage({
                type:'danger',
                backgroundColor:colors.danger,
                color:colors.white,
                message:'Nama Harus Diisi!',
                position:'top',
                style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
                textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.email.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Email Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.telepon.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Telepon Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.alamat.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Alamat Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else if (data.password.length === '') {
        showMessage({
            type:'danger',
            backgroundColor:colors.danger,
            color:colors.white,
            message:'Password Harus Diisi!',
            position:'top',
            style:{borderBottomRightRadius:10, borderBottomLeftRadius:10,},
            textStyle:{fontFamily:fonts.primary[600]}
        });
     } else {
        console.log('Data yang dikirim: ', data);
        axios
        .post('API KEY', data)
        .then((res) => {
            if (res.data.status == 'success') {
                showMessage({
                    type:'success',
                    backgroundColor:colors.success,
                    color:colors.white,
                    message:'Selamat Anda Berhasil Mendaftar!'
                });
                navigation.navigate('Login');
            } else {
                showMessage({
                    type:'danger',
                    backgroundColor:colors.danger,
                    color:colors.white,
                    message:'Akun Sudah Terdaftar!'
                });
            }
        })
        .catch((err) => {
            console.error('Error: ', err);
        });
     }
    };


  return (
    <View  style={{
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:colors.white
    }}>
    <MyHeader title="Sign Up"/>
      <ScrollView>
        <View style={{
            padding:10
        }}>

        <View style={{
            marginTop:'2%'
        }}>

        <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-evenly"

        }}>

        <View>
            <Image style={{
                width:74,
                height:74,
            }} source={require('../../assets/logo.png')}/>
        </View>

        <View style={{
            
        }}>
            <Text style={{
                fontFamily:fonts.primary[600],
                color:colors.primary,
                fontSize:20,
            }}>TropiScan TravelWell{'\n'}(TSTW)</Text>
        </View>

        </View>
           

            <View style={{
                padding:10,
            }}>

            <MyInput value={data.nama} 
            label="Full Name :" 
            colorlabel='white' 
            placeholder="Full Name" 
            onChangeText={(x) => setData({...data, 'nama':x})}
            />

            <MyInput 
            value={data.email}
            label="Username :" 
            colorlabel='white' 
            placeholder="Username"
            onChangeText={(x) => setData({...data, 'email':x})}
            />

            <MyInput 
            value={data.telepon}
            label="Domicile :"
            colorlabel='white' 
            placeholder="Domicile"
            onChangeText={(x) => setData({...data, 'telepon':x})}
            />

            <MyInput 
            value={data.alamat}
            label="Password :" 
            colorlabel='white'
            placeholder="Password"
            onChangeText={(x) => setData({...data, 'alamat':x})}
             />

            <MyInput
            value={data.password}
             label="Confirm Password :" 
             colorlabel='white' 
             placeholder="Isi Kata Sandi" 
             secureTextEntry={true}
            onChangeText={(x) => setData({...data, 'password':x})}
             />


            <View>
                <TouchableNativeFeedback onPress={handleRegister}>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:10,
                        marginTop:30,

                    }}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:'center',

                        }}>Sign Up</Text>
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

        </View>
      </ScrollView>
    </View>
  )
}