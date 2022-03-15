// GET Request
// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { Component } from 'react'
import axios from 'axios'

// Ορίζουμε την κλάση.
class PostList extends Component {

    constructor(props) {  //rconst
        super(props)

        this.state = {
            posts: [], // Εδώ θα αποθηκευτούν οι λίστες των posts. Initialize with an empty array.
            error: ''

        }
    }

    // Όταν το Component mounts for the first time 
    // and executed once during components lifetime.
    componentDidMount() {
        // A GET Request to the JSON placeholder API.

        // Τα πήραμε 
        axios.get('https://jsonplaceholder.typicode.com/posts') // link από το site
            .then(response => {  // Απάντηση
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })

    }


    render() {

        const { posts, errorMsg } = this.state

        return (
            <div>
                <b>List of posts:</b>
                {
                    //Ternary operator
                    posts.length ?
                        posts.map(post => <div key={post.id}>  {post.title}</div>) :
                        null
                }
                { //Ternary operator
                    errorMsg ? <div>{errorMsg}</div> : null
                }

            </div>
        )
    }

}

export default PostList;
