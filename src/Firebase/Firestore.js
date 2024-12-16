import { firestore } from "./FirebaseConfig";
import {
  updateDoc,
  getDoc,
  getDocs,
  doc,
  collection,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export default class FireStore {
  createPost = async (title, imageLink, postBody, id) => {
    let result = { val: null, code: null };
    await setDoc(doc(firestore, "Posts", id), {
      title: title,
      image: imageLink,
      content: postBody,
      timeStamp: new Date().getTime(),
    })
      .then((val) => {
        result = { val: val, code: 0 };
      })
      .catch((err) => {
        result = { val: err, code: 1 };
      });

    return result;
  };

  updatePost = async (title = "", imageLink = "", postBody = "", id) => {
    let result = { val: null, code: null };
    let update = {
      title: title,
      image: imageLink,
      content: postBody,
      timeStamp: new Date().getTime(),
    };
    if (title === "") {
      delete update["title"];
    }
    if (imageLink === "") {
      delete update["image"];
    }
    if (postBody === "") {
      delete update["postBody"];
    }
    await updateDoc(doc(firestore, "Posts", id), update)
      .then((val) => {
        result = { val: val, code: 0 };
      })
      .catch((err) => {
        result = { val: err, code: 1 };
      });
    return result;
  };

  deletePost = async (id) => {
    let result = { val: null, code: null };
    await deleteDoc(doc(firestore, "Posts", id))
      .then((val) => {
        result = { val: val, code: 0 };
      })
      .catch((err) => {
        result = { val: err, code: 1 };
      });
    return result;
  };

  getPosts = async () => {
    let result = { val: null, code: null };
    await getDocs(collection(firestore, "Posts"))
      .then((val) => {
        result = { val: val, code: 0 };
      })
      .catch((err) => {
        result = { val: err, code: 1 };
      });
    return result;
  };

  getPost = async (id) => {
    let result = { val: null, code: null };
    await getDoc(doc(firestore, "Posts", id))
      .then((val) => {
        result = { val: val, code: 0 };
      })
      .catch((err) => {
        result = { val: err, code: 1 };
      });
    return result;
  };
}
