import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {  })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        googleSignIn,
        logOut
    }
}

export default useFirebase;