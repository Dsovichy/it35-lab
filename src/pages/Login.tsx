import { 
  IonButton,
  IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter, 
    IonInput,
    IonItem, 
    IonList,
    IonInputPasswordToggle
} from '@ionic/react';

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
      <IonContent className='ion-padding'>

      <IonItem>
        <IonInput label="Email:" labelPlacement="stacked" placeholder="Enter your email"></IonInput>
      </IonItem>

      <IonInput type="password" label="Password" value="">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>

          <IonButton onClick={() => doLogin()} expand="full">
              Login
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;