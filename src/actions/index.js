import { actions } from "../reducers/example";

export const something = (data) => {
    return { action: actions.SOMETHING, payload: data };
}

