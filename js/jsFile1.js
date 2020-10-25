
var link="https://mental-health-status.herokuapp.com/diagnose"
var chatAnimation=""
var finished_qns=false;
var sum=0
var notLessToSum=20
var userResultPos=`
<div class="row syst_reply">
<!-- div for system reply -->
<div class="col-4 text-left">
  
 
<p> From the diagnosis it looks that the person diagnosised in not Mentally Health</p>
<p>The following are the ways that you can help him or her to get through this condition</p>
<ul>
  <li>Be close to them and frendly</li>
  <li>Help them to appriciate live and join in their positive hobbies or activities</li>
  <li>You can also advice to them to see a therapist or call 0720 000 003 for help</li>
</ul>
</div>

</div>

`
var userResultNeg=`
<div class="row syst_reply">
<!-- div for system reply -->
<div class="col-4 text-left">
  
 
<p> From the diagnosis it looks that the person diagnosised in Mentally Health, so maybe check for other problems</p>

</div>

</div>

`

$(document).ready(()=>{

    var p1={
        "q1":"0",
        "q2":"0",
        "q3":"0",
        "q4":"0",
        "q5":"0",
        "q6":"0",
        "q7":"0",
        "q8":"0",
        "q9":"0"
    }
    


    var fired_button = $("button").val(); 
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
                
    var qnNo=0;
    var maxqnNO;
    var qn=""

    //these are the questions to be asked
    qnArr=[
    // "Little interest or pleasure in doing things?",  this qn moved to html page of chat
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?",
    "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"
   
]
    var userRep=[]
    var i=-1

//initial code before starting to chat goes here



//for(i=0;i<qnArr.length;i++){

    
        
        $("button").click(function(){


            var fired_button = $(this).text();
            var fired_button_value=$(this).val();
            

            var userReply=`
            <div class="row  user_reply">
            <div class="col-4 offset-8">
              
              <p>`+fired_button +`</p>
            </div>
            </div>
                `
                console.log(typeof(parseInt(fired_button_value)))
                sum=parseInt(fired_button_value)+sum;
                userRep.push(fired_button_value);
            $(userReply).appendTo(".text-chatted");
            $(".btn-to-reply").attr("disabled", "disabled")
            



            if(i==(qnArr.length)-1){    //when qn to ask are over
               
                sentVal= (userRep);
                var p2=sentVal
                var k=0;
                for(var key in p1){
                    while(k<9){
                     p1[key]=p2[k];
                     break
                    }
                 k+=1
                
             }
                
                // $.post(link,
                //     {
                //         message: p1
                //     },
                //     function(data, status){
                       
                //         // //console.log(data)
                //         // var repliedText=JSON.parse(data)
                        
                //         // var repliedText=repliedText.message
                //         //console.log(repliedText)
                        
                //        console.log(status);
                //        console.log(data);
                    
                   

                //         // for(var key in p1){
                //         //     p1[key]="4";
                //         // }
                //         // console.log(p1);


               
                //     })

              var  p1={
    "q1":"1",
    "q2":"2",
    "q3":"3",
    "q4":"3",
    "q5":"0",
    "q6":"3",
    "q7":"0",
    "q8":"0",
    "q9":"0"
}

                console.log(p1)
                

                    $.ajax({
                        type: "POST",
                        crossDomain: true,
                        url: link,
                        headers: {  'Access-Control-Allow-Origin': 'https://mental-health-status.herokuapp.com/diagnose' },
                        data: p1,
                        dataType: 'jsonp',
                        /* etc */
                        success: function(jsondata){
                           // console.log(status);
                            console.log(jsondata);
                         
                        }
                     })

                     $.ajax({
                        type: "GET",
                        crossDomain: true,
                        url: link,
                        headers: {  'Access-Control-Allow-Origin': 'https://mental-health-status.herokuapp.com/diagnose' },
                        data: p1,
                        dataType: 'jsonp',
                        /* etc */
                        success: function(jsondata){
                           // console.log(status);
                            console.log(jsondata);
                         
                        }
                     })

                    finished_qns=true
                    $(".btn-to-reply").remove();

                    console.log(sum)
                    if(sum<notLessToSum){
                        $(userResultPos).appendTo(".text-chatted");
                    }
                    else{
                        $(userResultNeg).appendTo(".text-chatted");
                    }
                  
                   
            }


            i=i+1
                       
            if(finished_qns==false){
            

            //when user is ready to go
            setTimeout(()=>{

                
                $(chatAnimation).appendTo(".text-chatted")  
            setTimeout(()=>{
               $(".chat-bubble").remove();
               var sysReply=`
               <div class="row syst_reply">
           
               <div class="col-4 text-left">
                 
                 <p>`+qnArr[i]+`</p>
               </div>
               </div>
               `
           
               $(sysReply).appendTo(".text-chatted");
               $(".btn-to-reply").removeAttr("disabled")

               $("<p>dsf</p>").appendTo(".btnrow");
           
           
            
                },300)

            },200)
            }


           // alert(fired_button);
    
           // attach the user sent message to the chatted-texts

            

            
            
           
    
        } ) 
    
    // }
    //     console.log(userRep)
       
    // console.log(typeof(userRep))




})

function reply(no){
   

}


