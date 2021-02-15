import firebase from './firebase'

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const signIn = async () => {
    
    const firebaseSign = await firebase.auth()
    const sign = await firebaseSign.signInWithPopup(provider)
    return sign
}