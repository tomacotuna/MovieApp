import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

export default class Movies extends Component {

	state = {
		popupIsOpen: false,
		chosenDay: 0,
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
			chosenDay: 0,
		});
	}

	chooseDay = (day) => {
		this.setState({
			chosenDay: day,
		});
	}

	chooseTime = (time) => {
		this.setState({
			chosenTime: time,
		});
	}

	bookTicket = () => {
    // Make sure they selected time 
	    if (!this.state.chosenTime) {
	      alert('Please select show time');
	    } else {
	      // Close popup
	      this.closeMovie();
	      // Navigate away to Confirmation route
	      this.props.navigator.push({
	        name: 'confirmation',
	        // Generate random string
	        code: Math.random().toString(36).substring(6).toUpperCase(),
	      });
	    }
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
				  chosenDay={this.state.chosenDay}
				  chosenTime={this.state.chosenTime}
				  onChooseDay={this.chooseDay}
				  onChooseTime={this.chooseTime}
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