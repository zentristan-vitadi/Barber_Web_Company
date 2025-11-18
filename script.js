const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const position = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", position)
}) 

const semua_tombol = document.querySelectorAll(".UpperFooterButton")

semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
        semua_tombol.forEach((btn) => btn.classList.remove("active"));
        tombol_satuan.classList.add("active");
    });
});