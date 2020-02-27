import React, { Component } from 'react'

export default class Counter extends Component {
    
    constructor() {
        // 1. initialize component with props and state
        super();
        this.state = {
            counter: 0,
            seed:0
        }

        this.increment = () => {this.setState({counter: this.state.counter + 1})}
        this.decrement = () => {this.setState({counter: this.state.counter - 1})}
    }
    
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }

    componentDidMount() {
        // 3. after finish render
        console.log("component did mount")
        console.log("-----------------------")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    render() {
        // 2. render component
        console.log("render")
        return (
            <div className="py-2">
                <div>Counter: {this.state.counter}</div>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 4. Called when component change(update)
        console.log("Component did update")
        console.log("-----------------------")
    }

    componentWillUnmount() {
        // 5. Called when component remove from the DOM
        console.log("Component will unmount");
        console.log("-----------------------")
    }

    // make a decision whether component update or not (performance) 
    // return true/false
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProps && this.props.ignoreProps !== nextProps.ignoreProps) {
            console.log("Should component update -- DO NOT RENDER");
        }
        console.log("Should component update -- RENDER");
        return true;
    }

    componentDidCatch() {
        // Catch and handle error
    }
}
