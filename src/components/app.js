import _ from 'lodash';
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
			videos: [],
			selectedVideo: null
		};
	}

	componentDidMount() {
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		const key = Constants.API_KEY;

		YTSearch({ key, term }, videos => {
			const selectedVideo = videos[0];
			this.setState({ videos, selectedVideo });
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onTermChange={videoSearch} />
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
						videos={this.state.videos} 
						onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
				</div>
			</div>
		);
	}
}
