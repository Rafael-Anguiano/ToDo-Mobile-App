import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "../../styles";
import data from '../data'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarScreen = () => {

  return (
    <View /* style={styles.view} */>
        <CalendarList
            horizontal={false}
            pagingEnabled={false}
            calendarWidth={320}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            // ...calendarParams
            markingType={'period'}
            markedDates={{
                '2021-11-15': {marked: true, dotColor: '#50cebb'},
                '2021-11-16': {marked: true, dotColor: '#50cebb'},
                '2021-11-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                '2021-11-22': {color: '#70d7c7', textColor: 'white'},
                '2021-11-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                '2021-11-24': {color: '#70d7c7', textColor: 'white'},
                '2021-11-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
            }}
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'black',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
            }}
        />
    </View>
  );
};

export default CalendarScreen;

