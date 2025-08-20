import { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast
} from '@ionic/react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [contactos, setContactos] = useState([]);

  // Cargar datos guardados al iniciar
  useEffect(() => {
    console.log("Página cargada");
    const datosGuardados = localStorage.getItem('contactos');
    if (datosGuardados) {
      setContactos(JSON.parse(datosGuardados));
    }
  }, []);

  // Guardar en localStorage cada vez que cambian los contactos
  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  const handleEnviar = () => {
    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Validar formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    const nuevoContacto = { nombre, correo, mensaje };
    setContactos([...contactos, nuevoContacto]);

    setToastVisible(true);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput value={nombre} onIonChange={e => setNombre(e.detail.value || '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo electrónico</IonLabel>
          <IonInput type="email" value={correo} onIonChange={e => setCorreo(e.detail.value || '')} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Mensaje</IonLabel>
          <IonTextarea rows={5} value={mensaje} onIonChange={e => setMensaje(e.detail.value || '')} />
        </IonItem>

        <IonButton expand="block" color="primary" onClick={handleEnviar}>
          Enviar
        </IonButton>

        <IonToast
          isOpen={toastVisible}
          onDidDismiss={() => setToastVisible(false)}
          message="Mensaje guardado correctamente."
          duration={2000}
          position="bottom"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
}
