import {REQUEST, SUCCESS,DELETE} from '../actions';

const defaultState = {
    cafes:[],
    isFetching: false
};


const cafeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST:
            return {...state, isFetching: true};
        case SUCCESS:
            console.log(action.payload);
            return {...state, isFetching: false, cafes: action.payload};
        case DELETE:
            return {...state, isFetching:false,
                cafes: state.cafes.filter(doc => doc.id !== action.docId)};
        default:
            return state;
    }
};

export default cafeReducer

