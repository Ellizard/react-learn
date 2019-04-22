import React, {Component} from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {


  render () {


    return (
      <div className="Blog">

        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts" activeStyle={{
                  textDecoration : 'underline'
                }}>
                    Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts"/>
        </Switch>



        {/*<Route path="/:id" exact component={Posts} />*/}


      </div>
    );
  }
}

export default Blog;