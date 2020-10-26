var link="https://mental-health-status.herokuapp.com/diagnose"

$(document).ready(()=>{
    console.log("SD")
    $.get( link, function( data ) {
        console.log( "Data Loaded: " + data );
      });

 console.log("SDf")
})