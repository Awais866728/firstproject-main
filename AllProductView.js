import { View,FlatList,Text,TextInput } from "react-native"
import items from "./Api"
import ProductCard from "./ProductCard"



export default function AllProductView({}) {
 return  (
    <>
 <FlatList
      data={items}
      keyExtractor={(item) => item.id} // Provide a unique key for each item
   
      renderItem={({ item }) => (
       <ProductCard item={item} />
      )}
    />
    </>)
}