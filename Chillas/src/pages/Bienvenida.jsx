import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonAlert
} from '@ionic/react';
import { useState } from 'react';
import { add, gameController, call, alertCircle } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

export default function Bienvenida() {
  const [segmentValue, setSegmentValue] = useState('novedades');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Chilla's Art</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {/* Imagen de portada */}
        <IonImg
          src="/chillas-foto.jpg"
          alt="Portada GameZone"
          style={{ maxHeight: '60vh', objectFit: 'cover' }}
        />

        {/* Texto superpuesto */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.4)',
            padding: '1rem',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '500px'
          }}
        >
          <h1>Chilla's Art</h1>
          <p>Explora, descubre y guarda tus proximos videojuegos favoritos.</p>
        </div>

        {/* Segmento para alternar contenido */}
        <IonSegment
          value={segmentValue}
          onIonChange={e => setSegmentValue(e.detail.value || 'novedades')}
          className="ion-margin-top"
        >
          <IonSegmentButton value="novedades">
            <IonLabel>Novedades</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sobre">
            <IonLabel>Sobre Chilla's Art</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Contenido de "Novedades" */}
        {segmentValue === 'novedades' && (
          <div className="ion-padding-top">
            <h3>Últimos Noticias:</h3>
            <p>
              Solo 2 hermanos haciendo juegos de terror japoneses. Mis hermanos hacen juegos de terror domésticos.
            </p>
            <p>❌DM/ ⭕️Sitio web</p>
            <p>correo: https: // chillasart.co.jp</p>
            <p>Contacto: support@chillasart.co.jp </p>
          </div>
        )}

        {/* Contenido de "Sobre GameZone" */}
        {segmentValue === 'sobre' && (
          <div className="ion-padding-top">
            <h3>¿Qué es Chilla's Art?</h3>
            <p>
              Chilla's Art es un estudio independiente de desarrollo de videojuegos japonés,
              conocido por crear juegos de terror atmosféricos y de corta duración,
              a menudo con estética VHS. Se especializan en experiencias de terror psicológico
              y con elementos inspirados en el cine de terror japonés. 
            </p>
          </div>
        )}

      </IonContent>
    </IonPage>
  );
}
