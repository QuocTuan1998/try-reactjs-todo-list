import React from "react"
import FormComponent from "./FormComponent"

class FormContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            description: "",
            isFriendly: true,
            gender: "Female",
            favColor: "violet"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        if(type === "checkbox") {
        this.setState({
        [name] : checked
        })
    } else {
        this.setState({
        [name]: value
        })
    }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit")
    }

    render() {
        return (
            <FormComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state}/>
        )
    }
}

export default FormContainer