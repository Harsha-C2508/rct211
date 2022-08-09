import * as types from './actionType'
const initState = {
    musicRecords:[],
    isLoading: false,
    isError: false
}
const reducer = (oldState=initState,action) =>{
    const {type,payload} = action

    switch(type){
        case types.GET_MUSIC_DATA_REQUEST:
                return{
                    ...oldState,
                    isLoading: true,
                    isError: false
                }
        case types.GET_MUSIC_DATA_SUCCESS:
            return{
                ...oldState,
                musicRecords: payload,
                isLoading: false,
                isError: false
            }
        case types.GET_MUSIC_DATA_FAILURE:
            return{
                ...oldState,
                isLoading: false,
                isError: true
            }
        default:
            return oldState;
    }
}
export { reducer }