import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CloseCircle } from 'iconsax-react-native';

export default function HeaderMenu({onClosePress}) {
    const insets = useSafeAreaInsets();
    const foto = require('../../../assets/foto.png');


    return (
        <>
        <View style={styles.container}>
        <SafeAreaView style={[styles.header, { paddingTop: insets.top - 105, marginRight: 33 }]}>
            <View style={styles.infoName}>
                <Image source={foto} style={styles.foto} />
                <View>
                    <Text style={styles.nome}>Luís Alexandre</Text>
                    <Text style={styles.funcao}>UI/UX Designer</Text>
                </View>
            </View>       
        </SafeAreaView>
        <TouchableOpacity onPress={onClosePress}>
                <CloseCircle style={styles.close}></CloseCircle>
            </TouchableOpacity>
        </View>
        </>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 75,
        borderEndEndRadius: 75,
        paddingBottom: 10,
        width: "78%",
    },
    infoName: {
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        paddingLeft: 30,
        marginTop: 20,
        paddingTop: 20,
        marginBottom: 0,
        paddingBottom: 0
    },
    foto: {
        marginRight: 20,
        paddingTop: 30,
        width: 60,  // Ajuste o tamanho da imagem conforme necessário
        height: 60, // Ajuste o tamanho da imagem conforme necessário
        borderRadius: 30, // Deixa a imagem redonda
    },
    nome: {
        fontSize: 18,  // Ajuste o tamanho da fonte conforme necessário
        fontWeight: 'bold', // Negrito
        paddingBottom: 2
    },
    funcao: {
        fontSize: 16,  // Ajuste o tamanho da fonte conforme necessário
    },
    container:{
       flexDirection: "row",
       alignItems: "center",
    },
    close:{
        color: "black"
    }
});
