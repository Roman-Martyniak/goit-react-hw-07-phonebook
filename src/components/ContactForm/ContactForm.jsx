import { useSelector, useDispatch } from 'react-redux';
import { Form, Label, Input, Span, Button } from './ContactForm.styled';
import { addContact } from '../../redux/contactsOperations';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      [e.target.elements.name.name]: e.target.elements.name.value,
      [e.target.elements.number.name]: e.target.elements.number.value,
    };

    const includesName = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );

    if (includesName) {
      alert(`${e.target.elements.name.value} is already in contacts`);
      e.target.reset();
      return;
    }

    dispatch(addContact(obj));

    e.target.reset();
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="UserId">
        <Span>Name</Span>
        <Input
          id="UserId"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor="number">
        <Span></Span>
        <Input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;










//
// import { useSelector, useDispatch } from 'react-redux';
//
//
// import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
// import { Form, Label, Input, Span, Button } from './ContactForm.styled';
// import { addContacts } from '../../services/getContacts';
// import { useEffect, useState } from 'react';
// import { selectContacts } from '../../redux/selectors';
// import { setFilter } from '../../redux/filter/filterSlice';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//
//   useEffect(() => {
//     dispatch(addContacts());
//   }, [dispatch]);
//
//   const getInput = ({ target: { name, value } }) => {
//     if (name === 'name') {
//       setUserName(value);
//     } else {
//       setUserNumber(value);
//     }
//   };
//
//
//   const [userName, setUserName] = useState('');
//   const [userNumber, setUserNumber] = useState('');
//
//   const setContact = (e) => {
//     e.preventDefault();
//
//     const contact = {
//       id: nanoid(),
//       name: userName,
//       number: userNumber,
//     };
//
//     const isExist = contacts.find((contact) => contact.name === userName);
//
//     if (isExist) {
//       return toast.warn(`${userName} is already in contacts.`);
//     } else {
//       dispatch(addContacts(contact));
//       setUserName('');
//       setUserNumber('');
//     }
//   };
//

