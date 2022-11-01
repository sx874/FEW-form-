
/* const bttn = document.getElementById("submit");
bttn.addEventListener("click", story() {
    document.getElementById("result").innerText = "test";
}); */


/* function story() {
    const nameAns = document.getElementById("name").value;
    const bday = document.getElementById("birthday").value;
    const address = document.getElementById("address").value;
    const SSN = document.getElementById("SSN").value;
    document.getElementById("result").innerText = `${nameAns} is a FOOL. \n I know where you live... it's ${address} \n oh your birthday?? its ${bday} \n brb gonna go steal your identity with these little numbers \n ${SSN}`;
    
} */


/* document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("result").innerText = "test";
    alert("TEST!");
}); */

/* doesn't work */
/* const bttn = document.getElementById("submit");
bttn.addEventListener('click', story);
function story() {
    document.getElementById('result').innerText = "test";

} */

const bttn = document.getElementById("submit");
bttn.addEventListener('click', () => {
    document.getElementById('result').innerText = "test";
});