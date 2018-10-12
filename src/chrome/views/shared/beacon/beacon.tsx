import * as React from 'react';

const beaconStyles = {
  width: '2rem',
  height: '2rem',
  color: 'rgba(19,41,63,.8)'
};

export default class Beacon extends React.Component {
  render () {
    /* tslint:disable:max-line-length */
    return (
      <div style={beaconStyles}>
        <svg viewBox="0 0 32 32" aria-labelledby="informationTitle" role="img" fillRule="evenodd">
          <title id="informationTitle">information</title>
          <path fill="inherit" d="M3 16C3 8.831 8.832 3 16 3c7.169 0 13 5.831 13 13 0 7.168-5.831 13-13 13-7.168 0-13-5.832-13-13zm11.143-6.964c0 1.029.828 1.857 1.857 1.857a1.853 1.853 0 0 0 1.857-1.857A1.853 1.853 0 0 0 16 7.179a1.853 1.853 0 0 0-1.857 1.857zm.348 14.39c0 .508.413.931.922.931h1.174a.931.931 0 0 0 .922-.931v-9.281a.93.93 0 0 0-.922-.93h-1.174a.931.931 0 0 0-.922.93v9.28z"/>
        </svg>
      </div>
    );
  }
}
