import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: { 
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      backgroundColor: '#bdecff',
      paddingTop:20,
      paddingBottom: 15
    },
    highlight: {
      color:'black',
      fontWeight: '700',
    },
    completeTitle: {
      color:'black',
      fontWeight: '700',
      textDecorationLine: 'line-through',
    },
    task: {
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 7,
      marginBottom:7,
      padding: 20,
      width: '95%',
      // width: '90%',
    },
    button: {
      borderRadius: 15,
      padding: 10,
      elevation: 2,
      marginHorizontal: 5,
      marginTop:15
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },  
    scrollview: {
      width: '100%',
      height: '100%'
      // flexDirection: 'column',
      // alignItems: 'center'
    }
});

export default styles