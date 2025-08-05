const content = document.getElementById("i1");
const title = document.getElementById("i2");
const name = document.getElementById("i3");
const subm = document.getElementById("b1");
const dwnn = document.getElementById("b2");
const img = document.getElementById("img");
const fgc = document.getElementById("c1");
const bgc = document.getElementById("c2");
dwnn.style.display = "none";
img.style.display = "none";
bgc.value = "#ffffff";

async function downlod()
{
    const url = new Request("https://quickchart.io/qr", {
        method: "POST",
        mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({ text:i1.value , margin:3 , size:200 , ecLevel:'H' , caption:i2.value , dark:fgc.value , light:bgc.value }),
    });
    const req = await fetch(url);
    const rep = await req.blob();
    const src = URL.createObjectURL(rep);
    dwnn.style.display = "block";
    img.style.display = "block";
    img.src = src;
    dwnn.href = src;
    dwnn.download = name.value + ".png";
}
