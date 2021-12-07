import React from 'react'
import styles from '../screens/Home/StylesHome'
import { Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Instance = ({title, date, time, id, done, handleDelete, handleToggle}) => {

    return (
        <View style={styles.task} >
            <Pressable onPress={() => handleToggle(id)}>
                <Ionicons size={25} name={done? 'checkbox' : 'square-outline'} color='#B6406B'/>
            </Pressable>
            <View>
                <Text style={done ? styles.completeTitle : styles.highlight}>{title}</Text>
                <Text style={styles.date}>{`Para el Día: ${date}    Hora: ${time}`}</Text>
            </View>
            <Pressable onPress={() => handleDelete(id)}>
                <Ionicons size={25} name='trash' color='#000280'/>
            </Pressable>
            
        </View> 
    )
}

export default Instance
