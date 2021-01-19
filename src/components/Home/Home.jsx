import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
})
export default Home
