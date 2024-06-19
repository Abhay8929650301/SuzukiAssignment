import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-native-feather'

const DetailPage = ({ route,navigation }) => {

    useEffect(() => {
        GetList()
    }, [])
    const { id } = route.params;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)


    const GetList = async () => {
        setLoading(true);
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id
        const response = await fetch(url);
        const json = await response.json()
        console.log(json)
        setData(json)
        setLoading(false);

    }
    return (
        <View style={{ flex: 1 }}>
            {
                loading ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={'#216fdf'}></ActivityIndicator>
                </View> :
                    <View style={{margin:15}}>
                        <View style={{flexDirection:'row',alignItems:'center',gap:30,elevation:4}}>

                            <Pressable onPress={()=>{navigation.goBack()}} style={{}}>
                             <ArrowLeft color={'#333'}></ArrowLeft>
                            </Pressable>
                            <Text style={{color:"#333",fontSize:20}}>Detail page</Text>
                        </View>
                       {data==null?<Text>No data found</Text> : <View style={{padding:15,backgroundColor:"#fff",marginTop:20}}>
                           
                           <Text style={{fontWeight:'bold'}}>Id {data.id}</Text>
                           <Text style={{color:"#000",fontSize:16,marginVertical:10}}>{data.title}</Text>
                           <Text>{data.body}</Text>
                            </View>}
                    </View>
            }
        </View>
    )
}

export default DetailPage