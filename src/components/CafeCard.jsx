import React, {Component} from 'react';
import {deleteDoc} from '../actions';
import {editDoc} from "../actions";
import {connect} from 'react-redux';

class CafeCard extends Component {
    state = {
        editing: false,
        cafeName: this.props.cafe.name
    };

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

    toggleEdit = (e) => {
        e.stopPropagation();
        if(this.state.editing){
            this.cancel();
        }else {
            this.editName();
        }
    };

    editName = () => {
       this.setState({
           editing: true
       }, () => {this.domElm.focus()})
    };

    save = (event) => {
        this.setState({
            editing: false,
            cafeName: this.domElm.textContent
        }, () => {
            if(this.isValueChanged()){
                console.log('value is changed  ', this.domElm.textContent);
                this.props.editdoc(this.props.cafe.id, this.state.cafeName);
            }
        });
    };

    cancel = () => {
        this.setState({
            editing: false
        });
        console.log('editing canceled');

    };

    isValueChanged = () => {
        return this.props.value !== this.domElm.textContent
    };

    handleKeyDown = (e) => {
        const {key} = e;
        switch (key) {
            case 'Enter':
            case 'Escape':
                this.save();
                break;
            default:
                break
        }
    };

    render(){
        let editOnClick = true;
        const {editing} = this.state;
        if(this.props.editOnClick !== undefined){
            editOnClick = this.props.editOnClick;
        }

        const cafe = this.props.cafe;
            return (
                <li>
                    <div className="card" key={cafe.id} style={{minHeight: '150px'}}>
                        <div className="li-img">
                            <img src={cafe.imgurl} alt="Alt"/>
                        </div>

                        <div className="li-text">
                            <h4 id="li-head"
                                className={editing ? 'editing' : ''}
                                contentEditable={editing}
                                onClick={editOnClick? this.toggleEdit : undefined}
                                ref = {(domNode) => {this.domElm = domNode;}}
                                onBlur={this.save}
                                onKeyDown={this.handleKeyDown}
                                >{cafe.name}</h4>

                            <p className="li-address">{cafe.address}</p>
                            <p className="li-sustainability">Sustainability Score: {cafe.sustainability}</p>
                            <p className="li-description">{cafe.description}</p>
                        </div>

                        <button className="deleteBtn"
                                onClick={this.deleteById}>
                            Delete
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
        },
        editdoc: (docId, cafeName) => {
            dispatch(editDoc(docId, cafeName))
        }
    }
};

export default connect(null, mapDispatchToProps)(CafeCard)



