import React from "react"
import MemeComponent from "./MemeComponent"

class MemeContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            txtTop: "",
            txtBottom: "",
            random_img:"https://i.imgflip.com/7yk6.jpg",
            allImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(respone => respone.json())
            .then(response => {
                const imgs = response.data.memes
                this.setState({
                    allImgs: imgs
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        event.preventDefault()
        let item = this.state.allImgs[Math.floor(Math.random() * this.state.allImgs.length)]
        console.log(item)
        this.setState({
            random_img:item.url
        })
    }

    render() {
        const data = this.state
        return(
            <MemeComponent 
                handleChange={this.handleChange} 
                handleClick={this.handleClick}
                data={data}
            />
        )
    }
}

export default MemeContainer;