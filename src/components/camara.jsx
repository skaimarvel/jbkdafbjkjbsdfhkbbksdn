import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import '../css/camara.css'; // Importa tus estilos CSS aquí

const firebaseConfig = {
  // ... Tu configuración de Firebase ...
  apiKey: "AIzaSyC4qa-X9JIKcUqT1lk5eNkSjoGlv01YRF4",
  authDomain: "imgsitas.firebaseapp.com",
  projectId: "imgsitas",
  storageBucket: "imgsitas.appspot.com",
  messagingSenderId: "988788936396",
  appId: "1:988788936396:web:40c1ba7700322a27033c69"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const CameraComponent = () => {
  const [stream, setStream] = useState(null);
  const [photoSrc, setPhotoSrc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Función para iniciar la cámara
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      setStream(mediaStream);
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };

  // Función para tomar una foto
  const takePhoto = () => {
    if (stream) {
      const video = document.createElement('video');
      video.srcObject = stream;

      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convertir la captura en una Blob
        canvas.toBlob(async (blob) => {
          try {
            const photoURL = URL.createObjectURL(blob);
            setPhotoSrc(photoURL);
            setShowModal(true);

            // Detener la cámara
            stopCamera();

            // Subir la imagen a Firebase Storage
            const storageRef = storage.ref();
            const photoRef = storageRef.child(`fotos/${Date.now()}.jpg`);
            await photoRef.put(blob);

            // Incrementar el contador de imágenes
            setImageCount(imageCount + 1);

            // Verificar si se han guardado dos imágenes
            if (imageCount === 1) {
              // Redirigir a la nueva página después de guardar dos imágenes
              navigate('/nueva-pagina'); // Reemplaza '/nueva-pagina' con la URL de tu nueva página
            }
          } catch (error) {
            console.error('Error al procesar la foto:', error);
          }
        }, 'image/jpeg');
      };
    }
  };

  const acceptPhoto = () => {
    // Tu código para aceptar la foto (puede mantenerse igual)
    // ...

    // Muestra un mensaje
    alert('Imagen Guardada, Ahora tome la parte trasera');

    // Oculta la ventana modal
    setShowModal(false);

    // Vuelve a iniciar la cámara
    startCamera();
  };

  const cancelPhoto = () => {
    // Tu código para cancelar la foto (puede mantenerse igual)
    // ...

    // Oculta la ventana modal
    setShowModal(false);

    // Vuelve a iniciar la cámara
    startCamera();
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="camera-container">
      <h1>Tomar Foto</h1>
      <button className="start-camera" onClick={takePhoto}>Tomar Foto</button>

      {showModal && (
        <div className="modal">
          <img className="photo-preview" src={photoSrc} alt="Foto tomada" />
          <div className="buttons-container">
            <button className="accept-photo" onClick={acceptPhoto}>Aceptar</button>
            <button className="cancel-photo" onClick={cancelPhoto}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
