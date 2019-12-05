import {REQUEST, SUCCESS,DELETE, EDIT, FETCH} from '../actions/types';

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
        case EDIT:
            console.log(action.name);
            return {...state, isFetching:false,
            cafes: state.cafes.map(doc=> doc.id === action.docId? {...doc, name:action.name} : {...doc})};
        case FETCH:
            return {...state, isFetching:false,
            cafes: [action.cafeDoc]};
            // cafes: [ ...state.cafes, action.cafeDoc]};
        default:
            return state;
    }
};

export default cafeReducer

