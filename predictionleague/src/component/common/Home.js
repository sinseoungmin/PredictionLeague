import React from 'react'
import { Link } from 'react-router'
import utils from '../../utils'

const test = ()=>{
    console.log('test');
}

var Home = React.createClass({
  componentDidMount(){
    utils.naviColor();

    /*
    var opt = {
        img: $('#img_preview'),
        w: 200,
        h: 200
    };

    $('#input_file').setPreview(opt);
    */

  },
  test(){
      console.log('클릭');


        var storageRef = firebase.storage().ref();
        var imagesRef = storageRef.child('images');

        var fileName = 'space.jpg';
        var spaceRef = imagesRef.child(fileName);

        var path = spaceRef.fullPath;
        var name = spaceRef.name;
        var imagesRef = spaceRef.parent;

        var file = $('#input_file').get(0).files[0];
        console.log('file');


        var metadata = {
          contentType: 'image/jpeg'
        };
        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed', // or 'state_changed'
          function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function() {
          // Upload completed successfully, now we can get the download URL
          var downloadURL = uploadTask.snapshot.downloadURL;
        });

  },
  render() {
      /*
      $.fn.setPreview = function(opt){
          "use strict"
          var defaultOpt = {
              inputFile: $(this),
              img: null,
              w: 200,
              h: 200
          };
          $.extend(defaultOpt, opt);

          var previewImage = function(){
              if (!defaultOpt.inputFile || !defaultOpt.img) return;

              var inputFile = defaultOpt.inputFile.get(0);
              var img       = defaultOpt.img.get(0);

              // FileReader
              if (window.FileReader) {
                  // image 파일만
                  if (!inputFileget(0).files[0].type.match(/image\//)) return;

                  // preview
                  try {
                      var reader = new FileReader();
                      reader.onload = function(e){
                          img.src = e.target.result;
                          img.style.width  = defaultOpt.w+'px';
                          img.style.height = defaultOpt.h+'px';
                          img.style.display = '';
                      }
                      reader.readAsDataURL(inputFile.files[0]);
                  } catch (e) {
                      // exception...
                  }
              // img.filters (MSIE)
              } else if (img.filters) {
                  inputFile.select();
                  inputFile.blur();
                  var imgSrc = document.selection.createRange().text;

                  img.style.width  = defaultOpt.w+'px';
                  img.style.height = defaultOpt.h+'px';
                  img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
                  img.style.display = '';
              // no support
              } else {
                  // Safari5, ...
              }
          };

          // onchange
          $(this).change(function(){
              previewImage();
          });
      };
      */

      let self = this;
    return (
      <div id = 'homeContainer'>
        <h3> This is Home </h3>
        <div onClick={self.test}>test</div>
        <input type="file" id="input_file"></input>
        <img id="img_preview" style={{"display":"none"}}/>
      </div>
    );
  }
});

module.exports = Home;
