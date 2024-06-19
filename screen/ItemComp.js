import { View, Text, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemComp = ({ item,index }) => {
    const navigation = useNavigation()

    const heavyComputation = (item) => {
        const startTime = Date.now();
        const result = Array.from({ length: 1000000 }, () => item.userId * Math.random()).reduce((acc, val) => acc + val, 0);
        const endTime = Date.now();
        console.log(`Heavy computation for item ${item.id} took ${endTime - startTime}ms`);
        return result.toFixed(2);
    };
    const computedDetails = useMemo(() => heavyComputation(item), [item]);

    return (
        <Pressable key={index} onPress={()=>{navigation.navigate('DetailPage',{"id":item.id})}} style={{ padding: 24, borderWidth: 1, borderRadius: 10, borderColor: "#d7d7d7", backgroundColor: "#fff", marginTop: 10, elevation: 3 }}>
            <Text style={{ color: "#000" }}>ID {item.id}</Text>

            <Text numberOfLines={1} style={{ fontWeight: 500 }}>{item.title}</Text>
            <Text>computation: {computedDetails}</Text>
        </Pressable>
    )
}

export default ItemComp