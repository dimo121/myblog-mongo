import moment from 'moment';
import React from 'react';

export default class EntryFormPage extends React.Component {
    
    constructor(props) {

        super(props);

        //props.entry can be passed down in case of edit
        this.state = {
            title: '',
            content: '',
            createdAt: moment().format('DD-MM-YYYY HH:mm'),
            error: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title || !this.state.content){
            this.setState(() => ({
                error : 'Both title and content are required'
            }));
        } else {
            this.props.onSubmit({
                    title: this.state.title,
                    description: this.state.content,
                    createdAt: this.state.createdAt
            });
        }
    }

    render(){
        return (
            <div className="entry__container">
                {this.state.error && <p>Error : {this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="title">Title:</label><br />
                    <input  type="text" 
                            id="title" 
                            name="title"
                            placeholder="Blog title"
                            onChange={this.onTitleChange}></input><br/><br/>
                    <label htmlFor="content">Content:</label><br />
                    <textarea 
                        className= "entry__textarea"
                        type="text" 
                        id="content" 
                        name="content" 
                        cols="120" 
                        rows ="20"
                        placeholder="Please describe the blog"
                        onChange={this.onContentChange} >  
                    </textarea>
                    <br/><br/>
                    <input className="button" type="submit" value="Save entry" />
                </form>
            </div>
        );
    };
}
