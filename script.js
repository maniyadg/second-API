var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
async function foo(){
    var res = await fetch("https://api.goprogram.ai/inspiration")
    var res1 = await res.json();
    console.log(res1);
    var div = document.createElement("div")
    row.innerHTML =`
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem; margin:200px 400px;">
    <div class="card-header text-center">Inspiration</div>
    <div class="card-body">
      <h5 class="card-title">Quote :${res1.quote}</h5>
      <h5 class="card-title">Author :${res1.author}</h5>
    </div>
  </div>
  `;

    document.body.append(container);
}
foo();