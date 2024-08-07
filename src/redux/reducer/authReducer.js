import {LOGIN,REGISTER,ERROR, SIGN__OUT,ADD_CARD} from '../actions/actionTypes'

const intialState = {
    token :localStorage.getItem("token")|| null,
    user:localStorage.getItem("user")|| null,
    addBasket:JSON.parse(localStorage.getItem("add"))|| null,

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
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")

                    return{
                        ...state,
                        token:null,
                        user:null
                    }
                    case ADD_CARD:
                    return{
                        
                        addBasket:[state.addBasket,action.foods] 
                    }
                default:
                    return state
    }
} 
export default reducer