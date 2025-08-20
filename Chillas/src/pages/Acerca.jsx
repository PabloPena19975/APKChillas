import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

export default function Acerca() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Acerca de Chilla’s Art</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Chilla’s Art</h2>
        <p>
          Estudio indie japonés formado por dos hermanos desde 2019. Son
          conocidos por sus <strong>horror games cortos</strong> con estética retro –
          al estilo PS1 y VHS –, que combinan terror psicológico, leyendas urbanas
          y atmósferas escalofriantes.
        </p>
        <p>
          Desde su fundación, han publicado más de 15 títulos, incluyendo «The
          Convenience Store», «The Closing Shift», «Parasocial» y otros,
          muchos de los cuales se han vuelto populares en la comunidad de
          streamers de horror y jugadores en todo el mundo.
        </p>
        <p>
          Su método creativo es rápido y eficaz: desarrollan ideas con agilidad y
          aprovechan la inspiración que encuentran en paisajes cotidianos japoneses,
          como túneles y teléfonos públicos, para generar atmósferas inquietantes.
        </p>
        <p>
          Además, sus juegos suelen contar con finales múltiples —desde
          trágicos hasta ambiguos—, reforzando el impacto emocional y la tensión.
        </p>
      </IonContent>
    </IonPage>
  );
}
