export async function addMsg(name, text) {
    try {
        let result = await firebase
            .firestore()
            .collection("mz-chat")
            .add({name, text});


        if (result) {
            console.log("document added!");
        }
    } catch (e) {
        console.log(e);
    }
}

