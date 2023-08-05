import React from 'react';
import {FlatList, View} from 'react-native';
import Article from './components/Articles';
import Advertisements from './components/Advertisements';
import Categories from './components/Categories';

const articles = [1, 2, 3, 4, 5, 6];
const categories = [
    'Latest',
    'Breeding',
    'feeding',
    'Teeth Health',
    'Beauty & Care',
];

export default function InformationHomeScreen({navigation}) {
    return (
        <FlatList
            bounces={false}
            disableScrollViewPanResponder={false}
            style={{padding: 25, backgroundColor: "white"}}
            ListHeaderComponent={
                <>
                    <Advertisements/>
                    <Categories categories={categories}/>
                </>
            }
            ListFooterComponent={<View style={{paddingBottom: 50}}/>}
            data={articles}
            renderItem={article => (
                <Article
                    key={article}
                    article={article}
                    onPress={() => navigation.navigate('Article Details')}
                />
            )}
        />
    );
}
