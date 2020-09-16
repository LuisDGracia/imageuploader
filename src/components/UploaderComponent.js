import React, { Fragment, Component } from 'react'
import { storage } from '../firebase'
import DragDrop from './CardComponent'

export default class Uploader extends Component {

  constructor(props){
    super(props)

    this.state = {
      progress: 0,
      image: null,
      error: "",
      url: ""
    }

    this.fileSelectedHandler = this.fileSelectedHandler.bind()
  }

  componentDidMount(){
    this.setState({
      progress: 0,
      image: null,
      error: "",
      url: "",
    });
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  fileSelectedHandler = async (event) => {

    const file = event.target.files[0];
    
    if( file ){
      const fileType = file["type"];
      const validTypes = ["image/png", "image/jpeg"]

      if( validTypes.includes(fileType) ){
        await this.setState({ error: "" });
        await this.setState({ ...this.state, image: file });
      }else await this.setState({ error: "Incorrect file type"})

    }else await this.setState({ error: "No file were selected"})

    if (this.state.image) {
      const storageRef = storage.ref(`imagenes/${this.state.image.name}`);
      const task = storageRef.put(this.state.image);

      task.on(
        "state_changed",
        async (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          await this.setState({ progress: progress });
        },
        async (err) => await this.setState({ error: err }),
        () => {
          storage
            .ref("imagenes")
            .child(this.state.image.name)
            .getDownloadURL()
            .then( async (url) => {
              await this.setState({ url: url });
              await this.setState({ progress: 0 });
            });
        }
      );
    } else await this.setState({ error: "No image available" });
  }

  render(){
    return (
      <Fragment>
        <DragDrop upload={ this.fileSelectedHandler } />
      </Fragment>
    )
  }
}
