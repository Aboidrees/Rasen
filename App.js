import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Navigation from "./src/navigation";
import fonts from "./src/config/fonts";


SplashScreen.preventAutoHideAsync();


export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                await Font.loadAsync(fonts);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        })();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (<View
            style={{flex: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25,}}
            onLayout={onLayoutRootView}>
            <StatusBar
                // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                barStyle="light-content"
                backgroundColor="#9B8579"
            />
            <Navigation/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    },
});
