import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchDoc, deleteDoc, editDoc} from "../actions";

class Detail extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }

    componentDidMount() {
        this.props.fetchdoc(this.props.match.params.id);
    }

    deleteById = () => {
        this.props.deletedoc(this.props.match.params.id)
    };

    state = {
        editing: false,
        cafeName: ''
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
            () => {
                this.myRef.current.focus()
            }
        )
    };

    save = () => {
        this.setState({
            editing: false,
            cafeName: this.myRef.current.textContent
        }, () => {
            if (this.isValueChanged()) {
                this.props.editdoc(this.props.match.params.id, this.state.cafeName);
            }
        });
    };

        cancel = () => {
            this.setState({editing: false});
            console.log('editing canceled');
        };

        isValueChanged = () => {
           return this.props.cafes[0].name !== this.myRef.current.textContent;
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
        const index = this.props.cafes.findIndex(item => item.id === this.props.match.params.id);
        const data = this.props.cafes[index];
        console.log(this.props.cafes);
        if (!data) {
            return <div>Loading....</div>
        }
        return (
            <div className="detail">
                <div className="card">
                    <div className="li-img">
                        <img src={data.imgurl} alt="Alt"/>
                    </div>
                    <div className="li-text">
                        <h4 id="id-text"
                            onClick={this.toggleEdit}
                            className={editing ? 'editing' : ''}
                            contentEditable={editing}
                            ref={this.myRef}
                            onBlur={this.save}
                            onKeyDown={this.handleKeyDown}>
                            {data.name}
                        </h4>
                        <p className="li-address">{data.address}</p>
                        <p className="li-sustainability">Sustainability Score: {data.sustainability}</p>
                        <p className="li-description">{data.description}</p>
                    </div>
                    <button className="deleteBtn" onClick={this.toggleEdit}>
                        Edit
                    </button>
                    <button className="deleteBtn" onClick={this.deleteById}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cafes: state.cafes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchdoc: (docId) => {
            dispatch(fetchDoc(docId))
        },
        deletedoc: (docId) => {
            dispatch(deleteDoc(docId))
        },
        editdoc: (docId, cafeName) => {
            dispatch(editDoc(docId, cafeName))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
