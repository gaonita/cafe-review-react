import {firestore} from "firebase";

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const DELETE = 'DELETE';

export const requestData = () => ({
    type: REQUEST
});

export const success = (cafeData) => ({
    type: SUCCESS,
    payload: cafeData
});

export const deleteData = (docId) => ({
    type: DELETE,
    docId:docId
});

export const deleteDoc = (docId) => {
    return async dispatch => {
        // const deletedArr = [];
        const promise = firestore().collection('cafe').doc(docId).delete();

        const callback = querySnapshot => {
            // querySnapshot.forEach(doc => {
            //     const deletedData = doc.data();
            //     const deletedDataWithId = {...deletedData, id:doc.id};
            //     deletedArr.push(deletedDataWithId)
            // });
            dispatch(deleteData(docId))
        };
        promise.then(callback).catch(error => console.error(error))
    }
};

export const getDataPromise = () => {
    return async dispatch => {
        dispatch(requestData());
        const documentArr = [];
        const promise = firestore().collection('cafe').get();
        const onFinishedCallbackFunction = querySnapshot => {
            querySnapshot.forEach(doc => documentArr.push(doc.data()));
            dispatch(success(documentArr))
        };
        // promise.then is called when the operation is successful
        promise.then(onFinishedCallbackFunction)
            .catch(error => console.error(error));

        // operation is not finished yet in async
        console.log(documentArr)
    }
};


// Synchronous - async / await:
// next statement is dependent to previous statement
//an operation that you initiated on any line of code will always finish before you get to the next line of code!
export const getData = () => {
    return async dispatch => {
        dispatch(requestData());
        const documentArr = [];
        const querySnapshot = await firestore().collection('cafe').get();
        querySnapshot.forEach(doc => {
            const docData = doc.data();
            const docDataWithId = {...docData, id: doc.id};
            documentArr.push(docDataWithId);
        });
        // const idArray = querySnapshot.docs.map(doc => doc.id);
        // const documentArrWithId = documentArr.map(doc => {
        //     const docWithId = {...doc};
        //     return {...docWithId, id:idArray[documentArr.indexOf(doc)]}
        // });

        dispatch(success(documentArr))
    }
};


// const promise = new Promise((resolve, reject) => {
//     setTimeout({
//         resolve()
//     }, 5000)
// }).then();


// Asynchronous - promises