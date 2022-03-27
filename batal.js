import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from "react";
import { StyleSheet, Text, Image, View, Modal, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxtop}>
        <Text style={styles.judul}>Daftar Pembatalan</Text>
      </View>
      <View style={styles.wrapcontainer}>
      <Image
            style={styles.pictkonten}
            source={require('./assets/images/page batal.svg')}
          ></Image>
      <Text style={styles.tekskonten}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  boxtop: {
    padding: 20,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#024D88',
    alignItems: 'center',
  },
  judul: {
    color: '#ffffff',
    fontSize: 20,
  },
  wrapcontainer: {
    justifyContent: 'center',
    flex: 1,
  },
  pictkonten: {
    width: 330,
    height: 248,
  },
  tekskonten: {
    color: '#00579C',
    fontSize: '19px',
  },
  boxbottom: {
    flexDirection: 'row',
    padding: "10px",
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: '#FFFFFF',
  },
  bottom: {
    width: 50,
    height: 50,
    margin: 'auto',
  },
  boticon: {
    width: 'calc(100%/4)',
  },
});
