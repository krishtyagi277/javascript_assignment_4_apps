
var quizForm = document.getElementsByClassName("quiz");
var answers = [];
var size;
var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status == 200) {
            console.log("call was successful");
            var data = JSON.parse(this.responseText);
            size = data.length;
            for (var i = 0; i < data.length; i++) {
                createDynamicQuestion(data[i], i + 1);
                answers.push(data[i].answer);
            }
            console.log(answers);
            var submitsection = document.createElement("section");
            submitsection.id = "submit-section";
            var btn = document.createElement("button");
            btn.id = "btn-submit";
            btn.type = "button";
            btn.innerHTML = "Submit";
            btn.onclick = checkAnswer;

            submitsection.appendChild(btn);


            quizForm[0].appendChild(submitsection);
        }
        else {
            console.log("call was failed");
        }
    }
};


httpRequest.open('GET', ' http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true);
httpRequest.send();


function createDynamicQuestion(data, n) {


    var section = document.createElement("section");
    section.className = "quiz-item";
    var question = document.createElement("h3");
    var questionTextNode = document.createTextNode("Q" + n + " " + data.question);
    question.appendChild(questionTextNode);
    section.appendChild(question);
    for (var k = 0; k < 4; k++) {
        var optionDiv = document.createElement("div");
        optionDiv.className = "option-wrapper";
        var label = document.createElement("label");
        var inputField = document.createElement("input");
        inputField.type = "radio";
        inputField.name = "q" + n;
        inputField.value = k + 1;
        inputField.required = true;
        var ptag = document.createElement("p");
        var pTextNode = document.createTextNode(data.options[k]);
        ptag.appendChild(pTextNode);
        label.appendChild(inputField);
        label.appendChild(ptag);
        optionDiv.appendChild(label);
        section.appendChild(optionDiv);
    }
    quizForm[0].appendChild(section);

}


function checkAnswer() {
    //do what you need here
    var marks = 0;
    var j = 0;
    var radio = document.getElementsByTagName("input");

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            if (radio[i].value == answers[j]) {
                marks += 4;
            }
            j++;

        }

    }
    document.getElementById("result").innerHTML = "<h3>" + marks + "/20</h3>";
    alert("your marks:" + marks + "/20");

}

