let userData = [
    {
        id: 1,
        fname: "john",
        age: 18,
        profession: "developer",
    },
    {
        id: 2,
        fname: "jack",
        age: 20,
        profession: "developer",
    },
    {
        id: 1,
        fname: "karen",
        age: 19,
        profession: "admin"
    }
]

let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");

function filterByProfession() {
    result.innerHTML ="";
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);
    if(dropdownValue === "profession"){
        alert("please salect a profession");
        return;
    }
    
    userData.forEach((iteam) => {

            if (iteam.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = iteam.id + " fname:"   + iteam.fname + " profession:" + iteam.profession + " age:" + iteam.age;
            result.append(div);
        }
    })
}


btn.addEventListener("click", filterByProfession)


let newArr = userData.filter((item) => {
    if (item.profession == "admin")
        return item;
})
