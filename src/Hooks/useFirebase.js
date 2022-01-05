import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [googleLoginError, setGoogleLoginError] = useState('');
    const [googleRegisterError, setGoogleRegisterError] = useState('');

    const auth = getAuth();

    const sendUserToDatabase = (fetchData) => {
        fetch('https://api-picshore.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchData)
        })
        .then(res => res.json())
        .then(data => {  })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });

    }

    const accessWithGoogle = (history, redirected_uri, method) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then(result => {
            setGoogleLoginError('');
            setGoogleRegisterError('');
            setUser(result.user);
            if (method === 'login') {
                const putData = {fullName: result.user.displayName, email: result.user.email, userImg: result.user.photoURL};
                sendUserToDatabase(putData);
            }
            else if (method === 'register') {
                const putData = {fullName: result.user.displayName, email: result.user.email, userImg: result.user.photoURL, isAdmin: false};
                sendUserToDatabase(putData);
            }
            history.push(redirected_uri);
        })
        .catch((error) => {
            if (error) {
                if (method === 'login') {
                    setGoogleLoginError(error.code);
                    setGoogleRegisterError('');
                    setLoginError('');
                    setRegisterError('');
                }
                else if (method === 'register') {
                    setGoogleRegisterError(error.code);
                    setGoogleLoginError('');
                    setLoginError('');
                    setRegisterError('');
                }
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const updateDetailsOnForm = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(() => { setRegisterError(''); })
          .catch((error) => { 
              if (error) {
                setRegisterError(error.code);
                setGoogleLoginError('');
                setLoginError('');
                setGoogleRegisterError('');
              }
           });
    }

    const registerWithMail = (fullName, email, password, history, redirected_uri) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setRegisterError('');
            const newUser = {...result.user};
            newUser.displayName = fullName;
            setUser(newUser);
            updateDetailsOnForm(fullName);
            const putData = {fullName: fullName, email: email, isAdmin: false};
            sendUserToDatabase(putData);
            history.push(redirected_uri);
        })
        .catch((error) => { 
            if (error) {
                setRegisterError(error.code);
                setGoogleLoginError('');
                setLoginError('');
                setGoogleRegisterError('');
            }
         })
        .finally(() => {
            setIsLoading(false);
        });
    };

    const loginWithMail = (email, password, history, redirected_uri) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setLoginError('');
            setUser(result.user);
            history.push(redirected_uri);
        })
        .catch((error) => {
            if (error) {
                setLoginError(error.code);
                setGoogleLoginError('');
                setGoogleRegisterError('');
                setRegisterError('');
            }
         })
        .finally(() => {
            setIsLoading(false);
        });
    };

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
    }, [auth]);

    useEffect(() => {
        setIsAdminLoading(true);
        fetch(`https://api-picshore.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data?.isAdmin))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        })
        .finally(() => setIsAdminLoading(false));
    }, [user?.email]);

    const logOut = () => {
        setLoginError('');
        setRegisterError('');
        setGoogleLoginError('');
        setGoogleRegisterError('');
        setIsLoading(true);
        signOut(auth)
        .then(() => {  })
        .catch(error => {
            if (error) {
                setLoginError(error.code);
                setRegisterError(error.code);
                setGoogleLoginError(error.code);
                setGoogleRegisterError(error.code);
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return {
        user,
        isAdmin,
        isAdminLoading,
        isLoading,
        loginError,
        registerError,
        googleLoginError,
        googleRegisterError,
        setUser,
        setIsLoading,
        setIsAdmin,
        setIsAdminLoading,
        registerWithMail,
        loginWithMail,
        accessWithGoogle,
        logOut
    }
}

export default useFirebase;