import {GET_NEWS , AUTH} from "../actions/ActionTypes"
import {REGISTER_USER} from "../actions/wpActionTypes"

const initialState = {
  loading:false,
  login:false
}
const reducer = (state = initialState, action) => {
  console.log("**REducer" , action.type);
 switch (action.type) {
   case GET_NEWS:
        return { ...state, loading: true };
        case AUTH:
             return { ...state, login: true , email:action.payload.email , password:action.payload.password};
   case 'NEWS_RECEIVED':
        return { ...state, news: action.json[0], loading: false };
        case 'REGISTERED_USER':
             return { ...state, news: action.json, loading: false , test:true };
        case REGISTER_USER:
             return { ...state};
   default:
        return state;
 }
};
export default reducer;
