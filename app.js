

    let inputbox = document.getElementById("inputbox")
    let apishow = document.getElementById("apishow")
    let a1 = document.getElementById("a1")
    let a2 = document.getElementById("a2")
    let a3 = document.getElementById("a3")
    let a4 = document.getElementById("a4")
    const btn = document.querySelector('#click')
    var winaudio = new Audio('win.mp3')
    var lostaudio = new Audio('lose.mp3')
    var div = document.getElementById('confeti')

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      
    }

    function win() {
        location.reload();
    }
  
    let subahshis = fetch("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then ((data) => {
    question = data.results[0].question;
    real = data.results[0].correct_answer;
    correctanswer = data.results[0].correct_answer;
    fwa = data.results[0].incorrect_answers[0];
    swa = data.results[0].incorrect_answers[1];
    twa = data.results[0].incorrect_answers[2];

    apishow.innerHTML = `${question}`;

    var randomnumber = []
    randomnumber[0] = (swa)
    randomnumber[1] = (fwa)
    randomnumber[2] = (twa)
    randomnumber[3] = (correctanswer)

    shuffle(randomnumber);

    console.log(randomnumber)

    a1.value = randomnumber[0];
    a2.value = randomnumber[1];
    a3.value = randomnumber[2];
    a4.value = randomnumber[3];
    
    a1.innerHTML = randomnumber[0]
    a2.innerHTML = randomnumber[1]
    a3.innerHTML = randomnumber[2]
    a4.innerHTML = randomnumber[3]

    getval=(texts) => {
        let selectedanswer = (texts.value)
        console.log(selectedanswer)

    btn.onclick = (event) =>  {  
            if ( real === texts.value ) {
            div.style.display = "block";
            winaudio.play()
            alert("Correct Answer")
            setTimeout(win, 4000)
             }
            else {
            lostaudio.play()
            alert("Wrong Answer")
            navigator.vibrate(200)
            
            }
        }
    }
})





