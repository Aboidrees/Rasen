import React from 'react';
import {Dimensions, FlatList, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import horse from "../../../assets/images/horse.png";

const {width} = Dimensions.get('window');
const cardWidth = (width - 50) * 0.48; // Adjust the percentage as needed (e.g., 80% of screen width)


export default function BookmarksScreen({navigation}) {
    return (<FlatList
            style={{backgroundColor: "white", paddingTop: 15}}
            contentContainerStyle={{alignItems: "center"}}
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4]}
            renderItem={({item}) => {
                return <Pressable onPress={() => navigation.navigate("Collection Bookmarks")}>
                    <Card
                        title="Card Title"
                        articleCount={5}
                        cardWidth={cardWidth}
                        margin={10}
                    />
                </Pressable>
            }}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(collection, index) => collection}
        />

    );
}

const Card = ({title, articleCount, cardWidth, margin}) => {
    return (<View style={[styles.cardContainer, {width: cardWidth, margin: margin ?? 3}]}>

        <ImageBackground source={horse} style={styles.imageBackground}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'space-between'}}>
                {/* Top-Right Checkbox */}
                <View style={styles.checkboxContainer}>
                    {/*//TODO: checkbox */}

                </View>

                {/* Title and Number of Articles */}
                <View style={styles.overlayContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.articleCount}>{`${articleCount} Articles`}</Text>
                </View>
            </View>
        </ImageBackground>
    </View>);
};


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, cardContainer: {
        width: '80%', // You can adjust the width as needed
        aspectRatio: 3 / 4, borderRadius: 30, overflow: 'hidden'
    }, imageBackground: {
        flex: 1, justifyContent: 'flex-end'
    }, checkboxContainer: {
        flexGrow: 0,
    }, overlayContainer: {
        padding: 20, alignSelf: "flex-start"
    }, title: {
        color: '#fff', fontSize: 14, fontWeight: 'bold',
    }, articleCount: {
        color: '#fff', fontSize: 11,
    }, imageThumbnail: {
        justifyContent: 'center', alignItems: 'center', height: 100,
    },
});


export {Card};
