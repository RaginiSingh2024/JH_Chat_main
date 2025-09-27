const db = firebase.firestore();

async function getDocs(collectionName) {
  try {
    const snapshot = await db.collection(collectionName).get();
    if (snapshot.empty) {
      console.log("No documents found");
    }

    let docs = snapshot.forEach(doc => {
      console.log("Fetched docs:", doc.data());
    })

    console.log("Fetched docs:", docs);
  } catch (e) {
    console.error(`Error getting documents: ${e}`);
    throw e;
  }
}

async function getSingleDoc(collectionName, docId) {
  try {
    const docRef = db.collection(collectionName).doc(docId);
    const doc = await docRef.get();

    if (!doc.exists) {
      console.log("No such document!");
    }

    console.log("Fetched doc:", doc.data());
  } catch (e) {
    console.error(`Error getting single document: ${e}`);
  }
}

async function createDocs(collectionName, data) {
  try {
    const docRef = await db.collection(collectionName).add({ data });
    console.log("Document created with ID:", docRef.id);
  } catch (e) {
    console.error(`Error creating document: ${e}`);
  }
}

async function updateDocs(collectionName, docId, newData) {
  try {
    const docRef = db.collection(collectionName).doc(docId);
    await docRef.update({ newData });
    console.log("Document updated:", docId);
  } catch (e) {
    console.error(`Error updating document: ${e}`);
  }
}

async function deleteDocs(collectionName, docId) {
  try {
    await db.collection(collectionName).doc(docId).delete();
    console.log("Document deleted:", docId);
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
