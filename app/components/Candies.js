import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
  buildGetCandiesThunk,
  buildGetSingleCandyThunk,
} from '../reducers/candyReducer';
import { HashRouter, Route, Link } from 'react-router-dom';

class DisconnectedCandies extends Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    console.log('!!!!!!!!', this.props.candies);
    return (
      <HashRouter>
        <Fragment>
          <h2>My candies:</h2>
          <div id="candies">
            {this.props.candies.map(candy => (
              <div
                key={candy.id}
                id="signleCandy"
                // onClick={() => this.props.getSingleCandy(candy.id)}
                candy={candy}
              >
                <Link to={`/candies/${candy.id}`}>{candy.name}</Link>
                {/* <p>Description:{candy.description}</p>
              <span>Quantity: {candy.quantity}</span> */}
              </div>
            ))}
          </div>
        </Fragment>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candy.candies,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(buildGetCandiesThunk()),
  };
};

export const Candies = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedCandies);
