import * as types from './actionType'

const init={
    isAuth:false,
    token: '',
    isLoading:false,
    isError:false
}

const reducer = (oldState = init,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false
            }
        case types.USER_LOGIN_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                isAuth:true,
                token:payload,
                isError:false
            }    
        case types.USER_LOGIN_FAILURE:
            return{
                ...oldState,
                isLoading:false,
                isError:true
            }   
        default :
        return oldState;
    }
}

export {reducer}