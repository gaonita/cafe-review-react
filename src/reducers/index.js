import {REQUEST, SUCCESS,DELETE, EDIT} from '../actions';

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
        default:
            return state;
    }
};

export default cafeReducer

