import { combineReducers } from 'redux';

import photos, { IPhotosReducer } from './photoReducer';
import posts, { IPostReducer } from './postReducer';
import users, { IUsersReducer } from './usersReducer';
import comments, {ICommentReducer} from './commentReducer';

export default combineReducers({
    users,
    photos,
    posts,
    comments
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    posts: IPostReducer;
    comments: ICommentReducer;
};