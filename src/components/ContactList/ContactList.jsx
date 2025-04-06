import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return <p className={s.emptyMessage}>No contacts found</p>;
  }

  return (
    <div className={s.contactsWrapper}>
      {contacts.map((contact) => (
        <Contact 
          key={contact.id} 
          contact={contact} 
          onDelete={onDeleteContact} 
        />
      ))}
    </div>
  );
};

export default ContactList;