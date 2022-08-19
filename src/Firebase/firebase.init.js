import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
steps for authentication
------------------------
Step-1: Initial Setup
1.firebase: create project
2.enable auth-provider method
3.create web app
4.get config
5.initialize firebase
-------------------------
Step-2:set up component
1.create Login Component
2.create Register Component
3.create Route for Login and Register
--------------------------
Step-3:set Auth system
1.set up sign-in method
2.set up sign-out method
3.declare user state
4.special observer(onAuthStateChanged)
5.must have to return all methods and states from useFirebase
----------------------------
Step-4:create auth context hook (useAuth)
1.create a auth context
2.create context Provider
3.set context Provider context value
4.use Auth Provider
5.create useAuth Hook
-----------------------------
Step-5:create private Route
1.create private Route
2.set private Route
------------------------------
Step-6: Redirect after login
1.after login redirect user to their desired destination
*/