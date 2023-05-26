import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContact, deleteContact } from '../../redux/contactsOperations';
import { Button, Item, List } from './ContactList.styled';


  export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);

    const filter = useSelector(state => state.filter.filter);

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};


export default ContactList
