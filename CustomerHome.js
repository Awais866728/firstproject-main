import items from './Api';
import Swiper from 'react-native-swiper';

import { SafeAreaView,ImageBackground,Image, View,Text,TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Productinfo from './Productinfo';
import AllProductView from './AllProductView';
import { createStackNavigator } from '@react-navigation/stack';

export default  function CustomerHome ({styles}){

const BtnAndText=({text,btntext})=>{
  return  <View style={{flex:.1, justifyContent:'space-between', flexDirection:'row'}}>
     <Text style={{fontSize:24,fontWeight:800}}>{text} </Text>
     <TouchableOpacity onPress={() => navigation.navigate('AllProductView')}
>
      <Text style={{height: 30,color:'#ab0000',textDecorationLine: 'underline'}}>{btntext}</Text> 
      </TouchableOpacity> 
    </View>

  
}
  
const SearchBar = ({ placeholder, onSearch }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={{flex:.4 ,justifyContent:'center',backgroundColor:'blue',paddingHorizontal:10,paddingVertical:10,marginBottom:18}}>
      <TextInput
        style={{backgroundColor: '#fff',borderRadius: 8, paddingHorizontal: 15,paddingVertical: 15,}}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};


    return <>
   
    <SafeAreaView style={{flex:1,justifyContent:'flex-start',flexDirection:'column'}}>
      
      <SearchBar placeholder={'searchbar'} onSearch={()=>{}} />
    

      <View style={{flex:1,justifyContent:'center'}}>
      <BtnAndText text={'Best Seller'} btntext={'view all'} />
      <Swiper autoplay={true} autoplayTimeout={3} horizontal={true} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
          
        <ProductCard item={items[0]}/>
        <ProductCard item={items[1]}/>
        <ProductCard item={items[2]}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,flexDirection:'row' }}>
        <ProductCard item={items[3]}/>
        <ProductCard item={items[4]}/>
        <ProductCard item={items[5]}/>
        
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
          <ProductCard item={items[6]}/>
          <ProductCard item={items[7]}/>
          <ProductCard item={items[8]}/>
  
        </View>
      </Swiper>
      </View>

 

    <BtnAndText text={'New Arrival'} btntext={'view all'} />    
  
    <Productinfo imageUri={items[0].images[0]} name={items[0].name} price={items[0].price} category={items[0].categories[0]}  />
    <Productinfo imageUri={items[1].images[1]} name={items[1].name} price={items[1].price} category={items[1].categories[0]}  />
    
  


    </SafeAreaView>

    
        </>

        

}