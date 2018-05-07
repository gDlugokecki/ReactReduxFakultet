import * as CounterActionTypes from './CounterActionTypes'

const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            };
        case CounterActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            };
        case CounterActionTypes.DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            };
        case CounterActionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            };
        default:
            return state;
    }
};