import React from 'react'
import "../styles.css"

function Contact ({contact, selected}) {
    return (
        <div className = {selected? "selected-contact":"contact"}>
            <img alt = "avatar" className = "avatar-small" src = {"https://source.unsplash.com/random/500x500/?face-"+contact.id}/>
            <div>
                <h1 style = {{}}>{contact.name}</h1>
                <h2>{contact.company.name} </h2>
            </div>
        </div>
    )
}

export default Contact