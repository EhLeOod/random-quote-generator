$(document).ready(function(){
  var quote;
  var author;
  function getNewQuote() {
    $.ajax({
      url:'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
          $('#author').text(' - ' + author)
        } else {
          $('#author').text('- Unbeknownst to me');
        }
      }
    });
  }
  getNewQuote();

  $('#button').on('click', function() {
    getNewQuote();
  });

});

function tweetIt() {
  var quoteBox = document.getElementById('quotebox').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
  encodeURIComponent(quoteBox);

window.open(tweetUrl);
}
///////////////////////////////////////////////////
//opens new tweet window pre-populated with quote in quotebox div/ quoteBox local var
 
//https://api.forismatic.com/api/1.0/?method=getQuote&callback=/

// //function ajaxcall(url, data, callback) {
//   $.ajax({
//     url:
//     type: 'POST', //POST or GET 
//     data: data, // data to send in ajax format or querystring format
//     datatype: 'json',
//     beforeSend: function() {
//     success: function(data) {
//         callback(data); // return data in callback
//     },

//     complete: function() {
//         alert('ajax call complete');
//         // success alerts
//     },

//     error: function(xhr, status, error) {
//         alert(xhr.responseText); // error occur 
//     }

// });
// }
////////////////////////////////////
//   //chooses random quote from quotes array[OLD CODE]
//   function getQuote() {
//     $.ajax({
//       type:'POST',
//       datatype: 'json',
//       url:'https://api.forismatic.com/api/1.0/?method=getQuote&callback=/',
//       accept: 'application/json',
//       success: function(data) {
//         $('#quotebox123').html(data);
//       }

//      });


// $(document).ready(function(){
   //prints new quote in quotebox div after clicking   

  





// };












