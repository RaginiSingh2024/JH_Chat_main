export function updateMsg(docId, name, text) {
    try{
        let result = firebase.firestore().collection('mz-chat').doc(docId).update({ name, text })
        if (result){
            console.log('updated')
        }
    }catch(e){
        console.log('error', e)
    }
}