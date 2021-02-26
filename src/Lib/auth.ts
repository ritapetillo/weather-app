import firebase from "./firebase";
import axios from "axios";
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const signIn = async () => {
  const firebaseSign = await firebase.auth();
  const sign = await firebaseSign.signInWithPopup(provider);
  return sign;
};

export const signInAxios = async (profile: {}) => {
  const res = await axios.post("http://localhost:3001/api/users/login", {
    data: profile,
  });
  return res;
};
