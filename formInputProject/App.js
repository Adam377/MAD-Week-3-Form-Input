//Week 3 Form Input
import React, {Component, useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet, Alert} from 'react-native';

class App extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			email: '',
			password: ''
		}
	}
	
	handleEmailInput = (email) =>
	{
		this.setState({email: email})
	}
	
	handlePasswordInput = (pass) =>
	{
		this.setState({password: pass})
	}
	
	Login = () =>
	{
		return(
			Alert.alert(
				"Email & Password",
				this.state.email + " " + this.state.password,
				[
					{
						text: "Ok"
					}
				]
			)
		);
	}
	
	render()
	{
		return(
			<View>
				<TextInput placeholder="email..." onChangeText={this.handleEmailInput} value={this.state.email} />
				<TextInput placeholder="password..." onChangeText={this.handlePasswordInput} value={this.state.password} />
				
				<Button
					title = {"Log in"}
					onPress = {this.Login}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create
({
	
});

export default App;