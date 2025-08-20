import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Bienvenida from './Bienvenida';
import Explora from './Explora';
import Acerca from './Acerca';
import Favoritos from './Favoritos';
import Contacto from './Contacto';
import ListaContactos from './ListaContactos';

import { home, planet, informationCircle, heart, mail } from 'ionicons/icons';

export default function Tabs({
  favoritos,
  onAddFavorito,
  onRemoveFavorito,
  contactos,
  onAddContacto
}) {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes>
          <Route path="bienvenida" element={<Bienvenida />} />
          <Route path="explora" element={<Explora onAddFavorito={onAddFavorito} />} />
          <Route path="favoritos" element={<Favoritos favoritos={favoritos} onRemoveFavorito={onRemoveFavorito} />} />
          <Route path="contacto" element={<Contacto onAddContacto={onAddContacto} />} />
          <Route path="mensajes" element={<ListaContactos contactos={contactos} />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="*" element={<Navigate to="/bienvenida" />} />
        </Routes>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="bienvenida" href="/bienvenida">
          <IonIcon icon={home} />
          <IonLabel>Bienvenida</IonLabel>
        </IonTabButton>

        <IonTabButton tab="explora" href="/explora">
          <IonIcon icon={planet} />
          <IonLabel>Explora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="favoritos" href="/favoritos">
          <IonIcon icon={heart} />
          <IonLabel>Favoritos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="contacto" href="/contacto">
          <IonIcon icon={mail} />
          <IonLabel>Contacto</IonLabel>
        </IonTabButton>

        <IonTabButton tab="acerca" href="/acerca">
          <IonIcon icon={informationCircle} />
          <IonLabel>Acerca</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
