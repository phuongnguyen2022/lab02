import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../Style"

export default LoginScreen =()=>{
    return(
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style = {styles.input} placeholder="Phone"/>
                <TextInput style = {styles.input} placeholder="Password" secureTextEntry/>
                <TouchableOpacity style= {styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};