const grid = document.getElementById("grid");
const reloadBtn = document.getElementById("reload");
const tileTpl = document.getElementById("tile-template");

async function loadCats(count = 10) {
  grid.innerHTML = "Lade Katzen...";
  try {
    const res = await fetch(`https://cataas.com/api/cats?limit=${count}`, { headers: { Accept: "application/json" } });
    const data = await res.json();
//    console.log(data);
    grid.innerHTML = "";
    data.forEach(item => {
      const node = tileTpl.content.cloneNode(true);
      node.querySelector("img").src = `https://cataas.com/cat/${item.id}?width=600`;
      grid.appendChild(node);
    });
  } catch (err) {
    grid.textContent = "Fehler beim Laden.";
  }
}

reloadBtn.addEventListener("click", () => loadCats());
loadCats();