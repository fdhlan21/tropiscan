import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'

export default function Riwayat ({mavigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,
    }}>
     <MyHeader title="History" />
    </View>
  )
}