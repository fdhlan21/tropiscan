import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const img = new Animated.Value(0.5);
  const textScale = new Animated.Value(0.5);
  const textOpacity = new Animated.Value(0);
  const bottomTextScale = new Animated.Value(0.8);
  const bottomTextOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(img, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(textScale, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(500), // Delay the bottom text animation
        Animated.parallel([
          Animated.timing(bottomTextScale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(bottomTextOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        ])
      ])
    ]).start();

    setTimeout(() => {
      navigation.replace("Login");
    }, 1200);
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      backgroundColor: colors.white,
      justifyContent: 'center',
      position: 'relative'
    }}>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '100%',
        height: '100%'
      }}>

        <Animated.Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{
            transform: [{ scale: img }],
            width: windowWidth / 1.5,
            height: windowWidth / 1.5,  
            marginTop: '50%'
          }}
        />
      
        <View style={{
          marginTop: '20%',
          alignItems: "center"
        }}>
          <Animated.Text style={{
            opacity: textOpacity,
            transform: [{ scale: textScale }],
            textAlign: 'center',
            marginTop:-50
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 23,
              color: colors.primary,
              textAlign: "center",
            }}>TropiScan TravelWell</Text>
          </Animated.Text>

          <Animated.Text style={{
            opacity: textOpacity,
            transform: [{ scale: textScale }],
            textAlign: 'center',
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: 23,
              color: colors.primary,
              textAlign: "center",
            }}>(TSTW)</Text>
          </Animated.Text>

           <ActivityIndicator style={{marginTop:50}} color={colors.primary} size="small" />


          <Animated.Text style={{
            opacity: bottomTextOpacity,
            transform: [{ scale: bottomTextScale }],
            textAlign: "center",
            marginTop:150,
            paddingHorizontal: 20,
            color: colors.primary,
            fontFamily: fonts.primary[500],
            fontSize: 12,
            lineHeight: 20,
          }}>
            Tropical Onehealth and Ecohealth Institute
          </Animated.Text>
        </View>
          
       
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});