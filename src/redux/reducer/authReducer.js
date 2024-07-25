import {LOGIN,REGISTER,ERROR, SIGN__OUT} from '../actions/actionTypes'

const intialState = {
    token :localStorage.getItem("token")|| null,
    user:localStorage.getItem("user")|| null,
    isError:false,
    isSuccess:false,
    error:null
}
 const reducer = (state = intialState,action)=>{
    switch(action.type){
        case LOGIN:
            case REGISTER:
                localStorage.setItem("token",action.token)
                localStorage.setItem("user",action.user)

                return{
                    token:action.token,
                    user:action.user
                }
                case ERROR:
                    return{
                        isError:true,
                        error:"Error",
                        token:null,
                        user:null
                    }
                case SIGN__OUT:
                    return{
                        
                        token:null,
                        user:null
                    }
                default:
                    return state
    }
} 
export default reducer