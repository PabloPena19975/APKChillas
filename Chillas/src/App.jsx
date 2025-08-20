import React, { useState, useEffect } from 'react';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Tabs from './pages/Tabs';

setupIonicReact();

export default function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [contactos, setContactos] = useState([]);

  // Cargar datos al iniciar
  useEffect(() => {
    const favsGuardados = localStorage.getItem('favoritos');
    if (favsGuardados) setFavoritos(JSON.parse(favsGuardados));

    const contactosGuardados = localStorage.getItem('contactos');
    if (contactosGuardados) setContactos(JSON.parse(contactosGuardados));
  }, []);

  // Guardar favoritos
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Guardar contactos
  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  // Funciones de favoritos
  const agregarFavorito = (juego) => {
    if (!favoritos.find(f => f.id === juego.id)) {
      setFavoritos([...favoritos, juego]);
    }
  };
  const eliminarFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f.id !== id));
  };

  // Función para agregar un nuevo contacto
  const agregarContacto = (nuevoContacto) => {
    setContactos([...contactos, nuevoContacto]);
  };

  return (
    <IonApp>
      <IonSplitPane contentId="main-content">
        {/* Menú lateral */}
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menú</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/bienvenida" routerDirection="none">Inicio</IonItem>
              <IonItem routerLink="/explora" routerDirection="none">Explora Videojuegos</IonItem>
              <IonItem routerLink="/favoritos" routerDirection="none">Favoritos</IonItem>
              <IonItem routerLink="/contacto" routerDirection="none">Contacto</IonItem>
              <IonItem routerLink="/mensajes" routerDirection="none">Mensajes Recibidos</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* Todas las rutas van dentro de Tabs */}
        <IonRouterOutlet id="main-content">
          <Routes>
            <Route
              path="/*"
              element={
                <Tabs
                  favoritos={favoritos}
                  onAddFavorito={agregarFavorito}
                  onRemoveFavorito={eliminarFavorito}
                  contactos={contactos}
                  onAddContacto={agregarContacto}
                />
              }
            />
            <Route path="*" element={<Navigate to="/bienvenida" />} />
          </Routes>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}
