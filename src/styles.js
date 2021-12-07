import { StyleSheet } from 'react-native';
import { marginBottom } from 'styled-system';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#bdecff',
    },
    datetime: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        marginHorizontal: 5,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonCancel: {
        backgroundColor: "#B6406B",
    },
    buttonGround: {
        display:'flex',  
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'space-around',
        marginTop: 0,
        marginBottom: 12
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center",
        marginBottom: 5,
        margin: 12,
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
    },
});

export default styles