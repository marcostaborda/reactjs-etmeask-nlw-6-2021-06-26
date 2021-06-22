import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_ApiKey}`,
  authDomain: `${process.env.REACT_APP_AuthDomain}`,
  databaseURL: `${process.env.REACT_APP_DatabaseURL}`,
  projectId: `${process.env.REACT_APP_ProjectId}`,
  storageBucket: `${process.env.REACT_APP_StorageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_MessagingSenderId}`,
  appId: `${process.env.REACT_APP_AppId}`
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();