const initState = {
    users: [
        {id: 1, name: 'quang'},
        {id: 2, name: 'CodeGym'}
    ],
    posts:[]
}
const rootReducer = (state = initState, action) => {
    return state;

    switch (action.type) {
        case 'Delete_user':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state, users
            };
        // case '':
        //     break;
        default:
            return state;
    }
}

export default rootReducer;