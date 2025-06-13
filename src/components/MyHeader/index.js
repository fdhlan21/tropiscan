import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function MyHeader({ onPress, color = colors.white, title, icon = false, iconname = 'search' }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Back Button - Always rendered */}
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Icon type='ionicon' name='arrow-back-outline' size={20} color={color} />
      </TouchableOpacity>

      {/* Title - Centered */}
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color }]} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right Icon - Conditionally rendered */}
      {icon ? (
        <TouchableOpacity onPress={onPress} style={styles.iconButton}>
          <Icon name={iconname} size={20} color={color} />
        </TouchableOpacity>
      ) : (
        // Empty view to balance the flex layout when icon is not present
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    padding: 10,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    ...fonts.headline2,
    textAlign: 'center',
    maxWidth: '70%',
  },
  iconButton: {
    padding: 10,
  },
  iconPlaceholder: {
    width: 40,
  },
});