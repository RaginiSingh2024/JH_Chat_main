export async function Upload(mediaFile) {
//     create ref to the root/bucket
    const bucketRef = firebase.storage().ref()
// create ref for folder
    const folderRef = bucketRef.child('media')
// create ref fot media file
    const fileRef = folderRef.child(mediaFile.name)
    console.log(mediaFile.name)
// ref put()
    await fileRef.put(mediaFile)
    const url = await fileRef.getDownloadURL()
    console.log("access here", url)
}