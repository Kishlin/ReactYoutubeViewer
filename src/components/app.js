import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Constants from '../constants/constants';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

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
			<div>
				<SearchBar />
				<div className="row">
					<VideoDetail video={this.state.videos[0]} />
					<VideoList videos={this.state.videos} />
				</div>
			</div>
		);
	}
}
