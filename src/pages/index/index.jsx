import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default function Index() {
  const [isA] = useState(true)
  const [isB] = useState(false)
  const [isC] = useState(true)

  const renderCustom = () => {
      if (isA) {
          return <View>A</View>
      } else if (isB) {
          if (isC) {
              return <View>C</View>
          }
          return <View>D</View>
      }
      return '-'
  }

  return (
      <View>{renderCustom()}</View>
  )
}
