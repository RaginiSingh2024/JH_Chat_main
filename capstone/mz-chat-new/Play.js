export const Play = async (mediaFile) => {
    const rootRef = firebase.storage().ref();
    const folderRef = rootRef.child("folder");
    const fileRef = folderRef.child(mediaFile.name);
    console.log(fileRef.name);
    await fileRef.put(mediaFile);
    const url = await fileRef.getDownloadURL();
    console.log(url)
}