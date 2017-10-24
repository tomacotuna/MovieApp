import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;

export default class  MoviePoster extends Component {

	static propTypes = {
	  movie: React.PropTypes.object.isRequired,
	  onOpen: React.PropTypes.func.isRequired,
	}

	render() {
		const { movie, movie: {title, genre, poster }, onOpen } = this.props;
		
		return (
			<TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: poster }} />
				</View>
				<Text style={styles.title} numberOfLines={1}>{title}</Text>
				<Text style={styles.genre} numberOfLines={1}>{genre}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		marginLeft: 10,
		height: (height - 20 - 20) / rows - 10,
		width: (width - 10) / cols - 10,
	},
	imageContainer: {
		flex: 1,
	},
	image: {
		borderRadius: 10,
		...StyleSheet.absoluteFillObject,
	},
	title: {
		...defaultStyles.text,
		fontSize: 14,
		marginTop: 4,
	},
	genre: {
		...defaultStyles.text,
		color: '#BBBBBB',
		fontSize: 12,
		lineHeight: 14,
	},
})
