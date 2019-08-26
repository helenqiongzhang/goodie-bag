import React from 'react';
import { Candies } from './Candies';
import { HashRouter, Route, Link } from 'react-router-dom';
import { SingleCandy } from './SingleCandy';
const Root = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to="/">Home </Link>
          <div> | </div>
          <Link to="/candies">Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path="/candies" component={Candies} />
          <Route path="/candies/:id" component={SingleCandy} />
          <Route path="/" />
        </main>
      </div>
    </HashRouter>
  );
};

export default Root;
