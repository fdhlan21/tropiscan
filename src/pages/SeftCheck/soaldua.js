import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyCalendar, MyHeader, MyInput, MyRadio } from '../../components'
import { Icon } from 'react-native-elements'

export default function SelfCheckDua({navigation}) {
  // Array berisi 7 soal yang sama
  const questions = Array(7).fill({
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (Lorem ipsum dolor sit amet, consectetur adipiscing elit)",
    options: ["Yes", "No"]
  });

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

          {/* Render soal radio button menggunakan map */}
          {questions.map((item, index) => (
            <View key={index} style={{
              padding:10,
              marginBottom: 10,
            }}>
              <Text style={{
                fontFamily:fonts.primary[600],
                color:colors.primary,
                fontSize:12,
              }}>{item.question}</Text>

              <View style={{
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"center",
                left:-15
              }}>
                {item.options.map((option, optionIndex) => (
                  <MyRadio key={optionIndex} label={option}/>
                ))}
              </View>
            </View>
          ))}


            <TouchableNativeFeedback>
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
                              
                          }}>Save</Text>
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
        <TouchableNativeFeedback onPress={() => navigation.navigate("MainApp")}>
          <Icon type='ionicon' name='home-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>
      
        <TouchableNativeFeedback>
          <Icon type='ionicon' name='refresh-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>
   
        <TouchableNativeFeedback>
          <Icon type='ionicon' name='person-outline' color={colors.white} size={35}/>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}