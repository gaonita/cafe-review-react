import React, {Component} from 'react';
import {firestore} from "firebase";

class CafeCard extends Component {

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this)
    }


    delete() {
        const  db= firestore()
        db.collection('cafe').doc(this.props.cafe.id).delete()
    }


    render(){
        const cafe = this.props.cafe

        return (
            <li>
                <div className="card" key={cafe.id} style={{minHeight: '150px'}}>
                    <div className="li-img">
                        <img src={cafe.imgurl} alt="image Alt"/>
                    </div>
                    <div className="li-text">
                        <h4 className="li-head">{cafe.name}</h4>
                        <p className="li-address">{cafe.address}</p>
                        <p className="li-sustainability">Sustainablitiy Score: {cafe.sustainability}</p>
                        <p className="li-description">{cafe.description}</p>
                    </div>
                    <button className="deleteBtn" onClick={this.delete}>Delete
                        <span className="warningtext">
                            Warning! delete all contents. you can't undo it after</span>
                    </button>
                </div>
            </li>

        )
    }
}



export default CafeCard



