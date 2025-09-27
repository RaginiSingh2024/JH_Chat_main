import { deleteMessage } from "./delete.js";

export function getMsg() {
    firebase
        .firestore()
        .collection('jh-chat')
        .onSnapshot(changes => {
            changes.docChanges().forEach((change, i) => {
                console.log('change: ', change)
                if (change.type === 'added') {
                    let pTag = document.createElement('p');
                    let editbuttonTag = document.createElement('button');
                    editbuttonTag.textContent = "edit";

                    let deletebuttonTag = document.createElement('button');
                    deletebuttonTag.textContent = "delete";
                    deletebuttonTag.setAttribute("id", "button-" + i)

                    console.log(`Here Message : ${change.doc.id}`);
                    pTag.innerText = `Message : ${change.doc.data().message}`;

                    let chatContainer = document.getElementById('chat');

                    chatContainer.appendChild(pTag);
                    chatContainer.appendChild(editbuttonTag);
                    chatContainer.appendChild(deletebuttonTag);
                    deletebuttonTag.addEventListener('click', () => {
                        deleteMessage(change.doc.id);
                    })
                } else if (change.type === 'removed') {
                    document.getElementById('chat').innerHTML = "";
                    getMsg();
                }
            })
        })
}