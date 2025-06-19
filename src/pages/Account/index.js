import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { fonts, colors } from '../../utils';
import { getData } from '../../utils/localStorage';
import { MyButton, MyGap, MyHeader } from '../../components';
import { useIsFocused } from '@react-navigation/native';

export default function Profile({ navigation }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData('user').then(res => {
        setUser(res || {});
        setLoading(false);
      });
    }
  }, [isFocused]);

  const btnKeluar = () => {
    Alert.alert('Confirmation', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: "cancel"
      },
      {
        text: 'Log Out',
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      }
    ]);
  };

  const MyList = ({ label, value }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={{
          fontFamily: fonts.primary[600],
          color: colors.primary,
          marginLeft: 10
        }}>
          {label}
        </Text>
        <View style={{
          marginVertical: 2,
          padding: 10,
          backgroundColor: colors.lightGray,
          borderRadius: 10,
          minHeight: 40
        }}>
          <Text style={{
            fontFamily: fonts.primary[400],
            color: colors.dark,
          }}>
            {value || '-'}
          </Text>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader title="My Profile" onPress={() => navigation.goBack()} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          {/* Profile Picture - Display only */}
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Image 
              source={user.profileImage ? { uri: user.profileImage } : require('../../assets/dummy_profile.png')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderWidth: 2,
                borderColor: colors.primary
              }}
            />
          </View>

          {/* User Info - Updated to match register fields */}
          <MyList label="Full Name:" value={user.fullName} />
          <MyList label="Username:" value={user.username} />
          <MyList label="Domicile:" value={user.domicile} />

          {/* Password fields are not shown for security reasons */}
        </View>

        <View style={{ padding: 20 }}>
          <MyButton 
            title="Edit Profile" 
            onPress={() => navigation.navigate('MainApp')} 
            warna={colors.primary} 
          />
          <MyGap jarak={10} />
          <MyButton 
            title="Log Out" 
            onPress={btnKeluar} 
            warna={colors.danger} 
            colorText={colors.white} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}