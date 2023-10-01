import { ActivityIndicator, Image, ImageBackground, SafeAreaView,Text ,View } from "react-native";
import LogoPlusName from "./LogoPluseName";


export default function Welcome({styles}){

    return <>
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <LogoPlusName text="few second wait" activity='true' />

    </SafeAreaView>
    </>
}