import React, {Component} from 'react';
import CafeCard from "./CafeCard";
import {NavLink} from 'react-router-dom';
import {getData} from "../actions";
import connect from 'react-redux/es/connect/connect';

class Cafe extends Component {

    componentDidMount() {
        this.props.getdata();
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
                <h1 className="cafeTitle">SOFO Cafe Review List</h1>
                <ul className="cafeList">
                    {cafeList}
                    <li className="card" id="buttoncard">
                        <NavLink className="addBtn" to='/add'>
                            <i className="icons">
                            <i className="pencil alternate icon"></i>
                            <i className="bottom right corner add icon"></i>
                            </i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
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
};

export default connect(mapStateToProps,mapDispatchToProps)(Cafe)
