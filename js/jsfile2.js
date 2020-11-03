$(document).ready(()=>{
  var link="https://mental-health-status.herokuapp.com/diagnose"
    console.log("SD")
    var p={
      "q1":"0",
      "q2":"2",
      "q3":"2",
      "q4":"0",
      "q5":"1",
      "q6":"3",
      "q7":"1",
      "q8":"3",
      "q9":"3"
  }
  

    $.post( "https://mental-health-status.herokuapp.com/diagnose",p)

    $.get( link, function( data ) {
        console.log(typeof(data));
        console.log(data.status);
      });

 console.log("SDf")
})