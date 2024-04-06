import React from 'react'
import "./Button.css"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Button( { children, variant,  }: {children: React.ReactNode, variant?: string}) {
    return (
        <div>
            <button className={`button ${variant}`} >{children}</button>
        </div>
    )
}