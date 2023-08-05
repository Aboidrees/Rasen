import { Dimensions, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Card } from "../BookmarksScreen";
import ModalLayout from "../../../components/ModalLayout";

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) * 0.35; // Adjust the percentage as needed (e.g., 80% of screen width)

export default function SelectBookmarksCollections({
  open,
  onClose,
  onSuccess,
}) {
  const [selectedCollection, setSelectedCollection] = useState();
  return (
    <ModalLayout
      title={"Select Collection"}
      show={open}
      onClose={() => onClose(false)}
      btnText="Save"
      btnAction={() => {
        // if process is succeeded return true to upper layer
        onSuccess(true);
      }}
    >
      <FlatList
        style={{ backgroundColor: "white", maxHeight: 600 }}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelectedCollection(item)}>
            <Card
              title="Card Title"
              articleCount={5}
              cardWidth={cardWidth}
              selected={selectedCollection === item}
            />
          </Pressable>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(collection, index) => collection}
      />
    </ModalLayout>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-end",
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  collectionsContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 20,
    gap: 5,
  },

  newCollectionBtn: {
    flexGrow: 1,
    borderRadius: 18,
    backgroundColor: "#000",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtn: {
    flexGrow: 3,
    borderRadius: 18,
    backgroundColor: "#D5BDAF",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
  },
});
