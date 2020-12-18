  $(document).ready( function() {
  
    if ('serviceWorker' in navigator) {
      navigator
        .serviceWorker
        .register('sw.js')
        .then( function(reg) {
          console.log('Registration successful');
        });
    }
  } );
