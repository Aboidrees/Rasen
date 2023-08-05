import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import * as CustomIcons from '../../../components/CustomIcons';
import React, {useState} from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const articleImage = require('../../../../assets/images/horse.png');

export default function Article({article, onPress}) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <Pressable onPress={onPress}>

            <View
                style={styles.articleContainer}>


                <Image source={articleImage} style={styles.articleImage}/>

                <View style={styles.articleDetailsContainer}>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 10}}>
                        <Text style={styles.categoryName}> Feeding </Text>
                        <Text style={styles.articleReadingTime}> 12 min reads </Text>
                        <Pressable onPress={()=>setIsBookmarked(!isBookmarked)}>
                            {isBookmarked&&<CustomIcons.BookmarkCheck size={30} color="#D5BDAF"/>}
                            {!isBookmarked&&<CustomIcons.BookmarkPlus size={30} color="#D5BDAF"/>}
                        </Pressable>
                    </View>
                    <Text
                        style={styles.articleTitle}>
                        Lorem ipsum dolor sitcons ectetur adipiscing elit
                    </Text>
                    <Text style={styles.publishDate}> 1 min ago </Text>
                </View>
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    articleContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 16,
        height: 122,
        borderRadius: 30,
        backgroundColor: '#F5F5F8',
        gap: 16,
    },
    articleImage: {
        objectFit: 'cover',
        width: 80,
        height: 92,
        borderRadius: 20,
        alignSelf: "center",
    },
    articleDetailsContainer: {
        flex: 1,
        gap: 8,
        flexDirection: 'column',
        justifyContent: "center",
    },
    categoryName: {
        color: '#607698',
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    articleReadingTime: {
        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        flexGrow:3
    },
    articleTitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0,
        fontWeight: '600',
        textAlign: 'left',
    },
    publishDate: {
        color: '#607698',
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        paddingRight: 12,
    }

});