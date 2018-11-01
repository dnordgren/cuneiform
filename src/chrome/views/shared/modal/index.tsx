import { connect } from 'react-redux';

import { AppState } from '../../../store/index';

import Modal from './modal';

interface StateProps {
  isOpen: boolean;
  title: string;
  body: string;
}

export type ModalProps = StateProps;

const mapStateToProps = (state: AppState) => ({
  isOpen: state.overlay.enabled,
  title: state.overlay.title,
  body: state.overlay.body,
});

const connectedModal = connect(
  mapStateToProps,
)(Modal);

export default connectedModal;
