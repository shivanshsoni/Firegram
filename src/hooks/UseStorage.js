import { projectStorage, projectFirestore, timestamp } from "../firebase/config"
import { useState, useEffect } from "react"

function UseStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect( () =>{
        //references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const urls = await storageRef.getDownloadURL()
            collectionRef.add({ url: urls, createdAt: timestamp()})
            setUrl(urls)
        })
    }, [file])

    return { progress, url, error }

}

export default UseStorage