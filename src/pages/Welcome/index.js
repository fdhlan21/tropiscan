import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

export default function WelcomePage({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
     
     <View style={{
        padding:10,
     }}>

     <Text style={{
        fontFamily:fonts.primary[600],
        color:colors.primary,
        textAlign:"center",
        fontSize:40,
        marginTop:70
        }}>Welcome</Text>

        <View>
            <Image style={{
                width:200,
                height:200,
                alignSelf:"center",

            }} source={require('../../assets/logo.png')}/>

            <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[500],
                fontSize:20,

            }}>TropiScan TravelWell</Text>
              <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[500],
                fontSize:20,
                
            }}>(TSTW)</Text>
        </View>

        <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:"flex-start", // Changed to flex-start for better alignment
            marginTop:80,
            padding:10
        }}>

        {/* First View */}
        <View style={{
            alignItems: 'center',
            width: '48%'
        }}>
            <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[400],
                fontSize:15,
            }}>What is{'\n'}Tropical Fever?</Text>

            <Image style={{
                width:98,
                height:98,
                marginTop:10,
            }} source={require('../../assets/icon-virus.png')}/>

            <TouchableNativeFeedback onPress={() => navigation.navigate("Artikel")}>
                <View style={{
                    padding:10,
                    backgroundColor:colors.primary,
                    borderRadius:20,
                    marginTop:10,
                    width:150
                }}>
                    <Text style={{
                        fontFamily:fonts.primary[500],
                        color:colors.white,
                        fontSize:12,
                        textAlign:"center"
                    }}>Learn More</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        {/* Second View */}
        <View style={{
            alignItems: 'center',
            width: '48%'
        }}>
            <Text style={{
                textAlign:"center",
                fontFamily:fonts.primary[400],
                fontSize:15,
                marginBottom: 20,
                top:20
            }}>Am I Infected?</Text>

            <Image style={{
                width:98,
                height:98,
                top:20
                
            }} source={require('../../assets/icon-masker.png')}/>

            <TouchableNativeFeedback onPress={() => navigation.navigate("SelfCheck")}>
                <View style={{
                    padding:10,
                    borderRadius:20,
                    backgroundColor:colors.tertiary,
                    width:150, // Made same width as first button
                    marginTop: 10 ,
                    top:11
                }}>
                    <Text style={{
                        fontFamily:fonts.primary[500],
                        color:colors.white,
                        fontSize:12,
                        textAlign:"center"
                    }}>Do Self Check Now</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        </View>
     </View>
    </View>
  )
}