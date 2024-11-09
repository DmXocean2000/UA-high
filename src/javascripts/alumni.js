let alumniList = []
import "bootstrap"
export function getAlumni() {
    //console.log("something")
    fetch("/alumni.json").then(function (res) {
        if (res.ok) {
            return res.json()
        } else {
            throw Error("API call failed!!!")
        }
    }).then(function (alumni) {
        alumniList = alumni
        let thing = ""
        for (let alumni of alumniList) {
            thing += `
            <div class="card" style="width: 28rem;">
           <div>
            <img src="${alumni.img}" class="card-img-top" alt="${alumni.Heroname}">
            <div class="card-body">
                <h4>${alumni.Heroname}</h4>
                <h5>${alumni.info}</h5>
            </div>
            </div>
            </div>
            `


            //console.log(alumni)
        }
        document.querySelector(".alumni").innerHTML += thing;
    })
}