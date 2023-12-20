 $(window).on('load',function(){
   
  if (document.cookie.indexOf('visited=true') == -1){
    $('#exampleModal').modal({show:true}); //modal popup
    var year = 1000*60*60*24*365;
    var expires = new Date((new Date()).valueOf() + year);
    document.cookie = "visited=true;expires=" + expires.toUTCString();
  }
});
