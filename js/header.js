let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);

function createHeaderIndex() {
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الإلكتروني</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>الأدلة الإرشادية</h2>
                <p>المركز السعودي للأعمال / الأدلة الإرشادية</p>
                </div>
                
            </div>
    `;

    document.querySelector('.header').innerHTML = header;
}

function createHeaderSector() {
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الإلكتروني</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>الأدلة الإرشادية</h2>
                <p>المركز السعودي للأعمال / الأدلة الإرشادية / قطاع السياحة</p>
                </div>
                
            </div>
    `;

    document.querySelector('.header').innerHTML = header;
}

function createHeaderIwaa() {
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الإلكتروني</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>إصدار ترخيص مرافق الإيواء السياحي</h2>
                <p>المركز السعودي للأعمال / الأدلة الإرشادية / قطاع السياحة</p>
                </div>
                
            </div>
    `;

    document.querySelector('.header').innerHTML = header;
}

function createHeaderAn() {
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الإلكتروني</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>الأنشطة السياحية</h2>
                <p>المركز السعودي للأعمال / الأدلة الإرشادية / قطاع السياحة</p>
                </div>
                
            </div>
    `;

    document.querySelector('.header').innerHTML = header;
}


switch (page) {
    case "index.html":
        createHeaderIndex();
        break;
    case "sector.html":
        createHeaderSector();
        break;
    case "iwaainfo.html":
        createHeaderIwaa();
        break;
    case "anchita.html":
        createHeaderAn();
        break;
    case "":
        createHeaderIndex();
        break;   
}