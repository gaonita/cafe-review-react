import React, {Component} from 'react';
import {deleteDoc} from '../actions';
import {connect} from 'react-redux';
// import {firestore} from "firebase";

class CafeCard extends Component {

    // delete = () => {
    //     const  db= firestore();
    //     db.collection('cafe').doc(this.props.cafe.id).delete().then(function () {
    //         console.log("Document deleted");}).catch(function (error) {
    //             console.log("Error", error);
    //     })
    // };

    deleteById = () => {
        this.props.deletedoc(this.props.cafe.id)
    };

    render(){
        const cafe = this.props.cafe;
            return (
                <li>
                    <div className="card" key={cafe.id} style={{minHeight: '150px'}}>
                        <div className="li-img">
                            <img src={cafe.imgurl} alt="Alt"/>
                        </div>
                        <div className="li-text">
                            <h4 className="li-head" contentEditable="true">{cafe.name}</h4>
                            <p className="li-address">{cafe.address}</p>
                            <p className="li-sustainability">Sustainability Score: {cafe.sustainability}</p>
                            <p className="li-description">{cafe.description}</p>
                        </div>

                        <button className="deleteBtn"
                                onClick={this.deleteById}>
                            Delete
                            <span className="warningtext">
                            Warning! delete all contents</span>
                        </button>
                    </div>
                </li>
            )
        }
}



const mapDispatchToProps = (dispatch) => {
    return{
        deletedoc: (docId) => {
            dispatch(deleteDoc(docId))
        }
    }
};

export default connect(null, mapDispatchToProps)(CafeCard)



