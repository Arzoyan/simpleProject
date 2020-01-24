import {createStore} from "redux";
import rootReducers from "../src/reducers";

const MyStore = createStore(rootReducers);
export default MyStore;