// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN-V7uFtesghR4PNr4Oa2TTCVZM23-8Jw",
  authDomain: "meu-primeiro-firebase-83b80.firebaseapp.com",
  projectId: "meu-primeiro-firebase-83b80",
  storageBucket: "meu-primeiro-firebase-83b80.firebasestorage.app",
  messagingSenderId: "894297627106",
  appId: "1:894297627106:web:fe27f66a5c332c15e2c1bb"
};

firebase.initializeApp(firebaseConfig);

import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    const snapshot = await nomesCollection.get();

    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    setNomes(data);
  };

  fetchData();
  }, []);

  return (
    <View style = {{ flex: 1, justifyContent: 'center',
      alignItems: 'center'}}>
        <Text>Lista de Nomes:</Text>
        <FlatList
          data={nomes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{<item.Nomes} {item.Sobrenome}</Text>
          )
      </View>
  )


}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

