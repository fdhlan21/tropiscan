import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { colors, fonts, MyDimensi } from '../../utils';

export default function MyRadio({ label, selected, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={[
                    styles.radioButton,
                    selected && styles.radioButtonSelectedBorder
                ]}>
                    {selected && <View style={styles.radioButtonSelected} />}
                </View>
                <Text style={[
                    styles.radioLabel,
                    selected && styles.radioLabelSelected
                ]}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 8,
        marginHorizontal:15

    },
    radioButton: {
        width: 24,
        height: 24,
        backgroundColor: colors.secondary,
        borderRadius: 12,
        borderColor: colors.primary, // Default border color
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelectedBorder: {
        borderColor: colors.primary, // Selected border color
    },
    radioButtonSelected: {
        width: 12,
        height: 12,
        backgroundColor: colors.primary,
        borderRadius: 6,
    },
    radioLabel: {
        marginLeft: 12,
        fontSize: MyDimensi / 5,
        fontFamily: fonts.primary[400],
        color: colors.primary, // Default text color
    },
    radioLabelSelected: {
        fontFamily: fonts.secondary[600],
        color: colors.primary, // Selected text color
    },
});