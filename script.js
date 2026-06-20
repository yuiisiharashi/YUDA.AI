const API_KEY = AQ.Ab8RN6KqSx9V5YmG_z9WafgZ35-J6FPeU2CdLXAV2ATkbMoGiQ

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


sendBtn.onclick = async function(){

    let text = userInput.value.trim();

    if(text === "") return;


    chatBox.innerHTML += `
    <div class="message user">
    ${text}
    </div>`;


    userInput.value = "";


    chatBox.innerHTML += `
    <div class="message ai" id="load">
    YUDA.AI mengetik...
    </div>`;


    try{

    let response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="+API_KEY,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        contents:[{
          parts:[{
            text:text
          }]
        }]
      })
    });


    let hasil = await response.json();

    document.getElementById("load").remove();


    chatBox.innerHTML += `
    <div class="message ai">
    ${hasil.candidates[0].content.parts[0].text}
    </div>`;


    }catch(error){

    document.getElementById("load").remove();

    chatBox.innerHTML += `
    <div class="message ai">
    Gemini gagal konek
    </div>`;

    console.log(error);
    }

};
