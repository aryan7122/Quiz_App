const questions = [
    {
        'que': 'Which of the follwing is a markup Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which of the follwing is a Cascadind Style Sheet Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'b'
    },
    {
        'que': 'Which of the follwing is a Object-oriented Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'c'
    },
    {
        'que': 'Which of the follwing is a Scripting Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'C++',
        'd': 'PHP',
        'correct': 'd'
    }
]

let index = 0;
let total =questions.length;
let right = 0, 
    wrong = 0;
const quebox = document.getElementById("quebox")
const optionInput = document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quebox.innerHTML = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}
const submitquiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let Answer;
    optionInput.forEach(
         (input) => {
        if(input.checked){
            Answer = input.value; 
        }
    });
    return Answer;
}
const reset = () =>{
    optionInput.forEach(
        (input) => {
        input.checked = false
        }
    )
}

    const endQuiz = () => {
        document.getElementById("box").innerHTML =`<div style="text-align: center "><h3>Thank you for playing the quiz</h3> <h2>${right}/${total} are correct</h2></div> `
    }

loadQuestion();  
