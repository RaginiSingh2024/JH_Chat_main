export function getMsg() {
    firebase
        .firestore()
        .collection("mz-chat")
        .orderBy("text")
        .onSnapshot((changes) => {
            changes.docChanges().forEach((change) => {
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
                    updateButton.innerText = "Update Msg";

                    //get the div
                    let chatContainer = document.getElementById("chats");
                    // append to div
                    chatContainer.appendChild(pElement);
                    chatContainer.appendChild(delBtn);
                    chatContainer.appendChild(updateButton);

                    updateButton.onclick = () => {
                        // get the element -> inner Text

                        let [name, text] = pElement.innerText.split(":");
                        console.log(`name is ${name} & text is ${text}`);

                        document.getElementById("user-name").value = name;
                        document.getElementById("user-text").value = text;

                        window.docId = change.doc.id;


                    };

                    //delBtn.onclick = () => deleteMsg(change.doc.id);
                    delBtn.onclick = () => {
                        firebase.firestore().collection("mz-chat").doc(change.doc.id).delete();
                      };

                } else if (change.type === "removed") {
                    document.getElementById(change.doc.id).remove();

                    // remove the delete button
                    document.getElementById(`${change.doc.id}-delBtn`)?.remove();

                    // remove the update button
                    document.getElementById(`${change.doc.id}-updateBtn`)?.remove();
                } else if (change.type === "modified") {
                    document.getElementById(change.doc.id).innerText = `${change.doc.data().name}:${change.doc.data().text}`
                }
            });
        });
}