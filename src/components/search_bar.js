import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onTermChange(event) {
		const term = event.target.value;

		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term} 
					onChange={event => this.onTermChange(event)} />
			</div>
		);
	}
}

export default SearchBar;