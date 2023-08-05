import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const commentImage = require('../../../../assets/images/horse.png');

export default function Comment({comment, onPress}) {
    return (
        <Pressable onPress={onPress}>

            <View style={styles.commentContainer}>

                <Image source={commentImage} style={styles.commentImage}/>

                <View style={styles.commentDetailsContainer}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Text style={styles.username}>{comment.username}</Text>
                    </View>
                    <Text style={styles.commentContent}>{comment.content}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.bottomText}>{comment.time}</Text>
                        <Text style={styles.bottomText}>{comment.replies}</Text>
                    </View>
                </View>
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 16,
        height: 122,
        borderRadius: 30,
        backgroundColor: '#F5F5F8',
        gap: 16,
    },
    commentImage: {
        objectFit: 'cover',
        width: 75,
        height: 75,
        borderRadius: 40,
        alignSelf: "flex-start",
    },
    username: {
        color: '#000000',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    commentDetailsContainer: {
        flex: 1,
        gap: 8,
        flexDirection: 'column',
        justifyContent: "center",
    },
    commentContent: {
        fontFamily: 'Montserrat',
        color: "#607698",
        fontSize: 11,
        lineHeight: 18,
        letterSpacing: 0,
        fontWeight: '600',
        textAlign: 'left',
    },
    bottomText: {
        color: '#607698',
        fontFamily: 'Montserrat',
        fontSize: 9,
        fontStyle: 'normal',
        fontWeight: '500',
        paddingRight: 12,
    }
});