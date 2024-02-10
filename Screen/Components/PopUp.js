import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const PopupComponent = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text style={styles.popupMainTxt}>
            Uspješno ste se evidentirali na Grid računalni sustavi, auditorne vježbe
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 40,
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 10,
    backgroundColor: '#005CB2',
  },
  popupMainTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20, 
    padding: 12,
    paddingLeft: 60,
    paddingRight: 60,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#005CB2',
    fontSize: 20,
  },
});

export default PopupComponent;
