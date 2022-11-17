import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../../config/fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons'; 
//import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';


export default function Product({
    id,
    name,
    hour,
    authorize,
}) {

    const onDelete = () => {
        const docRef = doc(database, 'salidas', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(database, 'salidas', id);
        updateDoc(docRef, {
            authorize: true,
        });
    }
    const onEdit2 = () => {
        const docRef = doc(database, 'salidas', id);
        updateDoc(docRef, {
            authorize: false,
        });
    }
    const navigation = useNavigation();
    const detalleSalida = async () => {
        navigation.navigate('DetalleSalida');
    }
    return(
        
        <RN.View>
            <RN.View style={styles.productContainer}>
                { <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/* <AntDesign onPress={onDelete} name="delete" size={24} color="black" /> */}
                </RN.View> }
                {/* <DatePicker date={date} onDateChange={setDate} /> */}
                <RN.Text style={styles.name}>{name}</RN.Text>
                <RN.TouchableOpacity 
                    onPress={detalleSalida}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Ver</RN.Text>
                </RN.TouchableOpacity>
                {/* <RN.Text style={styles.hour}>{hour}</RN.Text> */}
                
                {/* {authorize ? (
                    <RN.TouchableOpacity 
                    style={[styles.button, {backgroundColor: 'gray'}]}>
                    <RN.Text style={styles.buttonText}>Denied</RN.Text>
                </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity 
                    onPress={onEdit}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Authorize</RN.Text>
                </RN.TouchableOpacity>
                )}
                {authorize ? (
                    <RN.TouchableOpacity 
                    onPress={onEdit2}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Denied</RN.Text>
                </RN.TouchableOpacity>
                ) 
                : (
                    <RN.TouchableOpacity 
                    onPress={onEdit2}
                    style={styles.button}>
                    <RN.Text style={styles.buttonText}>Authorize</RN.Text>
                </RN.TouchableOpacity>
                )} */}
            </RN.View>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    hour: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 100,
        alignItems: 'center',

   },
   button2: {
    backgroundColor: '#0FA5E9',
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',

},
contenedorPrueba:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",   
},
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});