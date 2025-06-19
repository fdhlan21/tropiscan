import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader, MyRadio } from '../../components'
import { ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

export default function Artikel({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const articles = [
    {
      id: 1,
      title: {
        ENG: 'Dengue Worldwide Overview',
        ID: 'Gambaran Umum Demam Berdarah Dunia'
      },
      image: require('../../assets/artikeldummy1.png'),
      content: {
        ENG: 'Dengue fever is a mosquito-borne tropical disease caused by the dengue virus...',
        ID: 'Demam berdarah adalah penyakit tropis yang ditularkan oleh nyamuk yang disebabkan oleh virus dengue...'
      },
      date: '15 June 2023',
      author: 'WHO Health Department'
    },
    {
      id: 2,
      title: {
        ENG: `Dutch neighbourhood quarantined over 'tropical disease'`,
        ID: `Lingkungan di Belanda Dikarantina karena 'Penyakit Tropis'`
      },
      image: require('../../assets/artikeldummy2.png'),
      content: {
        ENG: 'A neighborhood in the Netherlands was placed under quarantine after several cases of a tropical disease were reported...',
        ID: 'Sebuah lingkungan di Belanda ditempatkan di bawah karantina setelah beberapa kasus penyakit tropis dilaporkan...'
      },
      date: '10 June 2023',
      author: 'European Health Journal'
    },
  ];

  const carouselImages = [
    require('../../assets/corosel-2.png'),
    require('../../assets/corosel-1.png'),
    require('../../assets/corosel-3.png'),
  ];

  const navigateToDetail = (article) => {
    navigation.navigate('DetailArtikel', {
      article: {
        ...article,
        selectedLanguage
      }
    });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <MyHeader title={selectedLanguage === 'ENG' ? 'Articles' : 'Artikel'}/>
      <ScrollView>
        <View style={{ padding: 10 }}>
          {/* Language selector */}
          <View style={{
            flexDirection: 'row',
            justifyContent: "flex-end"
          }}>
            <MyRadio label="ID" selected={selectedLanguage === 'ID'} onPress={() => setSelectedLanguage('ID')} />
            <MyRadio label="ENG" selected={selectedLanguage === 'ENG'} onPress={() => setSelectedLanguage('ENG')} />
          </View>

          {/* Carousel */}
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {carouselImages.map((img, index) => (
                <Image
                  key={index}
                  source={img}
                  style={{
                    width: 333,
                    height: 468,
                    marginRight: 15,
                    borderRadius: 10,
                  }}
                />
              ))}
            </ScrollView>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: "center"
            }}>
              <Text style={{
                fontFamily: fonts.primary[500],
                color: colors.primary,
                fontSize: 20,
              }}>
                {selectedLanguage === 'ENG' ? 'Articles' : 'Artikel'}
              </Text>
              <View style={{
                padding: 1,
                backgroundColor: colors.primary,
                width: '75%',
                borderRadius: 10
              }} />
            </View>

            {/* Article list */}
            <View style={{
              marginTop: 20,
              alignItems: "center",
            }}>
              {articles.map((item) => (
                <TouchableNativeFeedback 
                  key={item.id} 
                  onPress={() => navigateToDetail(item)}
                >
                  <View style={{
                    width: 333,
                    height: 190,
                    borderRadius: 20,
                    overflow: 'hidden',
                    backgroundColor: '#ddd',
                    marginBottom: 20,
                    position: 'relative'
                  }}>
                    <Image
                      source={item.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        resizeMode: 'cover',
                      }}
                    />

                    <LinearGradient
                      colors={['transparent', 'rgba(0,128,128,0.8)']}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        height: '50%',
                        justifyContent: 'flex-end',
                        paddingHorizontal: 20,
                        paddingBottom: 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    >
                      <Text style={{
                        fontFamily: fonts.primary[500],
                        color: 'white',
                        fontSize: 15,
                        bottom: 25,
                        left: 15,
                        position: "absolute"
                      }}>
                        {item.title[selectedLanguage]}
                      </Text>
                    </LinearGradient>

                    <View style={{
                      position: 'absolute',
                      bottom: 5,
                      right: 10,
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <Text style={{
                        fontFamily: fonts.primary[400],
                        color: 'white',
                        marginRight: 5,
                        fontSize: 10,
                        top: 1
                      }}>
                        {selectedLanguage === 'ENG' ? 'Read More' : 'Baca Selengkapnya'}
                      </Text>
                      <Icon type='ionicon' name='chevron-forward-outline' color={colors.white} size={15} />
                    </View>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}