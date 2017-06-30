import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Constants from '../constants/constants';

import SearchBar from './search_bar';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};
	}

	componentDidMount() {
		YTSearch({key: Constants.API_KEY, term: 'surfboards'}, videos => {
			this.setState({ videos });
		});
	}

	render() {
		console.log(this.state);

		return (
			<SearchBar />
		);
	}
}
