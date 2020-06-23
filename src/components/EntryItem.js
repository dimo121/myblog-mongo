import React from 'react';


class EntryItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="entryContainer">
                <h1>{this.props.entry.title}<span className="entryContainer__span">{this.props.entry.createdAt}</span></h1>
                <p>{this.props.entry.content}</p>
            </div>
        );
    }
};

export default EntryItem;