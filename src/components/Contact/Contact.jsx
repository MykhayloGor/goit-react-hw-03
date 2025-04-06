import s from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <div className={s.contactRow}>
          <FaUser className={s.icon} />
          <span className={s.contactName}>{contact.name}</span>
        </div>
        <div className={s.contactRow}>
          <FaPhone className={s.icon} />
          <span className={s.contactNumber}>{contact.number}</span>
        </div>
      </div>
      <button
        onClick={() => onDelete(contact.id)}
        className={s.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;