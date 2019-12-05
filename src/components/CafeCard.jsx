import React, {Component} from 'react';
import {deleteDoc} from '../actions';
import {editDoc} from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CafeCard extends Component {
    constructor(props) {
        super(props);
        this.myRef =React.createRef();
    }

    state = {
        editing: false,
        cafeName: this.props.cafe.name
    };

    deleteById = () => {
        this.props.deletedoc(this.props.cafe.id)
    };

    toggleEdit = (e) => {
        e.stopPropagation();
        if (this.state.editing) {
            this.cancel();
        } else {
            this.editName();
        }
    };

    editName = () => {
        this.setState({editing: true},
            () => {this.myRef.current.focus()}
        )};

    save = () => {
        this.setState({
            editing: false,
            cafeName: this.myRef.current.textContent
        }, () => {
            if (this.isValueChanged()) {
                this.props.editdoc(this.props.cafe.id, this.state.cafeName);
            }
        });
    };

    cancel = () => {
        this.setState({editing: false});
        console.log('editing canceled');
    };

    isValueChanged = () => {
        return this.props.cafe.name !== this.myRef.current.textContent;
    };

    handleKeyDown = (e) => {
        const {key} = e;
        switch (key) {
            case 'Enter':
                this.save();
                break;
            default:
                break
        }
    };

    render() {
        const {editing} = this.state;
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
                            ref={this.myRef}
                            onBlur={this.save}
                            onKeyDown={this.handleKeyDown}
                        >{cafe.name}</h4>
                        <p className="li-address">{cafe.address}</p>
                        <p className="li-sustainability">Sustainability Score: {cafe.sustainability}</p>
                        <p className="li-description">{cafe.description}</p>
                    </div>
                    <button className="editBtn">
                        <Link to={`/cafe/${cafe.id}`} cafe={cafe}>
                        Detail
                        </Link>
                    </button>

                </div>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deletedoc: (docId) => {
            dispatch(deleteDoc(docId))
        },
        editdoc: (docId, cafeName) => {
            dispatch(editDoc(docId, cafeName))
        }
    }
};

export default connect(null, mapDispatchToProps)(CafeCard)



