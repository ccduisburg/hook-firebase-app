import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const  firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: ",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  class Firebase {
      constructor(){
          app.initializeApp(firebaseConfig);
          this.auth=app.auth();
          this.db=app.firestore();
      }
       login(email,passw){
        return this.auth.signInWithEmailAndPassword(email,passw)
        }
        logout(){
            return this.auth.signOut();
        }

        async register(name,email,passw){//during register submit user does not affect any wait 
            await this.auth.createUserWithEmailAndPassword(email,passw)
             return this.auth.currentUser.updateProfile({
                 displayName:name
             })
            
        }
        takimEkle(takim){
            if(!this.auth.currentUser){
                return alert('User not sign in')
            }
            return this.db.doc(`aos/${this.auth.currentUser.uid}`).set({
                takim:takim
            })
        }
        durumKontrol(){
            return new Promise(durum=>{
                this.auth.onAuthStateChanged(durum)
              })
        }

        getUserName(){
            return this.auth.currentUser && this.auth.currentUser.displayName
        }
       
       async getFotballFan(){
           const belge=await this.db.doc(`aos/${this.auth.currentUser.uid}`).get()
           return belge.get('takim')
        }
  }
  export default new Firebase();
  
