  
import { IPost } from 'src/entities/posts';
import * as actionTypes from 'src/actions/actionTypes/postTypes';

export interface IPostReducer{
    postList: IPost[];
};

const defaultState = (): IPostReducer => ({
    postList: []
});

const reducer = (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_POSTS:{
            const payload: actionTypes.IPosts['GET_POSTS'] = action;
            return{
                ...state,
                postList: payload.postList
            }
        }
        default:{
            return state;
        }
    };
};
export default reducer;