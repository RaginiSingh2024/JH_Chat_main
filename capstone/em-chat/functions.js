export async function addMsg(name, text) {
    try {
        let result = await firebase
            .firestore()
            .collection("chat")
            .add({ name, text });

        if (result) {
            console.log("document added!");
        }
    } catch (e) {
        console.log(e);
    }
}

function getMsg() {
    firebase
        .firestore()
        .collection("chat")
        .onSnapshot((changes) => {
            changes.docChanges().forEach((change) => {
                // fetching msg
                if (change.type === "added") {
                    //para.innerText += `${change.doc.data().name}: ${change.doc.data().text}\n`;
                    let pElement = document.createElement("p"); // creating new p tag
                    pElement.setAttribute("id", change.doc.id);
                    pElement.innerText = `${change.doc.data().name}:${change.doc.data().text
                        }`;

                    // delete button
                    let delBtn = document.createElement("button"); // creating new delete button
                    delBtn.innerText = "Delete Msg";

                    //update button
                    let updateButton = document.createElement("button");
                    updateButton.setAttribute("id", 'updatedBtn');
                    updateButton.innerText = "Update Msg";

                    //get the div
                    let chatContainer = document.getElementById("chats");
                    // append to div
                    chatContainer.appendChild(pElement);
                    chatContainer.appendChild(delBtn);
                    chatContainer.appendChild(updateButton);

                     updateButton.onclick = () => {
                        // get the message and send to input field
                        let getpara = document.getElementById(change.doc.id).innerText;
                        // innerText name : message
                        let docId = change.doc.id;
                        console.log(docId);

                        let [oldname, oldmsg] = getpara.split(":")
                        console.log(oldname, oldmsg);

                        document.getElementById('user-name').value = oldname;
                        document.getElementById('user-text').value = oldmsg;
                        

                        window.golbalUid = change.doc.id;
                    }; 

                    if (change.doc.id) {
                        let newname = document.getElementById('user-name').value;
                        let newmsg = document.getElementById('user-text').value;
                        document.getElementById('btn').addEventListener('click', myfunction.updateMsg(docId, newname, newmsg))
                    }

                    delBtn.onclick = () => deleteMsg(change.doc.id);
                } else if (change.type === "removed") {
                    document.getElementById(change.doc.id).remove();

                    // remove the delete button
                    document.getElementById(`${change.doc.id}-delBtn`)?.remove();

                    // remove the update button
                    document.getElementById(`${change.doc.id}-updateBtn`)?.remove();
                }
            });
        });
}

async function updateMsg(name, text, uid) {
    try {
       let updateDoc = await firebase.firestore().collection('em-chat').doc(uid).update({
            name,
            text
        })

        if (updateDoc) {
            console.log('document updated!');
        }
    }catch(e){
        console.log(e);
    }

}

export const myfunction = {
    addMsg,
    getMsg,
    updateMsg

}