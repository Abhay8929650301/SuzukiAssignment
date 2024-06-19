import { View, Text, StatusBar, FlatList, ActivityIndicator, Pressable, Alert, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemComp from './ItemComp'
import CounterComp from './CounterComp'

const ParentScreen = () => {

    useEffect(() => {
        GetList('1')

    }, [])

    const [list, setList] = useState([])

    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)


    const GetList = async (page) => {
        setLoading(true);
        const url = 'https://jsonplaceholder.typicode.com/posts?_page=' + page + '&_limit=10'
        const response = await fetch(url);
        const json = await response.json()
        console.log(json)
        setPage(json[0].userId)
        setList([...list, ...json])
        setLoading(false);
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
            <StatusBar backgroundColor={"#f0f0f0"} barStyle={'dark-content'}></StatusBar>
            <View style={{ flex: 1, backgroundColor: "#f0f0f0", padding: 15 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>


                        <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}>List</Text>
                    </View>
                    <View>
                        <CounterComp></CounterComp>
                    </View>

                </View>

                <View style={{ marginBottom: 20, marginTop: 10 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={list}
                        onEndReached={() => {
                            if (page < 10) {
                                GetList(page + 1)
                            }
                        }}
                        keyExtractor={item => item.id}
                        ListFooterComponent={() => {

                            return page < 10 ?
                                <View style={{ alignItems: "center", marginBottom: 20, marginTop: 10 }}>
                                    <ActivityIndicator color={'#000'}></ActivityIndicator>
                                </View> : ""

                        }}
                        renderItem={({ item, index }) => {

                            return (
                                <ItemComp index={index} item={item}></ItemComp>
                            )
                        }}
                    >


                    </FlatList>
                </View>


            </View>
           
        </View>
    )
}

export default ParentScreen