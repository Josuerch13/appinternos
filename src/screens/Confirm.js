import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../config/fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Product from '../components/Product';
import {Image} from 'react-native' ; 

export default function Confirm() {

    const navigation = useNavigation();
    const backMenu = async () => {
        navigation.navigate('MenuStudent');
    }
    return(
        <RN.View style={styles.container}>
            <Image  style={styles.check} source={require('../icons/confirmar.png')} />
            <RN.Text style={styles.title2}>Tu solicitud fue enviada con exito!</RN.Text>
        <RN.TouchableOpacity 
            onPress={backMenu}
            style={styles.button}>
            <RN.Text style={styles.buttonText}>Regresar al Menu Principal</RN.Text>
        </RN.TouchableOpacity>
        </RN.View>
    )

}
const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',
        justifyContent: 'center',
    alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
   },
   buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
},
check: {
    width: 200,
    height: 200,
    
},
title2: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
},
});