import { Label, Input, Span } from './Filter.styled';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { change } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
    const nameInputIdThird = shortid.generate();

    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();

    const changeFilter = e => {
      dispatch(change(e.target.value));
    };
  return (
    <Label htmlFor={nameInputIdThird}>
      <Span>Find contacts by name</Span>
      <Input
        id={nameInputIdThird}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </Label>
  );
};

export default Filter;
