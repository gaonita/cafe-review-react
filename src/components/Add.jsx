import React, {Component} from 'react'
import {firestore} from "firebase";
import {Redirect} from "react-router-dom"


class Add extends Component {
    constructor(props) {
        super(props);

        const componentInstance = this;
        componentInstance.submit =
            componentInstance.submit.bind(componentInstance);

        componentInstance.state = {
            finished: false
        }
    }

    submit(event) {
        event.preventDefault();
        console.log(this);

        const db = firestore();
        const cafename = document.getElementById('cafename').value;
        const cafeaddress = document.getElementById('cafeaddress').value;
        const cafedescription = document.getElementById('cafedescription').value;
        const cafesustainability = document.getElementById('cafedsustainability').value;
        const cafeimg = document.getElementById('cafeimgurl').value;

        const cafe = {
            name: cafename,
            address: cafeaddress,
            description: cafedescription,
            sustainability: cafesustainability,
            imgurl: cafeimg
        };

        db.collection('cafe').add(cafe);
        this.setState({finished: true});
        return false
    }


    render() {

        console.log(this.state);
        if (this.state.finished === true) {
            return <Redirect to='/cafe'/>
        }

        return (
            <div className="addPage">
                <h1 className="addTitle"> New Cafe Review
                </h1>

                <div className="addForm">
                    <form onSubmit={this.submit}>
                        <div className="formDetail">
                            <input required type='text' id="cafename" className="inputfield" placeholder="Cafe name"/>
                            <input required type='text' id="cafeaddress" className="inputfield" placeholder="Address"/>
                            <textarea required type='text' id="cafedescription" className="inputfield"
                                   placeholder="DESCRIPTION"/>
                            <input required type='number' id="cafedsustainability" className="inputfield" min="1"
                                   max="10" placeholder="Sustainability score (1-10)"/>
                            <input required type='text' id="cafeimgurl" className="inputfield"
                                   placeholder="Cafe image address(url)"/>
                            <button id="submit" type="submit">Add to list</button>

                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

export default Add
