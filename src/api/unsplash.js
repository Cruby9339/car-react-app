import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID TIowVF4l6bfHAMyw1S1yi-iMhXCO1ef3sbKTTZWX2qo'
	}
});