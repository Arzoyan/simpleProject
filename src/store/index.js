import {createStore} from "redux";
import rootReducers from "../reducers";

const MyStore = createStore(rootReducers);
export default MyStore;