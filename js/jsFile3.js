
var link="sysReply.php"
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
    // "feeling of sadness, pessimism about the future, or tendency to weep?",  this qn moved to html page of chat
    "Any feeling of guilt?",
    "Feel like to commit suicide",
    // "Having any difficulty sleeping",
    // "Feeling restless or disturbed at night",
    // "Experince of waking in early hours of the morning and unable to fall asleep again",
    // "Work and Interest:Absence from work after treatment or recovery may rate <4",
    // "Restlessness and axiety",
    // "Psychiatric anxiety",
    // "Somatic anxiety:Gastrointestinal, indigestion, cardiovascular, palpitations, headaches, respiratory, genitourinary, etc",
    // "General somatic symptoms:Heaviness in limbs, back, or head; diffuse backache; loss of energy and fatigability",
    // "Genital Symptoms:Loss of libido, menstrual disturbances",
    // "Hypochondriasis",
    // "Weight loss"

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
                $.post(link,
                    {
                        message: sentVal
                    },
                    function(data, status){
                       
                        // //console.log(data)
                        // var repliedText=JSON.parse(data)
                        
                        // var repliedText=repliedText.message
                        //console.log(repliedText)
                        console.log(typeOf((sentVal)))

               
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
           
           
            
                },3000)

            },2000)
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


