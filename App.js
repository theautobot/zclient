import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    FlatList
} from 'react-native';
import { Button, Image, Badge, withBadge } from 'react-native-elements';
import ajax from './FetchData';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        backgroundColor: '#f5f5f5',
                        padding: 140,
                        alignSelf: 'center'
                    }}>
                    <Image source={{uri: 'https://raw.githubusercontent.com/zold-io/zold.github.io/master/images/logo-blue.png'}} style={{width: 128, height: 128, marginBottom: 20}} />
                    <Text style={{
                        alignSelf: 'center',
                        width: 300,
                        marginBottom: 20
                    }}>An Experimental Non-Blockchain Cryptocurrency for Fast Micro Payments.</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('Payments')}
                        buttonStyle={{
                            backgroundColor: "rgb(55,57,55)",
                            height: 45,
                            width: 130,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        title='Sign-in'
                    />
                    <Text style={{
                        alignSelf: 'center',
                        width: 300,
                        color: '#afafaf',
                        marginTop: 120
                    }}>© 2019 0.11.3</Text>
                </View>
            </View>
        );
    }

    _authGithub = async () => {
        try {
            console.log("try");
            // let result = await authGithub();
            // this.setState({githubToken: result});
        } catch(e) {
            console.log(e.message);
            this.setState({error: JSON.stringify(e)});
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 10,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
    },
    flatview: {
        paddingTop: 10,
        borderRadius: 2,
    }
});

