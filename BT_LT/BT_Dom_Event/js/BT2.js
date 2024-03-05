function doi_hinh() {
    let a = [ "../image/1084885-16-09-15-11.jpg",
    "../image/22724a905538f4ebfc03d4c5b0e80391.jpg",
     "../image/5133502-16-09-06-05.jpg",
     "../image/anime-conan-conan-edogawa-detective-wallpaper-preview.jpg",
     "../image/hinh-anh-conan-5-16-09-29-06.jpg",
     "../image/hinh-nen-conan-cho-desktop-4.jpg"  
    ];
    document.getElementById("anh").src=a[Math.floor(Math.random() * a.length)];;
}
function doi_kich_thuoc(){
    let b = ["100px",
    "200px",
    "300px",
    "400px",
    "500px",
    "600px",
    "700px",
    "800px",
    "900px",
    "1000px",
];
document.getElementById("anh").style.width=b[Math.floor(Math.random() * b.length)];;
document.getElementById("anh").style.height=b[Math.floor(Math.random() * b.length)];;

}
function tacgia(){
    alert("Nguyễn Thành Trung - 22696701");
}