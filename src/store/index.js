import { createStor } from "redux";
import rootReducers from "./reducers";

export const store = createStor(rootReducers);
