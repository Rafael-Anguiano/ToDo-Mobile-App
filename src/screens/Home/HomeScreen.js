import React, { useEffect, useReducer, useState } from "react";
import { Text, View, Pressable, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Components
import Instance from "../../components/Instance";
import ModalTask from '../../components/ModalTask';
import taskReducer from "../../hooks/taskReducer";
import styles from './StylesHome'


// const init = async() => {
//     const jsonValue = await AsyncStorage.getItem('data')
//     console.log(jsonValue, 'Este es el valor del JSON');
//     console.log(JSON.parse(jsonValue))
//     // AsyncStorage.setItem('data', jsonValue)
//     return jsonValue ? JSON.parse(jsonValue): [];
// }

const HomeScreen = () => {

    const [data, dispatch] = useReducer(taskReducer, []/* , init */);
    const [modalVisible, setModalVisible] = useState(false);

    // useEffect( () => {
    //     console.log('Ejecutando Effect');
    //     const jsonValue = JSON.stringify(data)
    //     AsyncStorage.setItem('data', jsonValue)
    // }, [data])

    // AsyncStorage.clear()

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId,
        }
        dispatch(action)
    }
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action)
    }

    const handleAddTask = (newTask) => {
        dispatch({
            type:'add',
            payload: newTask
        })
    }

    const renderItem = ({ item }) => (
        <Instance 
            id={item.id} 
            title={item.title} 
            date={item.date} 
            time={item.time} 
            done={item.done} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
        />
    );

    return(
        <View style={styles.view}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{width: '90%'}}
            />
            
            { !modalVisible && <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Agregar Tarea</Text>
                </Pressable> 
            }
            {  modalVisible && <ModalTask 
                    setModalVisible={setModalVisible} 
                    modalVisible={modalVisible} 
                    handleAddTask={handleAddTask}
                />
            }
        </View>
    )
}

export default HomeScreen;