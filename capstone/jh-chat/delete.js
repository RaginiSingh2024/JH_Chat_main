export function deleteMessage(docID) {
    try {
        firebase
            .firestore()
            .collection('jh-chat').doc(docID).delete();
    } catch (e) {
        console.error("Error message: " + e);
    }
}


