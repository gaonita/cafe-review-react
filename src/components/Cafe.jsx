import React, {Component} from 'react';
import CafeCard from "./CafeCard";
import {NavLink} from 'react-router-dom';
import {getData} from "../actions";
import connect from 'react-redux/es/connect/connect';

class Cafe extends Component {

    componentDidMount() {
        this.props.getdata();

        // const db = firestore();
        // const self = this;

        // db.collection("cafe")
        //     .onSnapshot(function (collection) {
        //         //const firebasedata = collection.docs
        //         //const rawdata = collection.docs.map(doc => doc.data())
        //
        //          const data = collection.docs.map(doc => {
        //             // Add id to object, copy properties from existing object)
        //             const documentData = doc.data();
        //             return { ...documentData, id: doc.id}
        //         });
        //
        //         //re-render
        //         self.setState({cafes: data});
        //     });
    }


    render() {
        const {cafes} = this.props;
        let cafeList = cafes.map(cafe => {
            return (
                <CafeCard cafe={cafe} key={cafe.id}/>
            )
        });
        return (
            <div>
                <h1 className="cafeTitle">
                    SOFO Cafe Review List
                </h1>
                <ul className="cafeList">
                    {cafeList}
                    <li className="card" id="buttoncard">
                        <NavLink className="addBtn" to='/add'>+</NavLink>
                    </li>
                </ul>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        cafes: state.cafes,
        isFetching: state.isFetching
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getdata: () => {
            dispatch(getData())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cafe)
