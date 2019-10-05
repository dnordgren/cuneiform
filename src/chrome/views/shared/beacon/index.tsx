import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setOverlayBody } from '../../../store/actions/setOverlayBody';
import { setOverlayTitle } from '../../../store/actions/setOverlayTitle';
import { toggleOverlayEnabled } from '../../../store/actions/toggleOverlayEnabled';
import { Dispatch } from '../../../store/index';

import Beacon from './beacon';

interface OwnProps {
  title: string;
  body: string;
}

interface DispatchProps {
  setOverlayTitle: (title: string) => void;
  setOverlayBody: (title: string) => void;
  toggleOverlayEnabled: () => void;
}

export type BeaconProps = OwnProps & DispatchProps;

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps & OwnProps => {
  const actionProps = bindActionCreators({
    setOverlayTitle,
    setOverlayBody,
    toggleOverlayEnabled,
  }, dispatch);

  return {
    ...actionProps,
    title: ownProps.title,
    body: ownProps.body,
  };
};

const connectedBeacon = connect(
  null,
  mapDispatchToProps,
)(Beacon);

export default connectedBeacon;
