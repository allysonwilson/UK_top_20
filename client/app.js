import React from 'react';
import ReactDOM from 'react-dom';
import SongsContainer from "./containers/SongsContainer"

window.addEventListener('load', function () {
  ReactDOM.render(
    <ITunesContainer />,
    document.getElementById('app')
  );
});
