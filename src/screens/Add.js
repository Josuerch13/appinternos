import * as React from 'react';
import * as RN from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../config/fb';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Touchable } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Add() {
    const navigation = useNavigation();
    
    const [isOpen, setIsOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState({
        name: '',
        hour: 0,
        authorize: false,
        createdAt: new Date(),
        fechaSalida: '',
        fechaRetorno: '',
        horaSalida:'',
        horaRetorno:'',
    });

    const onSend = async () => {
        console.log(database);
        console.log("nuevo item",newItem);
        const docRef = await addDoc(collection(database, 'salidas'), newItem);
        console.log("docref: ",docRef);
        navigation.navigate('Confirm');
      }
      const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleConfirm = (date) => {
        console.warn("fecha seleccionada: ", date);
        hideDatePicker();
      };
      const handleConfirm2 = (date) => {
        console.warn("fecha seleccionada: ", date);
        hideDatePicker();
      };
      const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
      const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
      const handleConfirmTime = (Time) => {
        console.warn("Hora Seleccionada: ", Time);
        hideTimePicker();
      };
      const handleConfirmTime2 = (Time) => {
        console.warn("Hora Seleccionada: ", Time);
        hideTimePicker();
      };
    return(
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Solicitar Salida Diaria</RN.Text>
                <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, name: text})}
                    style={styles.inputContainer} 
                    placeholder='Nombre' 
                />
                <RN.Text style={styles.TextTitle}>A que Hora Saldras?</RN.Text>
      <RN.TouchableOpacity  style={styles.button}
                title="Seleccionar Hora de Salida" onPress={showTimePicker} > 
                <RN.Text style={styles.buttonText}>Seleccionar Hora de Salida</RN.Text>
                </RN.TouchableOpacity> 
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={(handleConfirmTime) =>setNewItem({...newItem, horaSalida: handleConfirmTime})} 
        onCancel={hideTimePicker}
      />
      <RN.Text style={styles.TextTitle}>A que Hora Regresaras?</RN.Text>
      <RN.TouchableOpacity  style={styles.button}
                title="Seleccionar Hora de Retorno" onPress={showTimePicker} > 
                <RN.Text style={styles.buttonText}>Seleccionar Hora de Retorno</RN.Text>
                </RN.TouchableOpacity> 
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={(handleConfirmTime2) =>setNewItem({...newItem, horaRetorno: handleConfirmTime2})} 
        onCancel={hideTimePicker}
      />
      <RN.Text style={styles.TextTitle}>Describe brevemente el motivo de tu salida:</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, hour: text})}
              style={styles.inputContainer} 
              placeholder='Por que vas a salir?' 
          />
            <RN.TouchableOpacity style={styles.button} title='Enviar Solicitud' onPress={onSend}>
            <RN.Text style={styles.buttonText}>Enviar Solicitud</RN.Text>
            </RN.TouchableOpacity> 
      
        </RN.View>
    )
}
const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
      },
      button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
   },
   buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
},
TextTile: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '000000',
},
});