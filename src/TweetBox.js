import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
function TweetBox() {
	const [ tweetMessage, setTweetMessage ] = useState('');
	const [ tweetImage, setTweetImage ] = useState('');
	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			displayName: 'Natasha John',
			username: 'nats691',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		});

		setTweetMessage('');
		setTweetImage('');
	};
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
					/>
				</div>
				<input
					className="tweetBox__imageInput"
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					placeholder="Optional: Enter image url"
				/>
				<Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
