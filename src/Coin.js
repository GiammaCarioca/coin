import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component {
	render() {
		const { currentSide: side } = this.props;
		return <div className="Coin">{side && <img src={`../img/${side}.jpg`} alt={side} />}</div>;
	}
}
