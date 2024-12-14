const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case value:
            return {
                ...state,
                count: state.count + 1
            };
        case value:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default counter;