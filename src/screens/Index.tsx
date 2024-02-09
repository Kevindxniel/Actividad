import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { Title } from '../components/title'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{};

export const Index = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Title title="Bienvenidos"  />
      <Image
        source={{
          uri: 'https://isil.pe/blog/wp-content/uploads/2023/05/tipos-de-app-moviles.png',
        }}
        style={styles.img}
      />
        <Button title="Division" onPress={() => navigation.navigate('Division')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      resizeMode: 'contain',
      width: '70%',
      height: '70%',
    },
    text: {
      top: 10,
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    parr: {
      paddingVertical: 20,
      textAlign: 'center',
      fontSize: 15,
      color: 'gray',
      fontWeight: 'bold', 
    }
  });
