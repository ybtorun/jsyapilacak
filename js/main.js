let inputDOM = document.querySelector("#task")
let ulDOM = document.querySelector("#list")
let ekleDOM = document.querySelector("#liveToastBtn")
let allRmDOM = document.querySelector("#btnRemoveAll")

const tasks =localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
localStorage.setItem("tasks",JSON.stringify(tasks) ) 

// const alertDOM = document.querySelector("#alert")

// const alertFunction=(title,message,className="warning") =>`
// <div class="alert alert-${className} alert-dismissible fade show" role="alert">
// <strong>${title}</strong> ${message}
// </div>`

ekleDOM.addEventListener("click",newElement)
allRmDOM.addEventListener("click",removeAll)


function newElement () {
       
    if (inputDOM.value && inputDOM.value != " " && inputDOM.value[0] !="<") {
        itemProcess(inputDOM.value)
       
        // alertDOM.innerHTML=alertFunction(
        //     "Başarılı İşlem",
        //     "Girdiler eklendi",
        //     "success"
        // )

    } else {

        // alertDOM.innerHTML=alertFunction(
        //     "Hatalı İşlem:",
        //     "Eksik Bilgi Girdiniz.",
        //     "danger"
        // )

        console.log("Boş görev girilemez!! Lütfen görev giriniz")
        $(".error").toast("show");
    }
}

function itemProcess (input){
             
    let liDOM = document.createElement("li") 
    liDOM.innerHTML= input
    ulDOM.appendChild(liDOM)

    let btnDOM = document.createElement("span")
    btnDOM.classList.add("close")
    btnDOM.innerHTML="X"
    liDOM.appendChild(btnDOM)

    

    inputDOM.value = "" 
    $(".success").toast("show");
    btnDOM.addEventListener("click",removeItem)

    function removeItem() {

        let answer = window.confirm("Dikkat Görev silinecek emin misiniz?");
        if (answer) {
            liDOM.remove();
            $(".remove").toast("show");
        }
    }

    liDOM.addEventListener("click",selectItem)

    function selectItem() {

        liDOM.classList.toggle("checked")
    }


}



//elemanların tümünü silmeyi sağlayan fonksiyon
function removeAll() {
    //1. yol !!ul gittiği için geri getirme yollarını araştır.

    // ulDOM.remove()
    // console.log("eleman silindi")
    
    //2. yol
    if(ulDOM.hasChildNodes()){
        while (ulDOM.hasChildNodes()) {
            ulDOM.removeChild(ulDOM.firstChild);
        } 
    }else console.log("tüm öğlere silindi")
    $(".remove").toast("show");
}



    
    
 


