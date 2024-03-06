import PropTypes from 'prop-types';
import { useState } from "react";
import {Label,Input} from './ContactForm.styled'

export const ContactForm = ({handleFormChange})=>{

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
     const { name:inputName, value } = e.currentTarget; 
     switch (inputName) {
       case ('name'):
         setName(value);
         break;
       case ('number'):
         setNumber(value);
         break;
       default:
         console.log('no such input')
     }
    }
  
   const handleFormSubmit = (e) => {
     e.preventDefault();
        handleFormChange({name, number})
     setName('');
     setNumber('');
        }
    
  return (
           <>
                <form onSubmit={handleFormSubmit}>
                    <Label> Name
<Input
  type="text"
  name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
  required
  value={name}
   onChange={handleInputChange}                                               
/>
              </Label>
              <Label> Number
<Input
  type="tel"
  name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      value={number}
                      onChange={handleInputChange}    
/>
              </Label>
              

                    <button type="submit">Add contact</button>

            </form>
        </>
        )  
    }


ContactForm.propTypes = {
  handleFormChange:PropTypes.func.isRequired,
}