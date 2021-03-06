import React from 'react';
import Stories from './Stories';
import './App.css';

const App = ({ stories, onArchive }) => (
	<div className="app">
		<Stories stories={stories} onArchive={onArchive} />
	</div>
);

export default App;
