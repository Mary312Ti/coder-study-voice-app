import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { baseStyle } from "../../styles/baseStyle.js";

export default function WarningModal({ isVisible, onClose }) {
  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.text}>
            Выбрано максимальное количество тегов (3 тега)!
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>ОК</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: baseStyle.primary.backgroundColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
