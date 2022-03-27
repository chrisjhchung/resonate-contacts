import React from 'react'
import "../styles.css"

function Contact ({contacts}) {

    const alpha  = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className = "alpha-list">
            { alpha.map((l,i)=>{ 
                return (
                    <div key = {i} style = {{color : contacts.filter(c => {return (c.name.charAt(0).toLowerCase() === l)}).length>0 ? "white":"#4b4b4b"}}>
                        {l.toUpperCase()}
                    </div>
                )
            })}
        </div>
    )
}

export default Contact