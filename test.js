let state = 0; // Biến trạng thái ban đầu

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

link1.addEventListener("click", () => {
    state = 1;
    updateContent();
});

link2.addEventListener("click", () => {
    state = 2;
    updateContent();
});

function updateContent() {
    switch (state) {
        case 1:
            content1.style.display = "block";
            content2.style.display = "none";
            break;
        case 2:
            content1.style.display = "none";
            content2.style.display = "block";
            break;
        default:
            content1.style.display = "none";
            content2.style.display = "none";
    }
}