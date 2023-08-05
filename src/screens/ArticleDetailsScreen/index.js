import React from 'react';
import {
    ImageBackground, Keyboard, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';
import * as CustomIcons from '../../components/CustomIcons';
import Comment from './components/comment';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const keywords = ['travel', 'horse', 'bath', 'feeding', 'UAE', 'tourism'];
const comments = [{
    username: 'Milendra',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    datetime: '2 min ago',
    replies: '1 Reply',
}, {
    username: 'Anderson',
    content: 'sed do eiusmod tempor incididunt ut labore et dolore magna',
    datetime: '10 min ago',
    replies: '0 Reply',
},];

export default function ArticleDetailsScreen({navigation}) {
    return (<ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false} head>


        <ImageBackground
            source={require('../../assets/images/horse2.png')}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}>
            <View
                style={styles.articleMetaContainer}>
                <View style={{flexDirection: 'column', gap: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <View style={styles.metaInfoBg}><Text style={styles.metaInfo}>Travel</Text></View>
                        <Text style={styles.metaInfo}>10 min read</Text>
                        <Text style={styles.metaInfo}>5 hours</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            Lorem ipsum dolor sitcons ectetur adipiscing elit
                        </Text>
                    </View>
                    <View style={styles.horizontalCentered}>
                        <View style={styles.horizontalCentered}>
                            <CustomIcons.Eye color="#E9E9F0" size={24}/>
                            <Text style={styles.viewsAndLikes}>2500</Text>
                        </View>
                        <View style={styles.horizontalCentered}>
                            <CustomIcons.Like color="#E9E9F0" size={24}/>
                            <Text style={styles.viewsAndLikes}>540</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <View style={styles.articleContent}>
            <View style={styles.articleTextContainer}>
                <Text style={styles.articleText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                </Text>
            </View>
            <View
                style={styles.forDemoPerpose}>
                <ImageBackground
                    source={require('../../assets/images/horse2.png')}
                    borderRadius={8}>
                    <View style={{height: 240, width: 170}}/>
                </ImageBackground>
                <View
                    style={{
                        flexDirection: 'column', gap: 5,
                    }}>
                    <ImageBackground
                        source={require('../../assets/images/horse2.png')}
                        borderRadius={8}>
                        <View style={{height: 120, width: 170}}/>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/images/horse2.png')}
                        borderRadius={8}>
                        <View style={{height: 120, width: 170}}/>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.articleTextContainer}>
                <Text style={styles.articleText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehderit in voluptate velit esse cillum dolore eu fugiat nulla .
                </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
                {keywords.map((keyword, index) => (<Keyword key={index} keyword={keyword}/>))}
            </View>

            <View
                style={{
                    marginVertical: 25, borderColor: '#9B8579', borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <View
                style={[styles.horizontalCentered, {justifyContent: 'space-between'},]}>
                <Text
                    style={{
                        color: '#000',
                        textAlign: 'right',
                        fontFamily: 'Montserrat',
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontWeight: '700',
                    }}>
                    Comments
                </Text>
                <Text
                    style={{
                        color: '#D5BDAF',
                        textAlign: 'right',
                        fontFamily: 'Montserrat',
                        fontSize: 12,
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 16,
                    }}>
                    view all(26)
                </Text>
            </View>

            <View style={{marginVertical: 25}}>
                {comments.map((comment, index) => {
                    console.log(comment.comment);
                    return <Comment key={index} {...comment} />;
                })}
            </View>

            <View>
                <TextInput
                    placeholder="Write your comment "
                    placeholderTextColor="#ccc"
                    style={{
                        minHeight: 60, padding: 20, borderRadius: 20, backgroundColor: '#F5F5F8',
                    }}
                />
                <CustomIcons.Send
                    color={'black'}
                    size={22}
                    style={{end: 20, bottom: 20, position: 'absolute'}}
                />
            </View>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                // setModalVisible(!modalVisible);
            }}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MaterialCommunityIcons name={"close"} size={22}/>
                    <Text style={{
                        color: "#000",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        fontSize: 20,
                        fontStyle: "normal",
                        fontWeight: "700",
                    }}>
                        Select Collection
                    </Text>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                        }}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </ScrollView>);
}

function Keyword({keyword}) {
    return (<View style={styles.keywordContainer}>
        <Text style={styles.keyword}> # {keyword} </Text>
    </View>);
}

const metaInfo = {
    color: '#F5F5F8',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,

};

const styles = StyleSheet.create({
    articleMetaContainer: {
        flexDirection: 'column',
        height: 500,
        width: 'auto',
        backgroundColor: '#00000080',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'flex-end',
        padding: 25,
    }, metaInfo: metaInfo, metaInfoBg: {
        borderRadius: 30, backgroundColor: '#607698', paddingHorizontal: 8, marginEnd: 8,
    }, title: {
        ...metaInfo, fontSize: 20, fontWeight: '700', lineHeight: 26, paddingHorizontal: 4,
    }, viewsAndLikes: {
        ...metaInfo, paddingHorizontal: 0,
    }, horizontalCentered: {
        flexDirection: 'row', gap: 6, alignItems: 'center',
    },

    articleContent: {
        padding: 25,
    }, articleTextContainer: {
        paddingVertical: 25, textAlign: 'justify',
    }, articleText: {
        color: '#607698',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 19,
    }, keywordContainer: {
        backgroundColor: '#E9E9F0', borderRadius: 42,
    }, keyword: {
        maxHeight: 160, paddingVertical: 10, paddingHorizontal: 18, gap: 1,
    }, centeredView: {
        flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22,
    }, modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }, button: {
        borderRadius: 20, padding: 10, elevation: 2,
    }, buttonOpen: {
        backgroundColor: '#F194FF',
    }, buttonClose: {
        backgroundColor: '#2196F3',
    }, textStyle: {
        color: 'white', fontWeight: 'bold', textAlign: 'center',
    }, modalText: {
        marginBottom: 15, textAlign: 'center',
    },
});
