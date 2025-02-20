"use client";
import React, { Component } from "react";

// import { writeJsonFile } from "write-json-file";

// await writeJsonFile("foo.json", { foo: true });

export default class ReadTextFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      data: "",
    };
    this.showFile = this.showFile.bind(this);
  }

  showFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var preview = document.getElementById("show-text");
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();

      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = (event)=> {
          
          preview.innerHTML = event.target.result;
          this.setState({ data: preview.innerHTML });
        };
      } else {
        preview.innerHTML =
          "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.data !== prevState.data) {
      console.log(this.state.data);
    }
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.showFile} />
        <div id="show-text">Choose text File</div>
      </div>
    );
  }
}
