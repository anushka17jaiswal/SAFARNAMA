
const searchForm = document.querySelector(".search-box");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = searchForm.querySelectorAll("input, select");

    const from = inputs[0].value.trim();
    const to = inputs[1].value.trim();
    const date = inputs[2].value;
    const travellers = inputs[3].value;

    if (from === "" || to === "" || date === "") {
        alert("Please fill all the fields.");
        return;
    }

    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("date", date);
    localStorage.setItem("travellers", travellers);

    alert(
        `Searching trips from ${from} to ${to}\nDate: ${date}\n${travellers}`
    );

    window.location.href = "flights.html";
});