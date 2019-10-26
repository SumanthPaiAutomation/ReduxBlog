import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from './About'
import Posts from './Posts'
import PostShow from './PostShow'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Blog</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                            
                    <Route path="/" component={Posts} exact={true} />
                    <Route path="/about" component={About}/>
                    <Route path="/posts" component={Posts} exact={true} />
                    <Route path="/posts/:id" component={PostShow} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App