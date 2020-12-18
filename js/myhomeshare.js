$(document).ready( function() {
  const parsedUrl = new URL(window.location);
  const { searchParams } = parsedUrl;

  let title = searchParams.get('title');
  let text = searchParams.get('text');
  let url = searchParams.get('url');

  document.querySelector('h1').textContent = searchParams.get('title');
  document.querySelector('#text').textContent = searchParams.get('text');
  document.querySelector('#url').src = searchParams.get('url');

//curl -X POST --header "x-api-key: Ci1Jc7bjrm9E0P5p6HXVt74Gcp6BbYyr4vzCyHny" "https://6feux3h7n2.execute-api.us-east-1.amazonaws.com/default/AnchorMyHome?customerId=A12TKPCQEFNPCQ&text=an%20update"

  const apiKey = 'Ci1Jc7bjrm9E0P5p6HXVt74Gcp6BbYyr4vzCyHny';
  const appUrl = 'https://6feux3h7n2.execute-api.us-east-1.amazonaws.com/default/AnchorMyHome';

  let shareUrl = `${appUrl}?customerId=A12TKPCQEFNPCQ&text=${text}&image=${url}`;

  $('#status').href = shareUrl;

  $.ajaxSetup({
    cache: false,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('x-api-key', 'Ci1Jc7bjrm9E0P5p6HXVt74Gcp6BbYyr4vzCyHny');
    }
  });

  $.get( {
    url: shareUrl, 
    dataType: 'json',
    success: function( data ) {
      $( "#status" ).html( data );
        alert( "Load was performed." );
      }
    });
      
} );
