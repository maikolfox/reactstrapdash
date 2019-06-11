import React, { Component } from 'react';


class MainNavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="index.html">Dashboard</a></li>
                            <li><a href="pages.html">Pages</a></li>
                            <li><a href="posts.html">Posts</a></li>
                            <li><a href="users.html">Users</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Welcome fox</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default MainNavBar;