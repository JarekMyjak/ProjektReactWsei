  
import { IComment } from 'src/entities/comments';
import * as actionTypes from 'src/actions/actionTypes/commentTypes';

export interface ICommentReducer{
    commentList: IComment[];
};

const defaultState = (): ICommentReducer => ({
    commentList: []
});

const reducer = (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return{
                ...state,
                commentList: payload.commentList
            }
        }
        default:{
            return state;
        }
    }
};

export default reducer;