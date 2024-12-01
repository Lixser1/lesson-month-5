
const initialState = {
    type: "number",
    number: 0,
};
export default function reducer(state = initialState, action) {
if (action.type === "plus") {
    return {number: state.number +1}
}
if (action.type === "plus-10") {
    return {number: state.number +10}
}
if (action.type === "minus") {
    return {number: Math.max(0, state.number -1)}
}
if (action.type === "minus-10") {
    return {number: Math.max(0, state.number -10)}
}
if (action.type === "reset") {
    return {number: state.number = 0}
}

    return state;
}