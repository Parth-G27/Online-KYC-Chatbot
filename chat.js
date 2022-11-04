// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hey there! I am online KYC help bot, feel free to ask me anything about it 😄"
    let secondMessage = "Menu : <br> 1. What is  KYC ? <br> 2. Requirements for online KYC <br> 3. Steps to complete online KYC verification <br> 4. Contact us "
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>' +
    '<p class="botText"><span>'+secondMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it 
function getResponse() {
    let userText = $("#textInput").val();

    if (userText =="") {
        userText = "Hey";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}



$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function getBotResponse(input) {
    //KYC RESPONSE
    if (input =="Aadhar Letter" || input =="Aadhar" || input =="Aadhar card" 
    || input =="aadhar card" || input =="aadhar"  || input =="aadhar letter"
    ||input =="AADHAR"||input =="AD card" ||input =="A card" )
     {
        return "You need to upload a JPG or PNG image file of your Aadhar card taken by camera which is less than 2.5 MB";
    } else if (input =="Pan Letter" || input =="Pan" || input =="Pan card" || input =="pan card" || input =="pan" || input =="pan letter"||input =="PAN" ) {
        return "You upload a JPG or PNG image file of your PAN card taken by camera which is less than 2.5 MB";
    } 
    else if (input == "C.C") {
        return "BOOOOOM";
    }
    else if(input=="1" || input=="1."){
        return "KYC full form is 'Know Your Customer' which refers to the process of identity and addresses verification of all customers and clients by banks, insurance companies and other institutions either before or while they are conducting transactions with their customers.<br> <br> KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.";
    }
    else if(input=="2"||input=="2."){
        return" • For Identity Proof <br><br> 1. Aadhar card <br> 2. PAN card <br><br> • For Address Proof<br><br>  1. Aadhar card <br> 2. Voter ID <br> 3. PAN card <br> 4. Driving Licence <br><br> • For Income Proof <br><br> 1.Income certificate";
    }
    else if(input=="3"||input=="3."){
        return "1. Enter your details (Full name, address and other details) <br> 2. After filling the details, upload a JPG or PNG image file of your Aadhar card, PAN card and other document taken by camera which is less than 2.5 MB. <br> 3. Now upload and move to the next part, where you have to click and upload a present live picture of yourself from front camera of your mobile or webcam. ";
    }
    else if(input=="4"||input=="4."){
        return"Contact : <br> Contact us at our toll free number +91 XXXXXX2932/2933/2934/2935 <br><br> Complain : <br> Register your complain at www.rbicompl.com  ";
    }

    // Simple responses
    if (input == "hello" || input == "Hello" || input == "hi"||input == "Hii"||input == "hii" ||input =="Hi" ||input =="Hey" ||input =="hey") {
        return "Hello there! I am KYC Bot, How may i help you ? <br> 1. What is  KYC ? <br> 2. Requirements for online KYC <br> 3. Steps to complete online KYC verification <br> 4. Contact us ";
    } else if (input == "Goodbye" || input == "Bye"|| input == "bye"|| input == "goodbye") {
        return "Thanks for chatting :)";
    } else {
        return "Menu : <br> 1. What is  KYC ? <br> 2. Requirements for online KYC <br> 3. Steps to complete online KYC verification <br> 4. Contact us ";
    }
    
}


