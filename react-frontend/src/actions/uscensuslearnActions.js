import axios from 'axios';
import { GET_INFOS, INFOS_LOADING} from './types.js';


export const fetchInfos = () => (dispatch) => {
	console.log("abc")
	axios({ url: 'http://localhost:8000/uscensus/',
	method: 'get',})
		.then(res=> {
			
			dispatch({
				type: GET_INFOS,
				payload: res.data
			})
			
		})
		.catch(err=>
			console.log(err));
};