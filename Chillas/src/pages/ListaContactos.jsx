import { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

export default function ListaContactos() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    console.log("Página Lista de Contactos cargada");
    const datosGuardados = localStorage.getItem('contactos');
    if (datosGuardados) {
      setContactos(JSON.parse(datosGuardados));
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mensajes Recibidos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {contactos.length === 0 ? (
          <p>No hay mensajes guardados.</p>
        ) : (
          <IonList>
            {contactos.map((c, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{c.nombre} ({c.correo})</h2>
                  <p>{c.mensaje}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
}
    