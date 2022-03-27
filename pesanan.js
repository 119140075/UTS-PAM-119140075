import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxtop}>
        <Text style={styles.judul}>Daftar Pemesanan</Text>
      </View>
      <View style={styles.wrapcontainer1}>
      <View style={styles.wrapcontainer}>
          <Text style={styles.teksisi}>Merak ke Bakauheni</Text>
          <Text style={styles.teksisi1}>Jadwal Masuk Pelabuhan</Text>
          <Text style={styles.teksisi1}>Kamis, 17 Maret 2022</Text>
          <Text style={styles.teksisi1}>09:30 WIB</Text>
          <Text style={styles.teksisi1}>Layanan</Text>
          <Text style={styles.teksisi1}>Express</Text>
          <Text style={styles.konten1}>Dewasa x1</Text>
          <Text style={styles.konten1}>Rp 65.000</Text>
      </View>
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
    padding: '20px',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginBottom: 10,
  },
  teksisi: {
    fontSize: '20px',
    color: '#000',
  },
  wrapcontainer1: {
    justifyContent: 'center',
    flex: 1,
  },
});
