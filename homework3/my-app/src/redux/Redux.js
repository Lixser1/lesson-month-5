const initialState = {
    type: "user",
    data: []
}


export default function reducer(state = initialState, action) {
    if (action.type === "user") {
        state.data = action.data
        console.log(state.data)
    }// я так понял нужно было сделать в таком виде.
    return state
}