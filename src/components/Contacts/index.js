import React, {useState} from 'react'
import '../styles.css'
import Contact from './Contact'
import Alphabet from './Alphabet'

function Contacts ({contacts, selected, setSelected}) {

    const [searchQuery, setSearchQuery] = useState("")
    var currIndex = "";

    return(
        <div className = "contacts-container">
            <div style = {{backgroundColor: "#202328", width:"100%",borderRadius: "0 16px 16px 16px"}}>
                <div className = 'contacts-title'>
                    CONTACTS
                </div>
                <div className = "search-container">
                    <input onChange = {(e)=>{e.preventDefault(); setSearchQuery(e.target.value)}} className = "search" placeholder = "Search Contacts"/>
                </div>
            </div>
                {
                    contacts ?
                    <div style = {{width:"100%", height:"100%", overflowY: "auto", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <div className = "list">
                            {
                                contacts.filter(
                                    con => searchQuery ? 
                                        con.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        con.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        con.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        con.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        con.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        con.address.city.toLowerCase().includes(searchQuery.toLowerCase()) 
                                    : 
                                        contacts
                                    ).map((c,i) => {
                                        if (c.name.charAt(0).toLowerCase() !== currIndex) {
                                            currIndex = c.name.charAt(0).toLowerCase();
                                            return (
                                                <div key = {i} style = {{width:"90%", cursor:"pointer", paddingRight:"1em"}} onClick = {(e)=>{e.preventDefault(); setSelected(c)}}>
                                                    <h1 style = {{width:"100%", textAlign:"left"}}>{c.name.charAt(0)}</h1>
                                                    <Contact contact ={c} selected = {selected === c}/>
                                                </div>
                                            )
                                        } else {
                                            return(
                                                <div key = {i} style = {{width:"90%", cursor:"pointer", paddingRight:"1em"}} onClick = {(e)=>{e.preventDefault(); setSelected(c)}}>
                                                    <Contact contact ={c} selected = {selected === c}/> 
                                                </div>
                                            )
                                        }
                                })
                            }
                        </div>
                        <Alphabet contacts = {contacts}/>
                    </div>
                    :
                    <div>
                        Loading...
                    </div>
                }

        </div>
    )
}

export default Contacts;