import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Minus, Plus } from 'react-native-feather'

const CounterComp = () => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10 ,padding:5,gap:10}}>
                <Pressable style={{backgroundColor:"#216fdf",borderRadius:5}} onPress={() => {
                    if (count == 0) {

                    }
                    else {
                        setCount(count - 1)
                    }
                }}>
                    <Minus color={'#fff'}></Minus>
                </Pressable>
                <View style={{minWidth:15}}>
                    <Text style={{textAlign:'center'}}>{count}</Text>
                </View>
                <Pressable style={{backgroundColor:"#216fdf",borderRadius:5}} onPress={() => {

                    setCount(count + 1)

                }}>
                    <Plus color={'#fff'}></Plus>
                </Pressable>

            </View>
        </View>
    )
}

export default CounterComp