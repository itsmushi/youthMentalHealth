var link="sysReply.php"
    var chatAnimation=""
$(document).ready(()=>{

    var fired_button = $("button").val(); 
    $("button").click(function() {

        var fired_button = $(this).text();
       // alert(fired_button);

    // attach the user sent message to the chatted-texts
        
        var userReply=`
        <div class="row  user_reply">
        <div class="col-4 offset-8">
          
          <p>`+fired_button +`</p>
        </div>
  
      </div>

            `
            $(userReply).appendTo(".text-chatted");


        //code to display chatting-reply animation 
        var chatAnimation=`
            <div class="row syst_reply">
    
                <div class="col-4 text-left">
                <div class="chat-bubble">
                    <div class="typing">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    </div>
                </div>
                   
                </div>
      
            </div>

            `
            

        $.post(link,
        {
            message: fired_button
        },
        function(data, status){
            
            var repliedText=JSON.parse(data)
            
            
            var repliedText=repliedText.message

            var sysReply=`
            <div class="row syst_reply">
    
            <div class="col-4 text-left">
              
              <p>`+repliedText + `</p>
            </div>
      
          </div>

            `
             setTimeout(()=>{
                 $(chatAnimation).appendTo(".text-chatted")  
        //setTimeout functions are nested to ensure right interval of time
                 if(status=="success"){
                    setTimeout(()=>{
                        $(".chat-bubble").remove();
                        $(sysReply).appendTo(".text-chatted");
                    }, 4000)
                    
                }

             },3000)
            
        })
        
    } ) 

    
})
