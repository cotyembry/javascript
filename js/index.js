import React from 'react';
import ReactDOM from 'react-dom';

import Index from '../Components/Index.jsx';

import $ from 'jquery';


$(document).ready(function() {
	ReactDOM.render(<Index />, document.getElementById('index'));
})
