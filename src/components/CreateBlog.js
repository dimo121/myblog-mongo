import React from 'react';
import EntryFormPage from './EntryFormPage';
import { connect } from 'react-redux';
import { startCreateBlog } from '../actions/blogs';

const CreateBlog = (props) => (
            <div className="create__container">
                <h1>Create blog</h1>
                <EntryFormPage onSubmit={(blogEntry) => {
                    console.log('From createBlog.js ' + blogEntry)
                    props.dispatch(startCreateBlog(blogEntry));
                    props.history.push('/');
                }}/>
            </div>
);

export default connect()(CreateBlog);
