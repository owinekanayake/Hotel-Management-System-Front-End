import app from "../config/firebase"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app, "gs://hotel-management-1a316.firebasestorage.app");

export default function uploadMedia(file){
    if(file== null) {
        return;
    }

    const fileRef = ref(storage, file.name);
    uploadBytes(fileRef,file).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
            console.log(url);
        })
        
    })
}

