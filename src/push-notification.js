import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-IbMlaRCpe9ywQ2Ts2YmLGCDOQtyZZa8",
  authDomain: "headless-12f0d.firebaseapp.com",
  databaseURL: "https://headless-12f0d.firebaseio.com",
  projectId: "headless-12f0d",
  storageBucket: "headless-12f0d.appspot.com",
  messagingSenderId: "186890154052",
  appId: "1:186890154052:web:395c9e8f14a4643f"
};

export const initializeFirebase = () => {
  console.log('initializeFirebase')
  firebase.initializeApp(firebaseConfig);

  // use other service worker
  // navigator.serviceWorker
  //   .register('/my-sw.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {


    console.log('askForPermissioToReceiveNotifications')
    
    const permissionResult = await Notification.requestPermission();
    let token = null;
    if (permissionResult) {
      const messaging = firebase.messaging();
      token = await messaging.getToken();
      console.log('user token: ', token);
    }

    return token;
  } catch (error) {
    //console.error(error);
  }
}
