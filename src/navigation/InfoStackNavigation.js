import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, View} from 'react-native';
import {BookmarksScreen} from '../screens/BookmarksScreen';
import {NotificationsScreen} from '../screens/NotificationsScreen';
import {ArticleDetailsScreen} from '../screens/ArticleDetailsScreen';
import {InformationHomeScreen} from "../screens/InformationHomeScreen";
import * as CustomIcons from '../components/CustomIcons';
import CollectionBookmarksScreen from "../screens/BookmarksScreen/CollectionBookmarksScreen";

const Stack = createNativeStackNavigator();


export default function InfoStackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Information Home">
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerLeft: () => {
                        return (
                            <Pressable>
                                <CustomIcons.MenuLeftAlt size={30} color="#25314C"/>
                            </Pressable>
                        )
                    }, headerRight: () => {
                        return (<View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <CustomIcons.Search
                                color="#D5BDAF"
                                size={30}
                                onPress={() => console.log('clicked')}
                            />
                            <CustomIcons.BookmarkHeart
                                color="#D5BDAF"
                                size={30}
                                onPress={() => navigation.navigate("Bookmarks")}
                            />
                            <CustomIcons.Notification
                                color="#D5BDAF"
                                size={30}
                                onPress={() => console.log('clicked')}
                            />
                        </View>);
                    },
                })}
            >
                <Stack.Screen
                    name="Information Home"
                    component={InformationHomeScreen}
                    options={{headerShadowVisible: false, headerTitle: ""}}
                />
            </Stack.Group>
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerLeft: () => (
                        <Pressable onPress={navigation.goBack}>
                            <CustomIcons.BackArrow size={24} color="#25314C"/>
                        </Pressable>
                    )
                    ,
                    headerRight: () => (<View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <CustomIcons.Trash
                            color="#25314C"
                            size={22}
                            onPress={() => console.log('clicked')}
                        />
                    </View>)

                })}
            >
                <Stack.Screen name="Bookmarks" component={BookmarksScreen} options={{headerShadowVisible: false}}/>
                <Stack.Screen
                    name="Collection Bookmarks"
                    component={CollectionBookmarksScreen}
                    options={{headerShadowVisible: false, headerTitle: ""}}
                />
                <Stack.Screen name="Notifications" component={NotificationsScreen}/>

            </Stack.Group>

            <Stack.Group screenOptions={({navigation}) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <CustomIcons.BackArrow size={24} color="#FFF"/>
                    </Pressable>
                ),
                // headerRight: () => (
                //     <View
                //         style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
                //         <CustomIcons.BookmarkPlus size={30} color="#FFFFFF"/>
                //         <CustomIcons.Share size={24} color="#FFFFFF" onPress={}/>
                //     </View>
                // )

            })}>
                <Stack.Screen
                    name="Article Details"
                    component={ArticleDetailsScreen}
                    options={{headerTitle: "", headerTransparent: true}}
                />
            </Stack.Group>
            {/*<Stack.Screen name="Home" component={InfoDrawerNavigator} />*/}
        </Stack.Navigator>
    );
}
