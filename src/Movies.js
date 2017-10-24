import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

export default class Movies extends Component {

	state = {
		popupIsOpen: false,
		chosenDat: 0,
		chosenTime: null,
	}

	openMovie = (movie) => {
		this.setState({
			popupIsOpen: true,
			movie,
		});
	}

	closeMovie = () => {
		this.setState({
			popupIsOpen: false,
			chosenTime: null,
			chosenDat: 0,
		});
	}

	chooseDay = (day) => {
		this.setState({
			chooseDay: day,
		});
	}

	chooseTime = (time) => {
		this.setState({
			chosenTime: time,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					contentContainerStyle={styles.scrollContent}
					showHorizontalScrollIndicator={false}
					showVerticalScrollIndicator={false}
				>
					{movies.map((movie, index) => <MoviePoster
						  movie={movie}
						  onOpen={this.openMovie}
						  key={index}
						/>)}
				</ScrollView>

				<MoviePopup 
					movie={this.state.movie}
					isOpen={this.state.popupIsOpen}
					onClose={this.closeMovie}
					chooseDay={this.state.chooseDay}
					chosenTime={this.state.chosenTime}
					onChooseDay={this.state.chooseDay}
					onChooseTime={this.state.chooseTime} 
					/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
	},
	scrollContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});