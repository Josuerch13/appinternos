import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../config/fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import InfoSalida from '../components/InfoSalida';

export default function DetalleSalida() {

    const [salidas, setSalidas] = React.useState([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.TouchableOpacity  style={styles.button}
             title='Agregar Interno' onPress={() => navigation.navigate('AddStudent')}>
             <RN.Text style={styles.buttonText}>Agregar Interno</RN.Text></RN.TouchableOpacity>
        })
    },[navigation])

    React.useEffect(() => {
        const collectionRef = collection(database, 'salidas');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        //console.log('querySnapshot unsusbscribe');
          setSalidas(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                hour: doc.data().hour,
                authorize: doc.data().authorize,
                createdAt: doc.data().createdAt,
            }))
          );
        });
    return unsubscribe;
    },[])

    return(
        <RN.View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <RN.Text style={styles.title}>Solicitud Pendientes</RN.Text>
                {salidas.map(InfoSalida => <InfoSalida key={InfoSalida.id} {...InfoSalida} />)}
            </RN.ScrollView>
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
});