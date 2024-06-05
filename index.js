let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let data = JSON.parse(xhr.responseText);
        populateTable(data);
    }
}

function populateTable(data) {
    let tableBody = document.querySelector("#table-body");
    tableBody.innerHTML = "";
    data.forEach(item => {
        let row = document.createElement("tr");
        // console.log(item)
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;
        // console.log(row)
        tableBody.appendChild(row);
    });
}


