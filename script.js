
const API_KEY = AQ.Ab8RN6ImPHw0ePHg1adfuxa5L7VI8rp__l52UkHno8SPVyNwKg
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChat = document.getElementById("newChat");

console.log("YUDA AI JS masuk");

async function kirimPesan() {

    const text = userInput.value.trim();

    if (text === "") return;


    chatBox.innerHTML += `
    <div class="message user">
        ${text}
    </div>`;


    userInput.value = "";


    chatBox.innerHTML += `
    <div class="message ai" id="typing">
        YUDA.AI sedang mengetik...
    </div>`;


    const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
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


    const data = await res.json();


    document.getElementById("typing").remove();


    chatBox.innerHTML += `
    <div class="message ai">
        ${data.candidates[0].content.parts[0].text}
    </div>`;


    chatBox.scrollTop = chatBox.scrollHeight;
}



sendBtn.onclick = kirimPesan;


userInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        kirimPesan();
    }
});


newChat.onclick = function(){
    chatBox.innerHTML = `
    <div class="message ai">
        Halo 👋 Saya YUDA.AI
    </div>`;
};
