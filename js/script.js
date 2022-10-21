


const btnGenerator= document.getElementById("btn-geneator");

    btnGenerator.addEventListener("click", function() {
    let name = document.getElementById("name").value
    document.getElementById("name-surname").innerHTML= name;
    let km = document.getElementById('kilometers').value
    document.getElementById('km').innerHTML=km;

})
