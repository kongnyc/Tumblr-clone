import React from 'react';
import IndividualPost from './IndividualPost';
import '../../styles/timeline/timeline.css';

const Timeline = React.createClass({
	render() {
		return(
			<div>
				<div className="timeline-container">
					
					<div className="timeline-post-container">
						<IndividualPost />
					</div>

				</div>
			</div>
		)
	}
});

export default Timeline;