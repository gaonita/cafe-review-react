import React, {useState} from 'react'
import {firestore} from "firebase";
import {Redirect} from "react-router-dom"
import {Button, Slider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ScoreSlider from "./ScoreSlider/ScoreSlider";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(5),
            width: '50vw',
            display:'flex',
            flexDirection: 'column',
        }
    }
}))

const Add = (props) => {
    // const [finished, setFinished] = useState(false)
    const [cafeInfo, setCafeInfo] = useState({})

    function submit(event) {
        event.preventDefault();
        const db = firestore();
        db.collection('cafe').add(cafeInfo);
        return <Redirect to='/cafe'/>
    }

    const classes = useStyles();
    return (
        <div className="addPage">
            <h1 className="addTitle"> New Cafe Review</h1>
            <form className={classes.root}>
                {/*<div className="addForm">*/}
                    <TextField id={'textField'}
                               label={"Cafe name"}
                               required={true}
                               value={cafeInfo.name}
                               onChange={(e) => {
                                   setCafeInfo({...cafeInfo, name: e.target.value})
                               }}/>

                    <TextField id={'textField'}
                               label={"address"} required={true}
                               value={cafeInfo.address}
                               onChange={(e) => {
                                   setCafeInfo({...cafeInfo, address: e.target.value})
                               }}
                    />

                    <TextField id={'textField'}
                               label={'description'}
                               multiline={true} rows={2}
                               value={cafeInfo.description}
                               onChange={(e) => {
                                   setCafeInfo({...cafeInfo, description: e.target.value})
                               }}
                               variant={"outlined"}
                    />

                    <ScoreSlider id={'textField'}
                                 onValueChange={(value) => setCafeInfo({...cafeInfo, sustainability: value})}/>

                    <TextField id={'textField'}
                               label={'image url'}
                               value={cafeInfo.imgurl}
                               onChange={(e) => {
                                   setCafeInfo({...cafeInfo, imgurl: e.target.value})
                               }}
                    />

                    <Button variant='contained'
                            color='primary'
                            style={{background: '#3Ad0aa'}}
                            onClick={submit}>
                        Submit</Button>
                {/*</div>*/}
            </form>
        </div>
    );
};

export default Add;
//
// class Add extends Component {
//     constructor(props) {
//         super(props);
//
//         const componentInstance = this;
//         componentInstance.submit =
//             componentInstance.submit.bind(componentInstance);
//
//         componentInstance.state = {
//             finished: false
//         }
//     }

// submit(event) {
//     event.preventDefault();
//     console.log(this);
//
//     const db = firestore();
//     const cafename = document.getElementById('cafename').value;
//     const cafeaddress = document.getElementById('cafeaddress').value;
//     const cafedescription = document.getElementById('cafedescription').value;
//     const cafesustainability = document.getElementById('cafedsustainability').value;
//     const cafeimg = document.getElementById('cafeimgurl').value;
//
//     const cafe = {
//         name: cafename,
//         address: cafeaddress,
//         description: cafedescription,
//         sustainability: cafesustainability,
//         imgurl: cafeimg
//     };
//
//     db.collection('cafe').add(cafe);
//     this.setState({finished: true});
//     return false
// }

//
// render()
// {
//
//     if (this.state.finished === true) {
//         return <Redirect to='/cafe'/>
//     }
//
//     return (
//         <div className="addPage">
//             <h1 className="addTitle"> New Cafe Review
//             </h1>
//
//             <div className="addForm">
//                 <form onSubmit={this.submit}>
//                     <div className="formDetail">
//                         <input required type='text' id="cafename" className="inputfield" placeholder="Cafe name"/>
//                         <input required type='text' id="cafeaddress" className="inputfield" placeholder="Address"/>
//                         <textarea required type='text' id="cafedescription" className="inputfield"
//                                   placeholder="DESCRIPTION"/>
//                         <input required type='number' id="cafedsustainability" className="inputfield" min="1"
//                                max="10" placeholder="Sustainability score (1-10)"/>
//                         <input required type='text' id="cafeimgurl" className="inputfield"
//                                placeholder="Cafe image address(url)"/>
//                         <button id="submit" type="submit">Add to list</button>
//
//                     </div>
//
//                 </form>
//
//             </div>
//         </div>
//     )
// }
// }

// export default Add
