import React from 'react';
import Style from './Modules/Modal.module.sass'
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickModal() {
    this.setState({isModalOpen: true});
  }

  // handleClickCloseメソッドを定義してください
  handleClickClose(){
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className={Style.modal}>
          <div className={Style.inner}>
          <div className={Style.header}></div>
            <div className={Style.introduction}>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className={Style.closeBtn}
              onClick= {()=> {this.handleClickClose()}}
            >
              Close
            </button>
            <div
              className={Style.closeIcon}
              onClick= {()=> {this.handleClickClose()}}>
              x
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='modal-card'>
        <div
          className='modal-item'
          onClick={() => {this.handleClickModal()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Modal;
