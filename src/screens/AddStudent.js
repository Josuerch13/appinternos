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
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        genero: '',
        fechaNacimiento: '',
        edad: '',
        carrera: '',
        semestre: '',
        correo: '',
        contrasenia: '',
        telefono: '',
    });

    const onSend = async () => {
        console.log(database);
        console.log("nuevo item",newItem);
        const docRef = await addDoc(collection(database, 'internos'), newItem);
        console.log("docref: ",docRef);
        navigation.navigate('ConfirmRegister');
      }
    return(
        <RN.ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Agregar Interno</RN.Text>
            <RN.Text style={styles.TextTitle}>Ingrese los Nombres:</RN.Text>
                <RN.TextInput 
                    onChangeText={(text) => setNewItem({...newItem, nombres: text})}
                    style={styles.inputContainer} 
                    placeholder='Nombres' 
                />
                
      <RN.Text style={styles.TextTitle}>Ingrese el Apellido Paterno</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, apellidoPaterno: text})}
              style={styles.inputContainer} 
              placeholder='Apellido Paterno' 
          />
        <RN.Text style={styles.TextTitle}>Ingrese el Apellido Materno</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, apellidoMaterno: text})}
              style={styles.inputContainer} 
              placeholder='Apellido Materno' 
          />
          <RN.Text style={styles.TextTitle}>Ingrese el Genero</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, genero: text})}
              style={styles.inputContainer} 
              placeholder='Genero' 
          />
          <RN.Text style={styles.TextTitle}>Indique la fecha de Nacimiento</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, fechaNacimiento: text})}
              style={styles.inputContainer} 
              placeholder='Fecha de Nacimiento' 
          />
          <RN.Text style={styles.TextTitle}>Ingrese la edad</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, edad: text})}
              style={styles.inputContainer} 
              placeholder='Edad' 
          />
          <RN.Text style={styles.TextTitle}>Ingrese la Carrera</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, carrera: text})}
              style={styles.inputContainer} 
              placeholder='Carrera' 
          />
          <RN.Text style={styles.TextTitle}>Seleccione un semestre</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, semestre: text})}
              style={styles.inputContainer} 
              placeholder='Semestre' 
          />
          <RN.Text style={styles.TextTitle}>Indique el Correo</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, correo: text})}
              style={styles.inputContainer} 
              placeholder='Ingrese el Correo' 
          />
          <RN.Text style={styles.TextTitle}>Ingrese la contraseña:</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, contrasenia: text})}
              style={styles.inputContainer} 
              placeholder='Ingrese la contraseña' 
          />
            <RN.Text style={styles.TextTitle}>Ingrese el numero de telefono:</RN.Text>
      <RN.TextInput 
              onChangeText={(text) => setNewItem({...newItem, telefono: text})}
              style={styles.inputContainer} 
              placeholder='Telefono' 
          />
            <RN.TouchableOpacity style={styles.button} title='Registrar Estudiante' onPress={onSend}>
            <RN.Text style={styles.buttonText}>Registrar</RN.Text>
            </RN.TouchableOpacity> 
        </RN.View>
        </RN.ScrollView>
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