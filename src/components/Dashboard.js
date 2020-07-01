import { connect } from 'react-redux';
import BlogItem from './BlogItem';
import EntryListFilter from './EntryListFilter';
import React from 'react';


const Dashboard = (props) => {
    return(
        <div className="search__container">
            <EntryListFilter />
            {props.blogs.map((item) => {
                return <BlogItem key={item.id} blog={item} />;
            })}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
};

export default connect(mapStateToProps)(Dashboard);