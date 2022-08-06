import * as types from './actionType'
import axios from 'axios'
//--------------- GET TASK START--------------
const getTaskRequest = () =>{
    return{
        type: types.GET_TODOS_REQUEST
    }
}

const getTaskSuccess = (payload) =>{
    return{
        type: types.GET_TODOS_SUCCESS,
        payload,
    }
}

const getTaskFailure = () =>{
    return{
        type: types.GET_TODOS_FAILURE
    }
}
//--------------- GET TASK END--------------

//--------------- ADD TASK START--------------

const addTaskRequest = () =>{
    return{
        type: types.ADD_TODOS_REQUEST
    }
}

const addTaskSuccess = (payload) =>{
    return{
        type: types.ADD_TODOS_SUCCESS,
        payload,
    }
}

const addTaskFailure = () =>{
    return{
        type: types.ADD_TODOS_FAILURE
    }
}
//--------------- ADD TASK END--------------


const getData = (dispatch) =>{
    dispatch( getTaskRequest())
    axios.get("http://localhost:8080/tasks")
    .then((r)=>{
        dispatch(getTaskSuccess(r.data));
    })
    .catch((e)=>{
      dispatch(getTaskFailure(e));
    })
};
export {getData, getTaskRequest, getTaskSuccess, getTaskFailure,addTaskRequest,addTaskSuccess,addTaskFailure }