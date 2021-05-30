import { ISinglePhoto } from 'src/entities/userPhotos';
import * as actionTypes from 'src/actions/actionTypes/photoTypes';

export interface IPhotosReducer{
    photoList: ISinglePhoto[];
};

const defaultState = (): IPhotosReducer => ({
    photoList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_PHOTOS: {
            const payload: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return{
                ...state,
                photoList: payload.photoList
            }
        }
        default:{
            return state;
        }
    }
};