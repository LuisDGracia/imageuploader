import React, { Fragment, Component } from 'react'
import { storage } from '../firebase'
import Card from './CardComponent/CardComponent'

export default class Uploader extends Component {

  constructor(props){
    super(props)

    this.state = {
      render: true,
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

  fileSelectedHandler = async (event) => {

    this.setState({
      render: false
    })

    const file = event.target.files[0];
    
    if( file ){
      const fileType = file["type"];
      const validTypes = ["image/png", "image/jpeg"]

      if( validTypes.includes(fileType) ){
        await this.setState({ error: "" });
        await this.setState({ ...this.state, image: file });
      }else return await this.setState({ error: "Incorrect file type"})

    }else return await this.setState({ error: "No file were selected"})

    if (this.state.image) {
      const storageRef = storage.ref(`imagenes/${this.state.image.name}`);
      const task = storageRef.put(this.state.image);

      task.on(
        "state_changed",
        (snapshot) => {
          var progress = 0
          if( snapshot.metadata){
            for (let i = 0; i <= 100; i+= 0.5) {
                progress = i
                this.setState({ progress: progress });
            }
          }
        },
        async (err) => await this.setState({ error: err }),
        () => {
          storage
            .ref("imagenes")
            .child(this.state.image.name)
            .getDownloadURL()
            .then( (url) => {
              this.setState({ url: url });
              this.setState({ progress: 0 });
            });
        }
      );
    } else return await this.setState({ error: "No image available" });
  }

  render(){
    return (
      <Fragment>
        {this.state.render ? (
          <Card upload={this.fileSelectedHandler} />
        ) : this.state.error ? (
          <p style={{ color: "red", margin: "0 auto" }}>{this.state.error}</p>
        ) : this.state.progress > 0 ? (
          <progress style={{ margin: "0 auto" }}></progress>
        ) : this.state.url ? (
          <p style={{ margin: "0 auto" }}>{this.state.url}</p>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}
