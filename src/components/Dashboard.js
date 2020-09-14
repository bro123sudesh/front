import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RdxVideo, Overlay, Controls } from 'react-html5-video-editor';

class DashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null,
		};

		this.pickerRef = React.createRef();
	}

	handleChange = (event) => {
		var file = URL.createObjectURL(event.target.files[0]);
		this.setState({
			file: file,
		});
	};

	render() {
		return (
			<div>
				<input
					ref={this.pickerRef}
					type='file'
					onChange={(event) => this.handleChange(event)}
				/>
				{this.state.file && (
					<video width='400' controls>
						<source src={this.state.file} />
					</video>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(DashBoard));
