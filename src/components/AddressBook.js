import React, {useState, useEffect} from 'react'
import './styles.css'
import Contacts from './Contacts'
import Details from './Details'
import {useMediaQuery} from '@react-hook/media-query'

function AddressBook () {

    const matches = useMediaQuery('(max-width: 930px)')
    const [selected, setSelected] = useState(null)
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function getData(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setContacts(data.sort(alphabetical)));
        }
        getData();
    }, []);

    function alphabetical(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    return(
        <div style = {{width:"100%", height:"100%"}}>
            { matches ?
                !selected ?
                    <Contacts contacts = {contacts} selected = {selected} setSelected = {setSelected} />
                :
                    <Details mobile = {true} contact = {selected} setSelected={setSelected} />
            :
                <div className = "container">
                    <Contacts contacts = {contacts} selected = {selected} setSelected = {setSelected} />
                    <Details contact = {selected} />
                </div>
            }
        </div>
    )
}

export default AddressBook;