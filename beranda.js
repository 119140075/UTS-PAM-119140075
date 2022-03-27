import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, Pressable, TouchableOpacity } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTujuan, setModalTujuan] = useState(false);
  const [modalLayanan, setModalLayanan] = useState(false);
  const [modalJam, setModalJam] = useState(false);
  const [modalLainnya, setModalLainnya] = useState(false);
  const [modalTanggal, setModalTanggal] = useState(false);

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
          <Text style={styles.konten}>Pelabuhan Awal</Text>
        </View>
        <View style={styles.ctnrow}>
          <Image
            style={styles.logokonten}
            source={require('./assets/images/kapal.svg')}
          ></Image>
          <Pressable onPress={() => setModalVisible(true)} style={styles.cardkonten}>
              <Text style={styles.isikonten}>Pilih Pelabuhan Awal</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.konten}>Pelabuhan Tujuan</Text>
        </View>
        <View style={styles.ctnrow}>
          <Image
            style={styles.logokonten}
            source={require('./assets/images/kapal.svg')}
          ></Image>
          <Pressable onPress={() => setModalTujuan(true)} style={styles.cardkonten}>
              <Text style={styles.isikonten}>Pilih Pelabuhan Tujuan</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.konten}>Kelas Layanan</Text>
        </View>
        <View style={styles.ctnrow}>
          <Image
            style={styles.logokonten1}
            source={require('./assets/images/layanan.svg')}
          ></Image>
          <Pressable onPress={() => setModalLayanan(true)} style={styles.cardkonten}>
              <Text style={styles.isikonten}>Pilih Layanan</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.konten}>Tanggal Masuk Pelabuhan</Text>
        </View>
        <View style={styles.ctnrow}>
          <Image
            style={styles.logokonten}
            source={require('./assets/images/day.svg')}
          ></Image>
          <Pressable onPress={() => setModalTanggal(true)} style={styles.cardkonten}>
              <Text style={styles.isikonten}>Pilih Tanggal Masuk</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.konten}>Jam Masuk Pelabuhan</Text>
        </View>
        <View style={styles.ctnrow}>
          <Image
            style={styles.logokonten}
            source={require('./assets/images/time.svg')}
          ></Image>
          <Pressable onPress={() => setModalJam(true)} style={styles.cardkonten}>
              <Text style={styles.isikonten}>Pilih Jam Masuk</Text>
          </Pressable>
        </View>
        <View style={styles.boxage}>
            <Text style={styles.isiboxage}>Dewasa</Text>
        </View>
        <View style={styles.boxbuat}>
            <Text style={styles.isiboxbuat}>Buat</Text>
        </View>
        {/* <TouchableOpacity style={styles.boxbuat} onPress={() => navigation.navigate('batal')}>
            <Text style={styles.isiboxbuat}>Buat</Text>
        </TouchableOpacity> */}
      </View>
    <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pilih Pelabuhan</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Bakauheni</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Merak</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Modal
            animationType="slide"
            transparent={true}
            visible={modalTujuan}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalTujuan(!modalTujuan);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pilih Pelabuhan Tujuan</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalTujuan(!modalTujuan)}
          >
            <Text style={styles.textStyle}>Bakauheni</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalTujuan(!modalTujuan)}
          >
            <Text style={styles.textStyle}>Merak</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Modal
           animationType="slide"
            transparent={true}
            visible={modalLayanan}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalLayanan(!modalLayanan);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pilih Layanan</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalLayanan(!modalLayanan)}
          >
            <Text style={styles.textStyle}>Express</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalLayanan(!modalLayanan)}
          >
            <Text style={styles.textStyle}>Reguler</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Modal
           animationType="slide"
            transparent={true}
            visible={modalTanggal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalTanggal(!modalTanggal);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pilih Tanggal</Text>         
        </View>
      </View>
    </Modal>  
    <Modal
            animationType="slide"
            transparent={true}
            visible={modalJam}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalJam(!modalJam);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pilih Jam Masuk</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalJam(!modalJam)}
          >
            <Text style={styles.textStyle}>08:00</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalJam(!modalJam)}
          >
            <Text style={styles.textStyle}>09:30</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalJam(!modalJam)}
          >
            <Text style={styles.textStyle}>11:00</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalJam(!modalJam)}
          >
            <Text style={styles.textStyle}>12:30</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalJam(!modalJam)}
          >
            <Text style={styles.textStyle}>14:00</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Modal
            animationType="slide"
            transparent={true}
            visible={modalLainnya}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalLainnya(!modalLainnya);
            }}
          >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Menu</Text>
          <View style={styles.wrapoption}>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}
            onPress={() => setModalLainnya(!modalLainnya)}
            >
              <Image
              style={styles.bottom}
              source={require('./assets/images/cekpesan.svg')}
              />
              <Text style={styles.textStyle}>Cek Pesanan</Text>
            </Pressable>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}
            onPress={() => setModalLainnya(!modalLainnya)}
            >
              <Image
              style={styles.bottom}
              source={require('./assets/images/profile.svg')}
              />
              <Text style={styles.textStyle}>Detail Profile</Text>
            </Pressable>
          </View>
          <View style={styles.wrapoption}>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}
            onPress={() => setModalLainnya(!modalLainnya)}
            >
              <Image
              style={styles.bottom}
              source={require('./assets/images/hubungi.svg')}
              />
              <Text style={styles.textStyle}>Hubungi Kami</Text>
            </Pressable>
            <Pressable
            style={[styles.cekpesan, styles.buttoncekpesan]}
            onPress={() => setModalLainnya(!modalLainnya)}
            >
              <Image
              style={styles.bottom}
              source={require('./assets/images/riwayat.svg')}
              />
              <Text style={styles.textStyle}>Riwayat Pemesanan</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
  logo: {
    width: 127,
    height: 35,
    margin: 'auto',
    marginBottom: 40, 
  },
  boticon: {
    width: 'calc(100%/4)',
  },
  konten: {
    fontSize: '16px',
    color: '#9D9D9D',
  },
  cardkonten: {
    borderRadius: 5,
    width: 'calc(100% - 50px)',
    backgroundColor: '#EFF4F4',
    padding: '10px',
    display: 'inline-block',
  },
  isikonten: {
    fontSize: '12px',
    color: '#000000',
  },
  ctnrow: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logokonten: {
    width: 34,
    height: 28,
  },
  logokonten1: {
    width: 27,
    height: 30,
  },
  wrapkonten: {
    width: 34,
    display: 'inline-block',
  },
  boxage: {
    borderRadius: 5,
    marginTop: 10,
    padding: '10px',
    backgroundColor: '#EFF4F4',
    flexDirection: 'row',
    marginBottom: 10,
  },
  isiboxage: {
    fontSize: '16px',
    color: '#000000',
  },
  boxbuat: {
    borderRadius: 5,
    marginTop: 10,
    padding: '10px',
    alignItems: "center",
    backgroundColor: '#EE9E54',
    marginBottom: 10,
  },
  isiboxbuat: {
    fontSize: '16px',
    color: '#ffffff',
  },
  centeredView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontSize: '16px',
    color: '#EE9E54',
    marginBottom: '5px',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: 'calc(100% - 56px)',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: "#EFF4F4",
  },
  buttonClose: {
    backgroundColor: "#EFF4F4",
    marginBottom: '5px',
  },
  textStyle: {
    color: "#000",
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
  }
});
