import React from 'react';

import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input type="text" className="widgets__input" placeholder="Search Twitter" />
			</div>
			<div className="widgets__widgetContainer">
				<h2>What's happening?</h2>
				<TwitterTweetEmbed tweetId={'1395328697436033032'} />
				<TwitterTimelineEmbed sourceType="profile" screenName="dogecoin" options={{ height: 400 }} />
				<TwitterShareButton
					url="https://www.coindesk.com/price/dogecoin"
					options={{ text: '#ReactJS is awesome', via: 'dogecoin' }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
