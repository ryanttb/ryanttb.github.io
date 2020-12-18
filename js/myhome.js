$(document).ready( function() {

  if ('serviceworker' in navigator) {
    navigator
      .serviceWorker
      .register('sw.js')
      .then( function(reg) {
        console.log('Registration successful');
      });
  }
} );
