import firebase from "firebase/app";
import "firebase/database";

const db = firebase.database();

async function getDocs(path) {
  try {
    const snapshot = await db.ref(path).once("value");
    if (!snapshot.exists()) {
      console.log("No data found");
    }
    snapshot.forEach((child) => {
      console.log("Fetched doc:", child.key, child.val());
    });
  } catch (e) {
    console.error(`Error getting documents: ${e}`);
  }
}

async function getSingleDoc(path, id) {
  try {
    const snapshot = await db.ref(`${path}/${id}`).once("value");
    if (!snapshot.exists()) {
      console.log("No such document!");
    }
    console.log("Fetched doc:", snapshot.val());
  } catch (e) {
    console.error(`Error getting single document: ${e}`);
  }
}

async function createDocs(path, data) {
  try {
    const ref = await db.ref(path).push(data);
    console.log("Document created with ID:", ref.key);
  } catch (e) {
    console.error(`Error creating document: ${e}`);
  }
}

async function updateDocs(path, id, newData) {
  try {
    await db.ref(`${path}/${id}`).update(newData);
    console.log("Document updated:", id);
  } catch (e) {
    console.error(`Error updating document: ${e}`);
  }
}

async function deleteDocs(path, id) {
  try {
    await db.ref(`${path}/${id}`).remove();
    console.log("Document deleted:", id);
  } catch (e) {
    console.error(`Error deleting document: ${e}`);
  }
}

export const functionObject = {
  getDocs,
  getSingleDoc,
  createDocs,
  updateDocs,
  deleteDocs,
};
