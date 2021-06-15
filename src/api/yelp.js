import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zhjqTiCSBFcOrEh9wv6-kW_qMEALeGrdFS722WIhzVJgedHbAj8HgYI3vuyCZQlUkGz8lMJ9klaPeSurJFQdiQZwDN47m_BA0t__sUbEDrMRnS0dUc2ZRRVT5kjDYHYx'
    }
});