import React from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import Article from "../InformationHomeScreen/components/Articles";
import * as CustomIcons from "../../components/CustomIcons";

const articles = [1, 2, 3, 4, 5, 6];
const categories = ['Latest', 'Breeding', 'feeding', 'Teeth Health', 'Beauty & Care',];

export default function CollectionBookmarksScreen({navigation}) {
    return (<FlatList
        bounces={false}
        disableScrollViewPanResponder={false}
        style={{paddingHorizontal: 25, backgroundColor: "white"}}
        ListHeaderComponent={() => {
            return <View>
                <Text style={{
                    color: "#000", fontFamily: "Montserrat", fontSize: 20, fontStyle: "normal", fontWeight: "700",
                }}>Public</Text>
                <Text style={{
                    color: "#000", fontFamily: "Montserrat", fontSize: 12, fontStyle: "normal", fontWeight: "500",
                }}>21 News</Text>
                <View style={{paddingVertical: 25}}>

                    <TextInput
                        placeholder="Search bookmarked articles"
                        placeholderTextColor="#ccc"
                        style={{
                            minHeight: 60, padding: 20, paddingStart: 50, borderRadius: 20, backgroundColor: '#F5F5F8',
                        }}
                    />
                    <CustomIcons.Search
                        color={'black'}
                        size={24}
                        style={{start: 20, bottom: 45, position: 'absolute'}}
                    />
                    <CustomIcons.Tune
                        color={'black'}
                        size={22}
                        style={{end: 20, bottom: 45, position: 'absolute'}}
                    />
                </View>
            </View>
        }}
        ListFooterComponent={<View style={{paddingBottom: 50}}/>}
        data={articles}
        renderItem={article => (<Article
            key={article}
            article={article}
            onPress={() => navigation.navigate('Article Details')}
        />)}
    />);
}
