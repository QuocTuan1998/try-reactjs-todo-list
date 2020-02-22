import React from "react"

function FormComponent(props) {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <input type="text" name="firstName" value={props.data.firstName} placeholder="first name" onChange={props.handleChange} />
            <br />
            <input type="text" name="lastName" value={props.data.lastName} placeholder="last name" onChange={props.handleChange} />
            <br />
            <textarea name="description" value={props.data.description} onChange={props.handleChange} />
            <br />
            <label>
                <input type="checkbox" name="isFriendly" checked={props.data.isFriendly} onChange={props.handleChange} /> Is friendly
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="Male" checked={props.data.gender === "Male"} onChange={props.handleChange} /> Male
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="Female" checked={props.data.gender === "Female"} onChange={props.handleChange} /> Female
            </label>
            <br />
            <label>What's your favorite color?</label>
            <select name="favColor" value={props.data.favColor} onChange={props.handleChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <input type="submit" value="submit" />
        </form>
    )
}

export default FormComponent;