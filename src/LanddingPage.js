import React from 'react'

import auth from './Auth'

export default function LanddingPage(props) {
    return (
        <div className="text-title">
            <h2>Hello from Landding page</h2>
            <button 
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/app")
                    })
                }}>
                Login
            </button>
        </div>
    )
}
