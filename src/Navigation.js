import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import Add from './screens/Add';
import Confirm from './screens/Confirm';
import ConfirmRegister from './screens/ConfirmRegister';
import MenuStudent from './screens/MenuStudent';
import AddSE from "./screens/AddSE";
import AddStudent from "./screens/AddStudent";
import DetalleSalida from './screens/DetalleSalida';
import InfoSalida from "./components/InfoSalida";
import Aprobado from './screens/Aprobado';
import Rechazado from "./screens/Rechazado";
import Login13 from "./screens/Login";
const Stack = createNativeStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login13" component={Login13} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Home" component={Home} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Add" component={Add} options={{presentation: 'modal'}}/>
            <Stack.Screen name="AddStudent" component={AddStudent} options={{presentation: 'modal'}}/>
            <Stack.Screen name="AddSE" component={AddSE} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Confirm" component={Confirm} options={{presentation: 'modal'}}/>
            <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} options={{presentation: 'modal'}}/>
            <Stack.Screen name="MenuStudent" component={MenuStudent} options={{presentation: 'modal'}}/>
            <Stack.Screen name="DetalleSalida" component={DetalleSalida} options={{presentation: 'modal'}}/>
            <Stack.Screen name="InfoSalida" component={InfoSalida} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Aprobado" component={Aprobado} options={{presentation: 'modal'}}/>
            <Stack.Screen name="Rechazado" component={Rechazado} options={{presentation: 'modal'}}/>
            
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}