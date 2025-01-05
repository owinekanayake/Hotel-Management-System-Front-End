import app from "../config/firebase"
import { getStorage } from "firebase/storage";

const storage = getStorage(app, "gs://my-custom-bucket");

export default storage;