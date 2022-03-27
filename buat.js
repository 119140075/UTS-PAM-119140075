import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from "react";
import { StyleSheet, Text, Image, View, Modal, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardbox}>
        <View>
          <Image
              style={styles.logo}
              source={require('./assets/images/logo.svg')}
          />
        </View>
        <View>
          <Text style={styles.konten}>Kuota Tersedia (75)</Text>
          <Text style={styles.konten}>Rincian Tiket</Text>
        </View>
        <View style={styles.wrapcontainer}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  cardbox: {
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  logo: {
    width: 127,
    height: 35,
    margin: 'auto',
    marginBottom: 40,
  },
  konten: {
    fontSize: '16px',
    color: '#000',
  },
  wrapcontainer: {
    backgroundColor: '#F0F0F0',
  }
});
