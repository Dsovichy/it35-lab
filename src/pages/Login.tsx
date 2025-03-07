import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import Pokelogo from './Images/Pokelogo.png'; 

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
      navigation.push('/it35-lab/app','forward','replace');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <img
          src={Pokelogo} 
          alt="Logo"
          style={{ width: '150px', margin: '70px auto', display: 'block' }}
        />
        
      <IonInput label="Email" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ marginTop: '100px' }}></IonInput>

<br />

<IonInput label="Password" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>

          <IonButton onClick={() => doLogin()} expand="full">
              Login
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;