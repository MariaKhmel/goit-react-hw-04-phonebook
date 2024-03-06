import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactsList} from './ContactsList/ContactsList'
import {Filter} from './Filter/Filter'
import { nanoid } from 'nanoid';


const LS_CONTACTSLIST_KEY = 'contactsList'

export const App =()=> {

  const[contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
//   useEffect(() => {
//     const existingContactList = localStorage.getItem(LS_CONTACTSLIST_KEY);
// let parsedContactList;
//  existingContactList ?? (parsedContactList = JSON.parse(existingContactList));

   
//      if (parsedContactList && parsedContactList.length>=1) {
//        setContacts(parsedContactList );
//     }

//     setContacts(prevContacts => {
//       const stringifiedContacts = JSON.stringify(contacts)
//      localStorage.setItem(LS_CONTACTSLIST_KEY, stringifiedContacts)
    
//     })
    
  //   }, [contacts])
  
  useEffect(() => {
    const existingContactList = localStorage.getItem(LS_CONTACTSLIST_KEY);
    console.log(existingContactList )
  let parsedContactList;
    if (existingContactList) {
      parsedContactList = JSON.parse(existingContactList)
      setContacts(parsedContactList);
}

  }, []);
  
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem(LS_CONTACTSLIST_KEY, stringifiedContacts);

  }, [contacts])

  
//   componentDidMount() {
//     const existingContactList = localStorage.getItem(LS_CONTACTSLIST_KEY);
//     const parsedContactList = JSON.parse(existingContactList);
   
//     if (parsedContactList && parsedContactList.length>=1) {
//       this.setState({ contacts: parsedContactList })
      
//     }
   
// }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     const stringifiedContacts = JSON.stringify(this.state.contacts)
  //    localStorage.setItem(LS_CONTACTSLIST_KEY, stringifiedContacts)
  //   }
  // }

const handleFormChange = (data) => {
    const newContact = {
      id: nanoid(),
      ...data,
  }

  const newContactName = data.name;

  if (isContactinList(newContactName)) {
    alert(`${newContactName} is already in contacts.`)
    return; 
  }

  setContacts(prevContacts => {
    const newContactsList = [...prevContacts, newContact];
    return newContactsList   
  })

    // this.setState(prevstate => {
    // const newContactsList = [...prevstate.contacts,newContact];
    //   return {
    //     contacts: newContactsList,
    //   }
    // })
  }
 
  const handleFilterChange = e => {
    const { name, value } = e.currentTarget;
  //   this.setState({
  //    [name]:value,
    //  })
    
    switch (name) {
      case ('contacts'):
        setContacts(value);
        break;
      case ('filter'):
        setFilter(value);
        break;
      default:
        console.log('have not found filter/contacts')
    }
}
 
  const getFilteredContacts = () => {
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(lowercaseFilter)
    ))
    }
  
  const isContactinList = (newName) => {
    const lowercaseName = newName.toLowerCase();
    return contacts.find(({name})=>name.toLowerCase()===lowercaseName )
  }
  
  const deleteContact = id => {
    console.log(id)
setContacts(prevContactsValue =>prevContactsValue.filter(contact=> contact.id !==id) )
   
    // this.setState(prevstate => ({
    //   contacts:prevstate.contacts.filter(contact=> contact.id !==id)
    // }))
}
    const filteredContacts = getFilteredContacts();
     
    return (
      <div style={{padding:'10px' }}>
        <h1>Phonebook</h1>
        <ContactForm handleFormChange={handleFormChange} />
        <Filter handleFilterChange={handleFilterChange}
          filter={filter} />
        <h2>Contacts</h2>
      <ContactsList contactlist={filteredContacts} onClick={deleteContact} />
      </div>
    );
  }
