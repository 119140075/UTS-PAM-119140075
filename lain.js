import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from "react";
import { StyleSheet, Text, Image, View, Modal, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.boxtop}>
            <Text style={styles.judul}>Lainnya</Text>
        </View>
        <View style={styles.wrapoption}>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}>
              <Image
              style={styles.bottom}
              source={require('./assets/images/cekpesan.svg')}
              />
              <Text style={styles.textStyle}>Cek Pesanan</Text>
            </Pressable>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}>
              <Image
              style={styles.bottom}
              source={require('./assets/images/profile.svg')}
              />
              <Text style={styles.textStyle}>Detail Profile</Text>
            </Pressable>
          </View>
          <View style={styles.wrapoption}>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}>
              <Image
              style={styles.bottom}
              source={require('./assets/images/hubungi.svg')}
              />
              <Text style={styles.textStyle}>Hubungi Kami</Text>
            </Pressable>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}>
              <Image
              style={styles.bottom}
              source={require('./assets/images/riwayat.svg')}
              />
              <Text style={styles.textStyle}>Riwayat Pemesanan</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cekpesan: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 2,
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    buttoncekpesan: {
        backgroundColor: "#ffffff",
        margin: '10px',
    },
    wrapoption: {
        flexDirection: 'row',
    },
    bottom: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
  });