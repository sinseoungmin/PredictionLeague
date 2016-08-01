import React from 'react';
import Dialog from 'material-ui/dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import firebase from 'firebase';

import { connect } from 'react-redux';

const style = {
  text: {
    width: '100%'
  }
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {id: '', pw: ''}
  }

  handleClose() {
    console.log('close')
    this.props.dispatch({
      type:'LOGIN_MODAL',
      on: false
    });
  }

  render() {

    var actions = [
      <FlatButton
        label={'로그인'}
        keyboardFocused={true}
        primary={true}
        onTouchTap={ ()=>{
          firebase.auth().signInWithEmailAndPassword(this.state.id, this.state.pw).then( res => {
            this.props.dispatch({
              type:'LOGIN_MODAL',
              on: false
            });
          }).catch(function(error) {
            console.log(error)
          });
        }}
      />,
      <FlatButton
        label={'취소'}
        primary={true}
        onTouchTap={ ()=>{
          this.handleClose();
        }}
      />,
    ];

    return (
      <div>
        <Dialog
          title='여의도밥 로그인'
          actions={actions}
          modal={false}
          open={this.props.type === 'login'}
          onRequestClose={this.handleClose}
        >
        <TextField
          style={style.text}
          floatingLabelText="아이디"
          value={this.state.id}
          onChange={e => {this.setState({id: e.target.value})}}
        /><br/>
        <TextField
          style={style.text}
          floatingLabelText="비밀번호"
          value={this.state.pw}
          type="password"
          onChange={e => {this.setState({pw: e.target.value})}}
        /><br/>
        <RaisedButton
          label="이 아이디로 가입"
          secondary={true}
          style = {{marginTop: '20px'}}
          onTouchTap={ ()=>{
            firebase.auth().createUserWithEmailAndPassword(this.state.id, this.state.pw).then( res => {
              alert('가입되었습니다')
              this.props.dispatch({
                type:'LOGIN_MODAL',
                on: false
              });
            }).catch(function(error) {
              console.log(error)
            });
          }}
        />
        <RaisedButton label="페이스북 로그인" primary={true} style = {{marginTop: '20px'}}/>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.modal.type
  }
}

module.exports = connect(mapStateToProps)(Login);
