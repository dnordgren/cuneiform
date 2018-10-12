import { connect } from 'react-redux';

import { AppState } from '../../../store/stateTypes';

import Modal from './modal';

const mapStateToProps = (state: AppState) => {
  return {
    isOpen: state.overlay.enabled,
  };
};

const connectedModal = connect(
  mapStateToProps,
)(Modal);

export default connectedModal;
