export const actionTypes = {
    SOMETHING: "SOMETHING",
};

const intState = {
    data: [{data: 9999}]
};

const example = (state = intState, {action, payload}) => {

    switch (action) {

        case actionTypes.SOMETHING: {
            state.data = payload;
            return state
        }
        default:
            return state
    }

}

export default example