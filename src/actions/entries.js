import axios from 'axios';

const createEntry = (entry) => ({
    type: 'CREATE_ENTRY',
    entry
});

export const startCreateEntry = ({ title = '',
                                    description = '',
                                    createdAt = 0, 
                                    blog_id = ''
                                }) => {
    return (dispatch) => {

        return axios({
                url: 'http://localhost:3000/blogs/'+blog_id+'/entries',
                method: 'POST',
                data : {
                    title,
                    description,
                    createdAt,
                    blog_id
                }
            })
        .then(response => {
            dispatch(createEntry(response.data.entries[response.data.entries.length-1]));
        })
        .catch(error => console.log(error))

    };
}; 

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id
    };
}

