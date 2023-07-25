import { auth } from "./FirebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Cookies from "universal-cookie";

export default class Auth {
  #cookie = new Cookies();
  signIn = async (email, password) => {
    let result = { code: null, val: null };
    await signInWithEmailAndPassword(auth, email, password)
      .then((val) => {
        this.#cookie.set("login", true);
        result = { code: 0, val: val };
      })
      .catch((err) => {
        result = { code: 1, val: err };
      });
    return result;
  };

  logOut = async () => {
    let result = { code: null, val: null };
    await signOut(auth)
      .then((val) => {
        this.#cookie.remove("login");
        window.location.href = "/blog";
      })
      .catch((err) => {
        result = { code: 1, val: err };
      });
    return result;
  };
}
