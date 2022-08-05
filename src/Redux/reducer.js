import * as types from './actionType'

const init={
    tasks:[],
    isLoading: false,
    isError: false
}

const reducer = (oldState=init,action) =>{
    const { type,payload } = action
    switch(type){
        case types.GET_TASK_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError: false
            }
        
        case types.GET_TASK_SUCCESS:
            return {
                ...oldState,
                tasks:payload,
                isLoading: false,
                isError: false
            }
        
        case types.GET_TASK_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: true
            }
        default:
            return oldState
    }
} 
export { reducer }