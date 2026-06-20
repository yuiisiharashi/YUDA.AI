const API_KEY = AQ.Ab8RN6JpkmOghiTO3OfxNiYEDGQGf4R1BExsO1utmfgeuCDhzg

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


async function kirimPesan(){

let text = userInput.value.trim();
if(!text) return;


chatBox.innerHTML += `
<div class="message user">${text}</div>`;


userInput.value = "";


try {

let res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:text
}
]
}
]
})
});


let data = await res.json();

console.log(data);


chatBox.innerHTML += `
<div class="message ai">
${data.candidates[0].content.parts[0].text}
</div>`;

} catch(e){

chatBox.innerHTML += `
<div class="message ai">
Gagal konek Gemini
</div>`;

console.log(e);

}

}


sendBtn.onclick = kirimPesan;
