import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export default function ModalLayout({
  show,
  onClose,
  children,
  title = "",
  btnText = "",
  btnAction,
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <MaterialCommunityIcons
            onPress={onClose}
            name={"close"}
            size={22}
            style={styles.closeButton}
          />

          <Text style={styles.titleText}> {title} </Text>
          <View style={{ flexGrow: 1 }}>{children}</View>

          {btnText && (
            <TouchableOpacity style={styles.saveBtn} onPress={btnAction}>
              <Text style={styles.btnText}>{btnText ? btnText : "OK"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    end: 25,
    top: 25,
  },
  titleText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    marginVertical: 20,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#00000080",
    justifyContent: "center",
  },

  modalView: {
    flexDirection: "column",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    padding: 20,
    borderRadius: 40,
    minHeight: 300,
    overflow: "hidden",
  },

  saveBtn: {
    borderRadius: 20,
    backgroundColor: "#D5BDAF",
    paddingVertical: 20,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
  },
});
