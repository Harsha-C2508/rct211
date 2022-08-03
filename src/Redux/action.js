import * as types from './actionType'
import axios from 'axios'

const getMusicRecords = () => (dispatch) =>{
    dispatch({type: types.GET_MUSIC_DATA_REQUEST})
    return axios
    .get("http://localhost:8080/albums")
    .then((r)=>{
        return dispatch({ 
            type: types.GET_MUSIC_DATA_SUCCESS, 
            payload: r.data
         });
    })
    .catch((e) => {
        return dispatch({ type: types.GET_MUSIC_DATA_FAILURE })
    })
}
export { getMusicRecords };