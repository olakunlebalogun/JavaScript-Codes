const fetchButton = document.querySelector(".me");
const person = document.querySelector("#name");
const job = document.querySelector("#job");
const image = document.querySelector("#image");
const desc = document.querySelector("#desc");
// console.log(person.textContent);


fetchButton.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'data.json', true);
    xhr.onload = function(){
        if (xhr.status==200){
            let response = JSON.parse(xhr.responseText);
            console.log(response['review']);
            for (let i = 0; i < response.length; i++) {

                let output = `<ul>
                
                </ul>` 
                let trythis = `<div class="main">
            <h2 id="heading">Our Reviews</h2>
            <div class="line"></div>
        </div>
        <div class="card">
            <div class="image">
                <div class="quote">"</div>
                <img src="./images/person-1.jpeg" alt="" id="image">
            </div>
            <h4 id="name"  >Susan Smith</h4>
            <p id="job">Web Developer</p>
            <p id="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Asperiores laborum velit unde ex sapiente, incidunt aspernatur 
                maxime perspiciatis! Voluptates deleniti impedit non?
                Atque eius nihil alias tempora? Rerum, possimus asperiores?
            </p>
            <div class="btn1">
                <div class="icon">
                    <button><i></i></button>
                    <button><i></i></button>
                </div>
                <button class="btn" id="sup">Suprise me</button>

            </div>
        </div>`;
                person.textContent = response['review'][i]['name'];
                job.textContent = response['review'][i].job
                image.textContent = response['review'][i].img;
                desc.textContent =response['review'][i].text;
                console.log(response['review'])
            }
        }
    }

    xhr.send();
})

console.log("Completed")


function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});
 