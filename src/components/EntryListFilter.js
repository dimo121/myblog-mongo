import React from 'react';

// yet to implement selector 

export default class EntryListFilter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            searchBy: 'title'
        };
    }
    
    render() {
        return (
            <div>
                <input  className = "searchBar" 
                        type = "text"
                        value = {this.state.text}
                        onChange = {(e) => {
                            const value = e.target.value;
                            this.setState(() => ({
                                text : value
                            }));
                        }}
                />
                <select
                    className = "pullDown"
                    value = {this.state.searchBy} 
                    onChange = {(e) => {
                        if(e.target.value === 'title'){
                            this.setState(() => ({
                                searchBy : 'title'
                            }));
                        } else if (e.target.value === 'content') {
                            this.setState(() => ({
                                searchBy: 'content'
                            }));
                        }
                    }}
                >
                    <option value="title">Title</option>
                    <option value="content">Content</option>
                </select>
            </div>
        );
    }
}

//<p>This is the input value: {this.state.text}</p>
//<p>This is the select value: {this.state.searchBy}</p>