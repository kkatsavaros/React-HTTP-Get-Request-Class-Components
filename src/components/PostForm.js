// Κάνω εισαγωγή το React και την κλάση Component του React.
import React, { Component } from 'react'
import axios from 'axios'

// Ορίζουμε την κλάση.
class PostForm extends Component {

    constructor(props) {  //rconst
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })

    }

    render() {

        const { userId, title, body } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div><input type="text" name="userId" value={userId} onChange={this.changeHandler}></input></div>
                    <div><input type="text" name="title" value={title} onChange={this.changeHandler}></input></div>
                    <div><input type="text" name="body" value={body} onChange={this.changeHandler}></input></div>
                </form>
                <button type="submit">Submit</button>
            </div>
        )
    }

}

export default PostForm;
