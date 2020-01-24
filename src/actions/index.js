import { actionTypes } from "../reducers/example";

export const something = (data) => {
    return { action: actionTypes.SOMETHING, payload: data };
}

