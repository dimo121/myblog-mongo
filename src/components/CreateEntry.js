import { connect } from 'react-redux';
import { startCreateEntry } from '../actions/entries';
import EntryFormPage from './EntryFormPage';
import React from 'react';

class CreateEntry extends React.Component {
    
    componentDidMount() {
        const { blog_id } = this.props.location.state;
        this.blog_id = blog_id;
    }
    
    render(){
        return (
            <div className="create__container">
                <h1>Create entry</h1>
                <EntryFormPage onSubmit={(entry) => {
                    this.props.dispatch(startCreateEntry({
                        blog_id: this.blog_id,
                        ...entry
                    }));
                    this.props.history.push('/');
                }}/>
            </div>
        );
    };
}

export default connect()(CreateEntry);