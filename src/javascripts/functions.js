let mentorsList = []
import "bootstrap"
export function getMentors() {
    //console.log("something")
    fetch("/people.json").then(function (res) {
        if (res.ok) {
            return res.json()
        } else {
            throw Error("API call failed!!!")
        }
    }).then(function (mentors) {
        mentorsList = mentors
        let string = ``
        for (let mentor of mentorsList) {
            string += `
            <div class="card" style="width: 28rem;">
           <div>
            <img src="${mentor.img}" class="card-img-top" alt="${mentor.fullname}">
            <div class="card-body">
                <h4>${mentor.fullname}</h4>
                <h5>${mentor.info}</h5>
            </div>
            </div>
            <a href ="#" class= "btn mentorbutton" id = ${mentor.id}>More information
      </a>
    </div>
            `
            //console.log(mentor)
        }
        document.querySelector(".Mentors").innerHTML += string;
        clickEvents();
    })
}
export function clickEvents(){
    const buttons = document.querySelectorAll(".mentorbutton")
    buttons.forEach(
        function(button){
            button.addEventListener("click", function(e){
                //console.log(e.target);
                for(let mentor of mentorsList){
                    if(mentor.id == e.target.id){
                        //console.log(mentor.id)
                        localStorage.setItem("mentor", JSON.stringify(mentor))
                        window.location.href = "./information.html"
                        //console.log("It works!")
                    }
                }
            })
        }
    )
}
