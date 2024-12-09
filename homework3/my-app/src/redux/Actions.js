


function fetchJson (a) {
    return {
        type: "user",
        data: a
    }
}
export function asyncHello () {
    return async function (dispatch) {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(fetchJson(data));
    }
}