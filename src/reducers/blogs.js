const blogsDefaultState = [];

export default (state = blogsDefaultState, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            //console.log(action.blog);
            return [
                ...state,
                action.blog
            ];
        case 'CREATE_ENTRY':
            return state.map((blog) => {
                //finds corresponding blog and adds entry to array
                    if (blog.id == action.entry.blog_id){
                        return {
                            ...blog,
                            entries: [
                                ...blog.entries,
                                action.entry
                            ]
                        };
                    } else {
                        return blog;    
                    }      
            });
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id != action.id);
        case 'SET_BLOGS':
            //need to load entries into array not object.
            const result = action.blogs.map((blog) => {
                const resultArray = [];
                //iterate through object returned by firebase (suppose to be an array) and push entries onto array
                Object.entries(blog.entries).forEach(([key,value]) => resultArray.push(
                    {
                        id: key,
                        ...value
                    }
                ));
                //return individual blog and nested array of entries for each blog
                return {
                    ...blog,
                    entries: resultArray
                };
            });
            //return all blogs to redux store as array
            return [
                ...result
            ];
        default:
            return state; 
    }
}