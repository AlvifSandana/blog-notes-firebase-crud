import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

// toast configuration
const toastOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      type: '',
      text: ''
    };
  }

  toastFailed() {
    toast.error(this.props.text, toastOption);
  }

  toastSuccess() {
    toast.success(this.props.text, toastOption);
  }

  toastWarning() {
    toast.warning(this.props.text, toastOption);
  }

  componentDidMount() {
    switch (this.props.type) {
      case 'success':
        this.toastSuccess();
        break;
      case 'failed':
        this.toastFailed();
        break;
      case 'warning':
        this.toastWarning();
        break;
      default:
        this.toastSuccess();
        break;
    }
  }

  render() {
    return (
      <ToastContainer />
    )
  }
}

export default new Toast();