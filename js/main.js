
//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

//Clear the content inside the search relust div
function clearResults() {
    selectElement('.search-results').innerHTML = '';
}

// get the result of the search
function getResults() {
    const search = selectElement('.searchbar').value;
    clearResults();
    if (search.length > 0) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].sectorName.toLowerCase().includes(search.toLowerCase()) || database[i].sectorCode.toLowerCase().includes(search.toLowerCase())) {
                selectElement('.search-results').innerHTML += `
<a href="sector.html?id=${database[i].sectorCode}"><div class="search-result-item">
<span class="search-item"><img src="images/${database[i].sectorIcon}"></span>
<span class="search-item">${database[i].sectorName}</span>
<div class="details">
 <div class="details-text">
 <p>الدليل الإرشادي</p>
 <i class="fas fa-long-arrow-alt-left"></i>
 </div>
 <div class="details-btn">تفاصيل</div>
</div>
</div></a>
`;
            }
        }
    } else {
        PrintAll();
    }
}

//Print All Result in the database
function PrintAll() {
    for (let i = 0; i < database.length; i++) {
        selectElement('.search-results').innerHTML += `
<a href="sector.html?id=${database[i].sectorCode}"><div class="search-result-item">
<span class="search-item"><img src="images/${database[i].sectorIcon}"></span>
<span class="search-item">${database[i].sectorName}</span>
<div class="details">
 <div class="details-text">
 <p>الدليل الإرشادي</p>
 <i class="fas fa-long-arrow-alt-left"></i>
 </div>
 <div class="details-btn">تفاصيل</div>
</div>
</div></a>
`;
    }
}

//Make An Event On the Search Input
selectElement('.searchbar').addEventListener("keyup", getResults);
//Print All The Info
PrintAll();