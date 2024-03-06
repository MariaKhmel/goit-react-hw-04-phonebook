import PropTypes from 'prop-types';
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactsList = ({contactlist,onClick})=>{
        return (
            <>
                <ul>
                    {contactlist.map(contact => (
                        <ContactItem key={contact.id} contact={contact} contactlist={contactlist}onClick={onClick} />
                    ))}
                </ul>
        </> )     }

ContactsList.propTypes = {
    onClick: PropTypes.func.isRequired,
    contactlist:PropTypes.array.isRequired,
}