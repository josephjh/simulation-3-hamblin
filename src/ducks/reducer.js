const initialState = {
    id:0,
    username:'',
    profilePicture:''
}

export function reduxState(id, username, profilePicture)


export default function reducer(state = initialState, action){
    const { type, payload } = action;
    switch(type) {
    
        default: 
        return state;
    }
}