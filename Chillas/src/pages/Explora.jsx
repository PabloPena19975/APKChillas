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
  IonIcon,
  IonToast,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { starOutline, cartOutline, arrowUpCircle } from 'ionicons/icons';
import { useState, useRef, useEffect } from 'react';

// Componente para manejar imágenes con ajuste automático
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
        maxHeight: '190px',
        objectFit: isHorizontal ? 'cover' : 'contain',
        borderRadius: '8px',
        backgroundColor: '#000'
      }}
    />
  );
}

export default function Explora({ onAddFavorito }) {
  const [mensaje, setMensaje] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const contentRef = useRef(null);

  const juegos = [
    {
      id: 1,
      titulo: 'Parasocial',
      descripcion: 'Parasocial | パラソーシャル es un juego de terror japonés sobre un streamer en vivo...',
      imagen: '/parasocial.jpg'
    },
    {
      id: 2,
      titulo: 'The Closing shift',
      descripcion: 'The Closing Shift | 閉店事件 es un juego de terror japonés sobre una chica en su turno de cierre...',
      imagen: '/closingShift.jpg'
    },
    {
      id: 3,
      titulo: 'Okaeri',
      descripcion: 'Una buena aventura de terror con una atmósfera escalofriante...',
      imagen: '/okaeri.jpg'
    }
  ];

  const agregarFavorito = (juego) => {
    onAddFavorito(juego);
    setMensaje(`${juego.titulo} añadido a favoritos`);
    setShowToast(true);
  };

  const comprarJuego = (juego) => {
    setMensaje(`¡Has comprado ${juego.titulo}!`);
    setShowToast(true);
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(500);
    }
  };

  // Mostrar el FAB solo si el scroll baja más de 300px
  const handleScroll = (event) => {
    const scrollTop = event.detail.scrollTop;
    setShowFab(scrollTop > 300);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.addEventListener('ionScroll', handleScroll);
    }
    return () => {
      if (content) {
        content.removeEventListener('ionScroll', handleScroll);
      }
    };
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Explora Videojuegos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent ref={contentRef} className="ion-padding" scrollEvents={true}>
        <h2>🎮 Catálogo de Videojuegos</h2>

        {juegos.map((juego) => (
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
                <IonButton color="warning" onClick={() => agregarFavorito(juego)}>
                  <IonIcon icon={starOutline} slot="start" />
                  Favorito
                </IonButton>
                <IonButton color="success" onClick={() => comprarJuego(juego)}>
                  <IonIcon icon={cartOutline} slot="start" />
                  Comprar
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        ))}

        {/* FAB visible solo si showFab es true */}
        {showFab && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="tertiary" onClick={scrollToTop}>
              <IonIcon icon={arrowUpCircle} />
            </IonFabButton>
          </IonFab>
        )}

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={mensaje}
          duration={1500}
        />
      </IonContent>
    </IonPage>
  );
}
