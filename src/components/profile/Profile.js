import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import PastReviews from './PastReviews';
import Board from './Board';
import './ProfileDesign.css';

/**
 * This is the main component of the User Profile Page
 * 
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  render() {
    return (
      <Router basename="/profile">
        <div className="Profile">
          <div className="center-align">
            <h1 className="Name">{this.props.name}</h1>
            <img
              className="circle responsive-img"
              src={this.props.image}
              alt={this.props.name}
            />
          </div>
          <nav className="container center-align">
            <div>
              <ul className="tabs">
                <li>
                  <Link
                    to="/about"
                    className="waves-effect waves-teal btn-flat"
                  >
                    MyInfo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/board"
                    className="waves-effect waves-teal btn-flat"
                  >
                    Boards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pastReviews"
                    className="waves-effect waves-teal btn-flat"
                  >
                    Past Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about" component={About} />
          <Route path="/board" component={Board} />
          <Route path="/pastReviews" component={PastReviews} />
        </div>
      </Router>
    );
  }
}

const profileinfo = {
  person: {
    name: 'Aditya-Gulhane',
    biography:
      '23 year old Designer / Developer living in Toronto. Originally from Nagpur, India. Love to make stuff.'
  },
  image: 'http://drpattydental.com/wp-content/uploads/2017/05/placeholder.png',
  quote: {
    content: 'Carpe Diem',
    source: "Dead Poet's Society "
  }
};

export default Profile;
