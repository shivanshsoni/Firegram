import { useState } from "react"
import React from "react"
import ProgressBar from "./ProgressBar"
function UploadForm() {

    const [error, setError] = useState(null)
    const [file, setFile]  = useState(null)

    const allowTypes = ["image/png", "image/jpeg", "image/jpg"]
    const HandleChange = (e) =>{
        let upload = e.target.files[0]
        console.log(upload)
        if(upload && allowTypes.includes(upload.type)){
            setFile(upload)
            setError('')
        } 
        else {
            setError("Please upload valid file format(jpeg, png or jpg")
            setFile(null)
        }
    }

    return(
        <form>
            <input type = "file" onChange = { HandleChange }/>
            <div className = "output">
                { error && <div className = "error">{error}</div> }
                { file && <div> { file.name }</div>} 
                { file && <ProgressBar file = {file} setFile = {setFile} />}
            </div>
        </form>
    )
}

export default UploadForm