import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
  buildGetSingleCandyThunk,
  buildIncreaseThunk,
} from '../reducers/candyReducer';
import { HashRouter, Route, Link } from 'react-router-dom';

class DisconnectedSingleCandies extends Component {
  componentDidMount() {
    const candyId = this.props.match.params.id;
    this.props.getSingleCandy(candyId);
  }

  render() {
    return (
      <Fragment>
        <h2>My candies:</h2>
        <div id="candies">
          <p>{this.props.candy.name}</p>
          <p>Description:{this.props.candy.description}</p>
          <span>Quantity: {this.props.candy.quantity}</span>
          <button
            type="submit"
            onClick={() =>
              this.props.increase(
                this.props.candy.id,
                this.props.candy.quantity
              )
            }
          >
            +
          </button>
          <button type="submit">-</button>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    candy: state.candy.currentCandy,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleCandy: id => dispatch(buildGetSingleCandyThunk(id)),
    increase: (id, quantity) => dispatch(buildIncreaseThunk(id, quantity)),
  };
};

export const SingleCandy = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedSingleCandies);
