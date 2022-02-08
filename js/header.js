let path = window.location.pathname;
let page = path.split("/").pop();
console.log( page );

function createHeaderIndex(){
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الالكترونية</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>الأدلة الارشادية</h2>
                <p>المركز السعودي للأعمال / منصة الأعمال / الأدلة الارشادية</p>
                </div>
                
            </div>
    `;
    
    document.querySelector('.header').innerHTML = header;
}

function createHeaderSector(){
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الالكترونية</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>إصدار ترخيص مرافق الإيواء السياحي</h2>
                <p>المركز السعودي للأعمال / منصة الأعمال / قطاع السياحة</p>
                </div>
                
            </div>
    `;
    
    document.querySelector('.header').innerHTML = header;
}

function createHeaderIwaa(){
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الالكترونية</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>قطاع السياحة</h2>
                <p>المركز السعودي للأعمال / منصة الأعمال / قطاع السياحة</p>
                </div>
                
            </div>
    `;
    
    document.querySelector('.header').innerHTML = header;
}

function createHeaderAn(){
    let header = `
            <div class="container">
                <div class="top-header">
                    <div class="logo">
                        <img src="images/sbc-logo.png">
                    </div>
                    <ul class="navbar">
                        <li><a href="#">الخدمات الالكترونية</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                        <li><a href="#">AR</a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-user"></i></a></li>
                    </ul>
                </div>
                <div class="header-text">
                <h2>الأنشطة السياحية</h2>
                <p>المركز السعودي للأعمال / منصة الأعمال / قطاع السياحة</p>
                </div>
                
            </div>
    `;
    
    document.querySelector('.header').innerHTML = header;
}

if(page === "index.html"){
    createHeaderIndex();
}else if(page === "sector.html"){
    createHeaderSector();
}else if(page === "iwaainfo.html"){
    createHeaderIwaa();
}else {
    createHeaderAn();
}
