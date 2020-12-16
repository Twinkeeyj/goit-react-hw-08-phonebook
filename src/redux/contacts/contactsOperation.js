import listAction from '../listActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContact = ({ name, number }) => dispatch => {
  
  dispatch(listAction.addListRequest());
  axios
    .post('/contacts', { name, number })
    .then(response => {
      dispatch(listAction.addListSuccess(response.data));
    })
    .catch(error => dispatch(listAction.addListError(error)));
};

const fetchContact = () => dispatch => {
  dispatch(listAction.fetchListRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(listAction.fetchListSuccess(data));
    })
    .catch(error => dispatch(listAction.fetchListError(error)));
};

const removeContact = id => dispatch => {
  dispatch(listAction.removeListRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(listAction.removeListSuccess(id));
    })
    .catch(error => dispatch(listAction.removeListError(error)));
};

export default {
  removeContact,
  addContact,
  fetchContact,
};
