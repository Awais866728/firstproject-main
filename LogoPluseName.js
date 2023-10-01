import { ActivityIndicator, Image,Text } from 'react-native'

function LogoPlusName({text,activity}){
    return <>

    {
        activity=='true' ? <>
                <Image source={require('./images/logo.png')} style={{width:'100%',height:'10%' ,alignSelf:'center',marginBottom:10} } /> 
            <Text style={{fontSize:40,alignSelf:'center',margin:25}}> {text} </Text>

                <ActivityIndicator size={'large'} color={'black'}  />
        
        </> : <>
            <Image source={require('./images/logo.png')} style={{width:'100%',height:'10%' ,alignSelf:'center',marginBottom:20} } /> 
            <Text style={{fontSize:40,alignSelf:'center',margin:12}}> {text} </Text>
        </>
        
        
    }
       
    </>
  }

  export default LogoPlusName