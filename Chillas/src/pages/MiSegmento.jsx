import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { useState } from 'react';

export default function MiSegmento() {
    const [valor, setValor] = useState('opcion1');

    return (
    <IonSegment value={valor} onIonChange={e => setValor(e.detail.value)}>
        <IonSegmentButton value="opcion1">
        <IonLabel>Tours</IonLabel>
        </IonSegmentButton>
        
        <IonSegmentButton value="opcion2">
        <IonLabel>Conoce nuestra Agencia</IonLabel>
        </IonSegmentButton>
    </IonSegment>
    );
}
