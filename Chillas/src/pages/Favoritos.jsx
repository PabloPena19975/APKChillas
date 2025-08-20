import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonIcon
} from '@ionic/react';
import { cartOutline, trashOutline } from 'ionicons/icons';
import { useState } from 'react';

// Reutilizamos el ajuste automático de imágenes
function GameImage({ src, alt }) {
  const [isHorizontal, setIsHorizontal] = useState(false);

  const handleImageLoad = (e) => {
    const img = e.target;
    setIsHorizontal(img.naturalWidth > img.naturalHeight);
  };

  return (
    <IonImg
      src={src}
      alt={alt}
      onLoad={handleImageLoad}
      style={{
        width: '100%',
        maxHeight: '200px',
        objectFit: isHorizontal ? 'cover' : 'contain',
        borderRadius: '8px',
        backgroundColor: '#000'
      }}
    />
  );
}

export default function Favoritos({ favoritos, onRemoveFavorito }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mis Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>⭐ Juegos que te encantan</h2>

        {favoritos.length === 0 ? (
          <p>No tienes juegos en favoritos todavía.</p>
        ) : (
          favoritos.map((juego) => (
            <IonCard key={juego.id}>
              <div style={{ textAlign: 'center', padding: '10px' }}>
                <GameImage src={juego.imagen} alt={juego.titulo} />
              </div>
              <IonCardHeader>
                <IonCardTitle>{juego.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {juego.descripcion}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <IonButton color="danger" onClick={() => onRemoveFavorito(juego.id)}>
                    <IonIcon icon={trashOutline} slot="start" />
                    Quitar
                  </IonButton>
                  <IonButton color="success">
                    <IonIcon icon={cartOutline} slot="start" />
                    Comprar
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
}
