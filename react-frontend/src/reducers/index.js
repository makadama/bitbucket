import { combineReducers } from "redux";
import uscensusreducer from "./uscensusreducer";


export default combineReducers({	
 infos: uscensusreducer
});