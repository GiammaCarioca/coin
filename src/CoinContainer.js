import React, { Component } from 'react';
import Coin from './Coin';

export default class CoinContainer extends Component {
	static defaultProps = {
		sides: ['heads', 'tails']
	};

	constructor(props) {
		super(props);
		this.state = {
			totalFlips: 0,
			totalHeads: 0,
			totalTails: 0,
			currentSide: null
		};
		this.flip = this.flip.bind(this);
	}

	flip() {
		const idx = Math.floor(Math.random() * this.props.sides.length);
		const currentSide = this.props.sides[idx];
		currentSide === 'heads'
			? this.setState(curState => ({
					totalFlips: curState.totalFlips + 1,
					totalHeads: curState.totalHeads + 1,
					currentSide: currentSide
				}))
			: this.setState(curState => ({
					totalFlips: curState.totalFlips + 1,
					totalTails: curState.totalTails + 1,
					currentSide: currentSide
				}));
	}

	render() {
		return (
			<div>
				<h1>Let's flip a coin!</h1>
				<Coin currentSide={this.state.currentSide} />
				<button onClick={this.flip}>FLIP ME!</button>
				<p>
					Out of {this.state.totalFlips} flips, there have been {this.state.totalHeads} heads and{' '}
					{this.state.totalTails} tails.
				</p>
			</div>
		);
	}
}
