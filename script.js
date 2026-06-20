const chatBox = document.getElementById("chatBox");
const API_KEY = AQ.Ab8RN6IelObH3ZZOHO3L1hxrba_0va6J55uXRk2qfGguvQiFDQ
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChat = document.getElementById("newChat");

function kirimPesan() {
    const text = userInput.value.trim();

    if (text === "") return;

    chatBox.innerHTML += `
        <div class="message user">
            ${text}
        </div>
    `;

    userInput.value = "";

    chatBox.innerHTML += `
        <div class="message ai" id="typing">
            YUDA.AI sedang mengetik...
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        document.getElementById("typing").remove();

        chatBox.innerHTML += `
            <div class="message ai">
                Terima kasih. Fitur AI masih dalam pengembangan. Nantinya saya akan bisa menjawab pertanyaan seperti asisten AI modern.
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1200);
}

sendBtn.onclick = kirimPesan;

userInput.addEventListener("keypress", function(e){
    if(e.key==="Enter" && !e.shiftKey){
        e.preventDefault();
        kirimPesan();
    }
});

newChat.onclick = function(){
    chatBox.innerHTML = `
        <div class="message ai">
            Halo 👋 Saya YUDA.AI.<br><br>
            Ada yang bisa saya bantu?
        </div>
    `;
};
