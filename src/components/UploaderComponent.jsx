import React, { Fragment, useEffect, useState } from 'react'
import firebase, { storage } from '../firebase'
import Card from './CardComponent/CardComponent'
import { Notification } from './GlobalStyles'
import Image from './ImageComponent/ImageComponent'
import Progress from './ProgressComponent/ProgressComponent'

export default function Uploader(){
  
  const [render, setRender] = useState(true)
  const [upload, setUpload] = useState(0)
  const [image, setImage] = useState(null)
  const [error, setError] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    if ( image ) {
      const storageRef = storage.ref(`imagenes/${image.name}`);
      const task = storageRef.put(image);
      
      task.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          var progresion = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUpload( progresion )
        },
        (err) =>{if( err ) setError(err)},
        () => {
          storage
            .ref("imagenes")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setUpload(0);
            });
        }
      );
    }else setError("No file available");
  }, [image]);

  const fileSelectedHandler = (event) => {
    setRender(false);

    const file = event.target.files[0];

    if( file ){
      const fileType = file["type"];
      const validTypes = ["image/png", "image/jpeg"]

      if( validTypes.includes(fileType) ){
        setError("");
        setImage(file);
      }else setError("Incorrect file type")
    }else setError("No file were selected")
  }

  const onFileDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setRender(false)
    
    const file = event.dataTransfer.files[0];
    console.log( file )
    if( file ){
      const fileType = file["type"];
      const validTypes = ["image/png", "image/jpeg"]

      if( validTypes.includes(fileType) ){
        setError("");
        setImage(file);
      }else setError("Incorrect file type")
    }else setError("No file were selected")
  }

  const onFileEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
  }

  const onFileOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <Fragment>
      {render ? (
        <Fragment>
          <Card
            uploadImage={fileSelectedHandler}
            filedrop={onFileDrop}
            fileenter={onFileEnter}
            fileover={onFileOver}
          />
        </Fragment>
      ) : error ? (
        <Fragment>
          <Card
            uploadImage={fileSelectedHandler}
            filedrop={onFileDrop}
            fileenter={onFileEnter}
            fileover={onFileOver}
          />
          <Notification alert="danger">
            <p>{error}</p>
          </Notification>
        </Fragment>
      ) : url ? (
        <Image Url={url} />
      ) : (
        <Progress progress={upload} />
      )}
    </Fragment>
  );
}
