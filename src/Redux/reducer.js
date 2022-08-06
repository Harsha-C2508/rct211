import * as types from './actionType'

const init={
    tasks:[],
    isLoading: false,
    isError: false
}

const reducer = (oldState=init,action) =>{
    const { type,payload } = action
    switch(type){
        case types.GET_TODOS_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError: false
            }
        
        case types.GET_TODOS_SUCCESS:
            return {
                ...oldState,
                tasks:payload,
                isLoading: false,
                isError: false
            }
        
        case types.GET_TODOS_FAILURE:
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