import { IPost } from 'src/entities/posts';

export const GET_POSTS = 'GET_POSTS';

export interface IPosts{
    GET_POSTS:{
        postList: IPost[];
    };
};