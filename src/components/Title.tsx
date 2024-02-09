import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

interface TitleProps {
    title: string;
  }
export const Title = ({title}: TitleProps) => {
  return (
    <View >
        <Image />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    textAlign: 'center',
    },
    title: {
      color: '#F7F7F7',
      fontWeight: 'bold',
      fontFamily: 'serif',
      fontSize: 26,
    },
  });