import {Alert, Dimensions, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, {useState} from "react";
import {Card} from "../BookmarksScreen";

const {width} = Dimensions.get('window');
const cardWidth = (width - 50) * 0.35; // Adjust the percentage as needed (e.g., 80% of screen width)

export default function BookmarksCollectionsModal() {
    const [modalVisible, setModalVisible] = useState(true);
    return (<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}

        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <MaterialCommunityIcons
                    name={"close"} size={22}
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                />
                <Text style={styles.titleText}> Select Collection </Text>

                <FlatList
                    style={{backgroundColor: "white", height: 200}}
                    contentContainerStyle={{alignItems: "center"}}
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={({item}) => <Card title="Card Title" articleCount={5} cardWidth={cardWidth}/>}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(collection, index) => collection}
                />

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.newCollectionBtn}>
                        <Text style={styles.btnText}>New Collection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveBtn} onPress={() => Alert.prompt('Modal has been closed.')}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>);
}

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: "flex-end"
    }, titleText: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        marginVertical: 20,
    }, centeredView: {
        flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22,
    }, collectionsContainer: {
        justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", gap: 15,
    }, modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }, buttonsContainer: {
        flexDirection: 'row', paddingTop: 20, gap: 5,
    },

    newCollectionBtn: {
        flexGrow: 1,
        borderRadius: 18,
        backgroundColor: "#000",
        height: 55,
        justifyContent: "center",
        alignItems: 'center'
    }, saveBtn: {
        flexGrow: 3,
        borderRadius: 18,
        backgroundColor: "#D5BDAF",
        height: 55,
        justifyContent: "center",
        alignItems: 'center'

    }, btnText: {
        color: "#FFF"
    }
});
