import React from 'react'

import auth from './Auth'

export default function AppLayout(props) {
    return (
        <div>
            <h1>Hello from App layout</h1>
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/")
                })
            }}>Logout</button>
        </div>
    )
}
