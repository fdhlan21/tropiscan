import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyCalendar, MyHeader, MyInput, MyRadio } from '../../components'
import { Icon } from 'react-native-elements'


export default function SelfCheck({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,

    }}>
      <MyHeader title="Self Check"/>
      
      <ScrollView>
        <View style={{
            padding:10,
        }}>

            <MyInput label="NIK/No Passport (Resident ID/Passport No) :" placeholder="NIK/No Passport (Resident ID/Passport No)"/>
            <MyInput label="Nama Lengkap (Full Name) :" placeholder="Nama Lengkap (Full Name)"/>
            <MyInput label="Tempat Lahir (Birth of Place) :" placeholder="Tempat Lahir (Birth of Place)"/>
            <MyCalendar label="Tanggal Lahir (Birth of Date) :"/>
          <View>
          <Text style={{
            fontFamily:fonts.primary[600],
            marginLeft:10,
            marginTop:10
          }}>Jenis Kelamin (Sex) :</Text>
              <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                <MyRadio label="Laki-laki (Male)"/>
                 <MyRadio label="Perempuan (Female)"/>
            </View>
          </View>
            <MyInput label="Alamat (Address) :" placeholder="Alamat (Address)"/>
            <MyInput label="Agama (Religion) :" placeholder="Agama (Religion)"/>
            <MyInput label="Status Perkawinan (Marital Status) :" placeholder="Status Perkawinan (Marital Status)"/>
            <MyInput label="Pekerjaan (Occupation) :" placeholder="Pekerjaan (Occupation)"/>
            <MyInput label="Kewarganegaran (Nationality) :" placeholder="Kewarganegaraan (Nationality)"/>

            <TouchableNativeFeedback onPress={() => navigation.navigate("SelfCheckDua")}>
                <View style={{
                    padding:10,
                    backgroundColor:colors.primary,
                    borderRadius:10,
                    marginTop:20
                }}>
                
                <Text style={{
                    fontFamily:fonts.primary[600],
                    textAlign:'center',
                    color:colors.white,
                    
                }}>Next</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
      </ScrollView>

       <View style={{
        padding:10,
        backgroundColor:colors.primary,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center',
      }}>

        {/* menu nav bottom untuk home */}
        <TouchableNativeFeedback onPress={() => navigation.navigate("MainApp", {screen: "Home"})}>
            <Icon type='ionicon' name='home-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>
   
        {/* menu nav bottom untuk riwayat */}
        <TouchableNativeFeedback onPress={() => navigation.navigate("MainApp", {screen: "Riwayat"})}>
            <Icon type='ionicon' name='time-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>

        {/* menu nav bottom untuk profile */}
        <TouchableNativeFeedback onPress={() => navigation.navigate("MainApp", {screen: "Profile"})}>
            <Icon type='ionicon' name='person-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>

      </View>
      
    </View>
  )
}