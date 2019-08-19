import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import { SearchBar } from './components/SearchBar';
import { PostList } from './components/PostList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    state = {
        posts: [],
        filteredUsers: [],
    };

    componentDidMount() {
        fetch("http://my-json-server.typicode.com/inesantos29/recipe-posts/posts")
            .then(res => res.json())
            .then((posts) => {
                this.setState({posts, filteredUsers: posts});
            });
    }

    handleSearch = (search) => {
        const normalizedSearch = search.toLowerCase();
        const { posts } = this.state; // const users = this.state.users;
        const filteredUsers = search ===  "" ? posts : posts.filter((n) =>
            n.name.toLowerCase().includes(normalizedSearch)
        );
        this.setState({ filteredUsers });
    };

    render () {
        const { filteredUsers } = this.state;
        return (
            <>
                <header>
                    <h1 className="title">Recipe Posts</h1>
                    <hr className="hr-header" />
                </header>

                <SearchBar onChange={this.handleSearch}/>

                <Row>
                    <Col xs={12} md={6}>
                        <PostList/>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                </Row>
            </>
        );
    }
}

export default App;
