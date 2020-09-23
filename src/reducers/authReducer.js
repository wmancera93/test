import { types } from 'types/types';

/*
    {
        uid: 'dljnsajsabfhas',
        name: 'Stevens'
    }   
*/

const initialState = {
    uid: 123123,
    name: 'Fernando',
    dir: {
        b:12
    }
}
export const authReducer = ( state = { }, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        
        case types.logout:
            return { }
            
        default:
            break;
    }


}