import "bootstrap"
function onLoad(){
    let mentor = JSON.parse(localStorage.getItem("mentor"));
   //console.log(mentor)
    let html = ` <div class="row">
    <div class="col-12">
        <h1> ${mentor.fullname} </h1>
        <h2> ${mentor.info} </h2>
        <div class="img-fluid text-center">
        <img class= "PFP" src="${mentor.img}" width="75%">
        </div>
        <p class="Teacher_info">${mentor.teacherinfo}
        </p>              
    </div>
</div>`
document.querySelector('.teachers').innerHTML = html;
}
window.onload = onLoad;