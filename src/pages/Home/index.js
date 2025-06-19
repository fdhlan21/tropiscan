import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const images = [
  { id: 2, src: require('../../assets/corosel-2.png'), label: 'Gambar 2' },
  { id: 1, src: require('../../assets/corosel-1.png'), label: 'Gambar 1' },
  { id: 3, src: require('../../assets/corosel-3.png'), label: 'Gambar 3' },
];

const homeArticles = [
  {
    id: 1,
    title: {
      ENG: 'Dengue Worldwide Overview',
      ID: 'Gambaran Umum Demam Berdarah Dunia'
    },
    image: require('../../assets/artikeldummy1.png'),
    content: {
      ENG: 'Dengue fever is a mosquito-borne tropical disease caused by the dengue virus. Symptoms typically begin three to fourteen days after infection...',
      ID: 'Demam berdarah adalah penyakit tropis yang ditularkan oleh nyamuk yang disebabkan oleh virus dengue. Gejala biasanya mulai tiga hingga empat belas hari setelah infeksi...'
    },
    date: '15 June 2023',
    author: 'WHO Health Department'
  },
  {
    id: 2,
    title: {
      ENG: `Dutch neighbourhood quarantined`,
      ID: `Lingkungan di Belanda Dikarantina`
    },
    image: require('../../assets/artikeldummy2.png'),
    content: {
      ENG: 'A neighborhood in the Netherlands was placed under quarantine after several cases of a tropical disease were reported by local health authorities...',
      ID: 'Sebuah lingkungan di Belanda ditempatkan di bawah karantina setelah beberapa kasus penyakit tropis dilaporkan oleh otoritas kesehatan setempat...'
    },
    date: '10 June 2023',
    author: 'European Health Journal'
  },
];

const windowHeight = Dimensions.get('window').height;
const itemWidth = windowWidth * 0.8;
const itemHeight = 469;
const sideItemWidth = windowWidth * 0.6;
const sideItemHeight = 400;

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const [profileImage, setProfileImage] = useState(require('../../assets/dummy_profile.png'));
  // const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const __getUser = async () => {
    try {
      const userData = await getData('user');
      if (userData) {
        setUser(userData);
        if (userData.profileImage) {
          setProfileImage({ uri: userData.profileImage });
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const navigateToDetail = (article) => {
    navigation.navigate('DetailArtikel', {
      article: {
        ...article,
        selectedLanguage: 'ENG' // Default language for home screen articles
      }
    });
  };

  useEffect(() => {
    __getUser();
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({ x: windowWidth, animated: false });
    }, 100);
  }, []);

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / windowWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header */}
      <View style={{
        padding: 20,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      }}>
        <View>
          <Text style={{
            fontFamily: fonts.primary[600],
            color: colors.white,
            fontSize: 15,
          }}>Welcome</Text>
          <Text style={{
            fontFamily: fonts.primary[600],
            color: colors.white,
            fontSize: 20,
          }}>{user.fullName || 'Guest'}</Text>
        </View>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Profile')}>
          <View>
            <Image 
              style={{
                width: 57,
                height: 55,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: colors.white
              }} 
              source={profileImage} 
            />
          </View>
        </TouchableNativeFeedback>
      </View>

      <ScrollView>
        <View style={{ padding: 10 }}>
          {/* Carousel */}
          <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              scrollEventThrottle={16}
              contentOffset={{ x: windowWidth, y: 0 }}
            >
              {images.map((item, index) => (
                <View key={item.id} style={{
                  width: windowWidth,
                  justifyContent: 'center',
                  alignItems: 'center',
                  left:-10
                }}>
                  <Image 
                    source={item.src} 
                    style={{
                    width:333,
                    height:469
                    }} 
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Self Check */}
          <TouchableNativeFeedback onPress={() => navigation.navigate("SelfCheck")}>
            <View style={{
              backgroundColor: colors.primary,
              flexDirection: "row",
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              padding: 10,
            }}>
              <Image style={{ width: 50, height: 50 }} source={require("../../assets/icon-medical.png")} />
              <Text style={{
                fontFamily: fonts.primary[600],
                color: colors.white,
                fontSize: 20,
              }}>Self Check</Text>
            </View>
          </TouchableNativeFeedback>

          {/* Artikel */}
          <View style={{ marginTop: 15, alignItems: "center" }}>
            {homeArticles.map((item) => (
              <TouchableNativeFeedback 
                key={item.id} 
                onPress={() => navigateToDetail(item)}
              >
                <View style={{
                  width: 321,
                  height: 195,
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
                      height: '60%',
                      justifyContent: 'flex-end',
                      paddingHorizontal: 15,
                      paddingBottom: 15,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  >
                    <Text style={{
                      fontFamily: fonts.primary[600],
                      color: 'white',
                      fontSize: 14,
                      bottom: 20,
                      position: "absolute",
                      left: 15
                    }}>
                      {item.title['ENG']}
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
                      fontSize: 10
                    }}>
                      Read More
                    </Text>
                    <Icon type='ionicon' name='chevron-forward-outline' color={colors.white} size={15} />
                  </View>
                </View>
              </TouchableNativeFeedback>
            ))}

            <TouchableNativeFeedback onPress={() => navigation.navigate("Artikel")}>
              <View style={{
                flexDirection: 'row',
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: 5,
                width: '100%',
                paddingRight: 20
              }}>
                <Text style={{
                  fontFamily: fonts.primary[500],
                  color: '#c4c4c4'
                }}>More Articles</Text>
                <Icon type='ionicon' name='chevron-forward-outline' color="#c4c4c4c4" />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}