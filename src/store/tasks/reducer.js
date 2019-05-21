
const INITIAL_STATE = {
    tasks: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_ALL_TASKS':
        case 'FILTER_COMPLETE':
        case 'FILTER_PENDING' :
            return { ...state, tasks: action.data.reverse() }

        default:
            return state
    }
}
