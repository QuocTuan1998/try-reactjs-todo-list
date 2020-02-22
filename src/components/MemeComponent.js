import React from "react"

function MemeComponent(props) {
    return (
        <div>
            <form className="mem-gen-form">
                <input 
                    type="text" 
                    name="txtTop" 
                    value={props.data.txtTop} 
                    placeholder="top text"
                    onChange={props.handleChange}
                />
                
                <input 
                    type="text" 
                    name="txtBottom" 
                    value={props.data.txtBottom} 
                    placeholder="bottom text"
                    onChange={props.handleChange}
                />

                <button onClick={props.handleClick}>Generate</button>
            </form>
            <div className="meme">
                <h2 className="top">{props.data.txtTop}</h2>
                <img src={props.data.random_img} alt="meme"/>
                <h2 className="bottom">{props.data.txtBottom}</h2>
            </div>
        </div>
    )
}

export default MemeComponent