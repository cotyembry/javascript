import React from 'react';

import $ from 'jquery';

export default class Index extends React.Component {
	render() {
		return (
			<div style={styles.page}>
				<image id="image" src="../assets/fallLookingLeafWithBlurryBackground.jpg" style={styles.backgroundImage} />
			</div>
		)
	}
}

var stylesHelper = {
	window: window
}
var styles = {
	page: {
		// width: 20000,
		// height: '100%'
	},
	backgroundImage: {
        // Set rules to fill background
        minHeight: '100%',
        minWidth: 1024,

        // Set up proportionate scaling
        width: '100%',
        height: 'auto',

        // Set up positioning
        position: 'fixed',
        top: 0,
        left: 0	
	}
	// Here is try number 1
	//
	// backgroundImage: {
	// 	// width: stylesHelper.window.document.documentElement.clientWidth,
	// 	// width: '100%',
	// 	// height: '100%',
	// 	// backgroundImage: 'url("../assets/fallLookingLeafWithBlurryBackground.jpg")',
	// 	// src: '../assets/fallLookingLeafWithBlurryBackground.jpg',
	// 	backgroundRepeat: 'no-repeat',
	// 	display: 'block',
	// 	background: 'url("../assets/fallLookingLeafWithBlurryBackground.jpg")', 
	// 	  // webkitBackground-size: cover;
	// 	  // -moz-background-size: cover;
	// 	  // -o-background-size: cover;
	// 	backgroundSize: 'cover'
	// }
}
