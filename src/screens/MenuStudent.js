import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../config/fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Product from '../components/Product';
import {Image} from 'react-native' ; 

export default function MenuStudent() {

    const navigation = useNavigation();
    const salida = async () => {
        navigation.navigate('Add');
    }
    const salidaExtra = async () => {
        navigation.navigate('AddSE');
    }
    return(
        <RN.View style={styles.container}>
            <RN.Text style={styles.title2}>Bienvenido Interno</RN.Text>
        <RN.TouchableOpacity 
            onPress={salida}
            style={styles.button}>
            <RN.Text style={styles.buttonText}>Solicitar Salida Estandar</RN.Text>
        </RN.TouchableOpacity>

        <RN.TouchableOpacity 
            onPress={salidaExtra}
            style={styles.button}>
            <RN.Text style={styles.buttonText}>Solicitar Salida de Fin de Semana</RN.Text>
        </RN.TouchableOpacity>
        </RN.View>
    )

}
const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',

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