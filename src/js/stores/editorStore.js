/**
 *
 * @param reducer
 * @returns {boolean|{dispatch: dispatch, getState(): *, subscribe: subscribe, getStatus(): *}}
 */
export function editorStore(reducer) {
    let state = {};
    let isWrite = true;
    const subscribers = [];

    return {
        dispatch: function (action) {
            state = reducer(state, action);
            subscribers.forEach(sub => sub());
        },
        subscribe: function (option) {
            subscribers.push(option);
        },
        getState() {
            return state;
        },
        setStatus(bool) {
            isWrite = bool;
        },
        getStatus() {
            return isWrite;
        }
    }
}