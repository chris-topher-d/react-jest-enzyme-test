import React, { Component } from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import SharedButton from './components/buttons/Buttons';
import ListItem from './components/listItem/ListItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/actions';
import './app.scss';

const tempArray = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'jbloggs@gmail.com',
  age: 33,
  onlineStatus: true
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  fetch = () => {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline 
            header="Posts"
            desc="Click the button to render posts!"
            tempArray={tempArray}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                );
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(App);
