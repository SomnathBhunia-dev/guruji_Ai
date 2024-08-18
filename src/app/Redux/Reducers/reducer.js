// Define the initial state for the output
const initialState = [];

// Define action types
const ADD_INPUT = 'ADD_INPUT';
const ADD_OUTPUT = 'ADD_OUTPUT';


// Define the reducer function
export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_INPUT:
            return [
                { input: action.payload, output: null },
                ...state,
            ];
        case ADD_OUTPUT:
            return state.map((item, index) =>
                item.output === null
                    ? { ...item, output: action.payload }  // Add the output to the last input
                    : item
            );
        default:
            return state;
    }
}

// Action creator for adding output
export const addInput = (i) => ({
    type: ADD_INPUT,
    payload: i
});

// Action creator for adding output
export const addOutput = (i) => ({
    type: ADD_OUTPUT,
    payload: i
});
