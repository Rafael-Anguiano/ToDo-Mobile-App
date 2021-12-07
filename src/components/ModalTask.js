import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "../styles";
// import data from '../screens/data'
const ModalTask = ({modalVisible, setModalVisible, handleAddTask}) => {
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [completed, setCompleted] = useState(false)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    //Show and Hide DatePicker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDateConfirm = (date) => {
        setDate(date.toLocaleDateString("en-GB"))
        hideDatePicker();
    };
    //Show and Hide Time picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const handleTimeConfirm = (time) => {
        setTime(time.toLocaleTimeString('en-US'))
        hideTimePicker();
    };

    // Saveing Form
    const handleSave = () => {
        if(
            title.trim().length >= 2 
            && date && time
        ){
            handleAddTask({
                id: new Date().getTime(),
                title: title,
                date: date,
                time: time,
                done: false
            })
            setModalVisible(!modalVisible);
            setTitle('');
            setDate();
            setTime();
        }else{
            if(!completed){
                setCompleted(true)
            }
        }
    }

  return (
    <View style={styles.view}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>NUEVA TAREA</Text>
                    <Text style={styles.modalText}>Titulo de la Tarea:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Tarea de Matemáticas"
                    />
                    <Text style={styles.modalText}>Para: </Text>
                    <View  style={styles.buttonGround}>
                        <Pressable
                            style={[styles.button, styles.datetime]}
                            onPress={showDatePicker}
                        >
                            <Text style={styles.textdate}>{date ? `${date}` : 'Fecha'}</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.datetime]}
                            onPress={showTimePicker}
                        >
                            <Text style={styles.textdate}>{time ? `${time}` : 'Hora'}</Text>
                        </Pressable>
                    </View>

                    <View  style={styles.buttonGround}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleSave}
                        >
                            <Text style={styles.textStyle}>Guardar</Text>
                        </Pressable>
                    </View>
                    {
                        completed ?
                            <Text style={{color:'red'}}>Aún hay campos vacios</Text>
                            :
                            null
                    }
                </View>
            </View>
        </Modal>
        <DateTimePickerModal
            mode="date"
            isVisible={isDatePickerVisible}
            locale="en-GB"
            onCancel={hideDatePicker}
            onConfirm={handleDateConfirm}
        />
        <DateTimePickerModal
            mode="time"
            onCancel={hideTimePicker}
            onConfirm={handleTimeConfirm}
            isVisible={isTimePickerVisible}
        />
    </View>
  );
};

export default ModalTask;

