import React, { useState } from 'react';  // Impor useState
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native'; 
import Axios from 'axios'

const Item = () => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:'https://i.pinimg.com/736x/9f/65/58/9f6558e8577b152aea517a09b748567c.jpg'}} style={styles.avatar}/>
            <View style={styles.decs}>
                <Text style={styles.decsName}>Nama Lengkap</Text>
                <Text style={styles.decsEmail}>Email</Text>
                <Text style={styles.decsBidang}>Bidang</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    const [Nama, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Bidang, setBidang] = useState("");

    const submit = () => {
        const data = {
            Nama,
            Email,
            Bidang,
        }
    console.log('data before send: ', data);
    Axios.post('http://localhost:3000/users', data)
    .then(res => {
        console.log('res: ', res);
    })
}
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON Server)</Text>
            <Text>Masukan Anggota LingheYu</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={Nama} onChangeText={(value) => setName(value)} />
            <TextInput placeholder="Email" style={styles.input} value={Email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder="Bidang" style={styles.input} value={Bidang} onChangeText={(value) => setBidang(value)} />
            <View style={styles.buttonContainer}>
                <Button title="Simpan" onPress={submit} />
            </View>
            <View style={styles.line} />
            <Item />
            <Item />
            <Item />
        </View>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white', 
    },
    textTitle: {textAlign: 'center', marginBottom: 10},
    line: {height: 1, backgroundColor: 'black', marginVertical: 20, marginBottom: 15},
    input: {borderWidth: 1, marginBottom: 5, borderRadius: 10, paddingHorizontal: 10, fontSize: 15, marginTop: 8, 
        height: 40 },
    avatar: {width: 70, height: 70, borderRadius: 70, marginBottom: 10},
    itemContainer: {
        flexDirection: 'row',
    },
    decs: {marginLeft: 30, flex: 1},
    decsName: {fontSize: 18, fontWeight: 'bold'},
    decsEmail: {fontSize: 16},
    decsBidang: {fontSize: 13, marginTop: 5},
    buttonContainer: {
        marginTop: 10,  // jarak di atas tombol "Simpan"
    },
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red'}
})
