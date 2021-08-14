import axios from 'axios';
import apiKey from "../../secret/yelpToken.json";

const assembledKey = "Bearer `${apiKey}`";
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: apiKey.key
    }
});