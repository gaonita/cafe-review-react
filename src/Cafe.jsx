import React, {Component} from 'react';
import {firestore} from "firebase";
import CafeCard from "./CafeCard";
import {Switch, Route, NavLink} from 'react-router-dom';
import Main from "./Main";


class Cafe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafes: []
        }
    }

    componentDidMount() {
        const db = firestore()
        const self = this
        db.collection("cafe")
            .onSnapshot(function (collection) {
                //const firebasedata = collection.docs
                //const rawdata = collection.docs.map(doc => doc.data())
                const data = collection.docs.map(doc => {
                    // Add id to object, method 1
                    const documentData = doc.data()
                    documentData.id = doc.id
                    return documentData

                    // Add id to object, method 2 (copy properties from existing object)
                    //const documentData = doc.data()
                    //return { ...documentData, id: doc.id}
                })

                //const data = collection.docs.map(doc => doc.data())

                //re-render
                self.setState({cafes: data});
            });
    }


    render() {
        //       const cafes = this.state.cafes
        //       const employees = this.state.employees
        const {cafes} = this.state;
        console.log(cafes);

        let cafeList = cafes.map(cafe => {
            return (
                    <CafeCard cafe={cafe}/>
            )
        })
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

export default Cafe
