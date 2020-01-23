
export const actions = {
    SOMETHING: "SOMETHING",
}

const intState = {
    data: null
}

const example = (state = intState, { action, payload }) => {

    switch (action) {

        case action.SOMETHING: {
            // do somthing whit state 
            state.data = payload;
            return state
        }
        default: return state
    }

}

export default example