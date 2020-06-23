import { connect } from 'react-redux';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class BlogItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="blogContainer">
                <NavLink style={{'textDecoration': 'none'}} to={`/blog/${this.props.blog.id}`}>
                    <h1>{this.props.blog.title}<span className="blogContainer__span">{this.props.blog.createdAt}</span></h1>
                    <p>{this.props.blog.content}</p>
                </NavLink>
                <p>Replies: {this.props.blog.entries.length}<span>
                    <NavLink to={{
                                    pathname:'/createentry',
                                    state: {
                                        blog_id : this.props.blog.id
                                    } 
                                }}>
                        <button>Reply</button>
                    </NavLink></span>
                </p>
            </div>
        );
    }
};

export default connect()(BlogItem);

