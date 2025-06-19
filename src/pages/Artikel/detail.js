import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function DetailArtikel({route, navigation}) {
  // Get article data from navigation parameters
  const { article } = route.params;
  const { title, image, date, author, selectedLanguage } = article;

  return (
    <View style={{
        flex: 1,
        backgroundColor: colors.white,
    }}>
        {/* Header with dynamic title */}
        <MyHeader title={title[selectedLanguage]} onPress={() => navigation.goBack()}/>
        
        <ScrollView>
            <View style={{
                padding: 20,
            }}>

                {/* Article title */}
                <Text style={{
                    fontFamily: fonts.primary[600],
                    textAlign: "center",
                    color: colors.primary,
                    fontSize: 18,
                    marginBottom: 15
                }}>
                    {title[selectedLanguage]}
                </Text>

                {/* Article metadata */}
                <Text style={{
                    fontFamily: fonts.primary[400],
                    textAlign: "center",
                    color: colors.gray,
                    fontSize: 12,
                    marginBottom: 15
                }}>
                    {author} • {date}
                </Text>

                {/* Article image */}
                <Image style={{
                    width: '100%',
                    height: 200,
                    alignSelf: "center",
                    borderRadius: 10,
                    marginBottom: 20
                }} source={image}/>

                {/* Article content - will come from database */}
                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[400],
                        textAlign: "justify",
                        fontSize: 14,
                        lineHeight: 22,
                        color: colors.dark
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        {'\n\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}