import { Text,View,SafeAreaView, TouchableOpacity,StyleSheet} from "react-native";

export default function Home() {
    return(
        <SafeAreaView>
            <TouchableOpacity>
            <View style={styles.logo}>
                   <Text>helo</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.addItem}>
                   <Text>helo</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.updateItem}>
                   <Text>helo</Text>
            </View>
            </TouchableOpacity>
        </SafeAreaView>
    );

    
}
const styles = StyleSheet.create({
    logo:{
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:'blue',
        width:100,
        height:33
    },
    addItem:{
        flex:1,
        justifyContent:"center",
        backgroundColor:'black',
        width:50,
        height:30,
    },
    updateItem:{
        flex:1,
        justifyContent:"center",
        backgroundColor:'white',
        width:100,
        height:32,
    },
   
});