import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

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
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		const newCoin = choice(this.props.sides);
		this.setState(oldState => {
			return {
				currentSide: newCoin,
				totalFlips: oldState.totalFlips + 1,
				totalHeads: oldState.totalHeads + (newCoin === 'heads' ? 1 : 0),
				totalTails: oldState.totalTails + (newCoin === 'tails' ? 1 : 0)
			};
		});
	}

	handleClick(e) {
		this.flipCoin();
	}

	render() {
		const { currentSide } = this.state;
		return (
			<div>
				<h1>Let's flip a coin!</h1>
				{currentSide && <Coin currentSide={currentSide} />}
				<button onClick={this.handleClick}>FLIP ME!</button>
				<p>
					Out of {this.state.totalFlips} flips, there have been {this.state.totalHeads} heads and{' '}
					{this.state.totalTails} tails.
				</p>
			</div>
		);
	}
}
