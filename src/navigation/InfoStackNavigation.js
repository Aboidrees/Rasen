import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as CustomIcons from '../components/CustomIcons';
import {View} from 'react-native';
import React from 'react';
import InformationHomeScreen from '../screens/InformationHomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookmarksScreen from '../screens/BookmarksScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

export default function InfoStackNavigation() {
    return (<Stack.Navigator initialRouteName="Information Home">
        <Stack.Screen
            name="Information Home"
            component={InformationHomeScreen}
            options={{
                headerTitle: "",
                headerShown: true,
                headerShadowVisible: false,
                headerLeftContainerStyle: {marginStart: 25},
                headerRightContainerStyle: {marginEnd: 35},
                headerLeft: () => <CustomIcons.MenuLeftAlt size={30} color="#25314C"/>                ,
                headerRight: () => {
                    return (<View
                        style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <CustomIcons.Search
                            color="#D5BDAF"
                            size={30}
                            onPress={() => console.log('clicked')}
                        />
                        <CustomIcons.BookmarkHeart
                            color="#D5BDAF"
                            size={30}
                            onPress={() => console.log('clicked')}
                        />
                        <CustomIcons.Notification
                            color="#D5BDAF"
                            size={30}
                            onPress={() => console.log('clicked')}
                        />
                    </View>);
                },
            }}
        />
        {/*<Stack.Screen name="Home" component={InfoDrawerNavigator} />*/}
        <Stack.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{
                drawerIcon: props => (<MaterialCommunityIcons
                    name="bookmark-multiple-outline"
                    {...props}
                />),
            }}
        />
        <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
                drawerIcon: props => (<MaterialCommunityIcons name="bell-badge-outline" {...props} />),
            }}
        />
        <Stack.Screen
            name="Article Details"
            component={ArticleDetailsScreen}
            options={{
                headerTitle: "",
                headerShown: true,
                headerTransparent: true,
                headerShadowVisible: false,
                headerLeftContainerStyle: {marginStart: 25},
                headerRightContainerStyle: {marginEnd: 35},
                headerLeft: () => <CustomIcons.BackArrow size={30} color="#FFF"/>,
                headerRight: () => {
                    return (<View
                        style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
                        <CustomIcons.BookmarkPlus
                            size={30}
                            color="#FFFFFF"
                            onPress={() => console.log('clicked')}
                        />

                        <CustomIcons.Share
                            size={25}
                            color="#FFFFFF"
                            onPress={() => console.log('clicked')}
                        />
                    </View>);
                },
            }}
        />
    </Stack.Navigator>);
}
