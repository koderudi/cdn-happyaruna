function testConnection(){fetch("https://cdn1.happyaruna.id/api/ping").then(()=>{}).catch(()=>{alert("Periksa koneksi internet Anda")})}
function getParams(){let t=window.location.pathname,e=t.split("/").filter(t=>""!==t);return decodeURIComponent(e[e.length-1])}
function getParams2(){let t=window.location.pathname,e=t.split("/").filter(t=>""!==t);return e[e.length-1]}
function parseUserTime(e){let[t,i]=e.split(", "),[s,l,n]=t.split("/"),[p,r]=i.split(".");return new Date(`${n}-${l}-${s}T${p}:${r}:00`)}
function convertTimeFormat(t){let[e,n]=t.split("T"),r=`${n}:00`;return`${e} ${r}`}
function formatTime(t){let a=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),g=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");return`${a}-${e}-${r} ${d}:${g}:${n}`}
function getQueryParam(e){let t=new URLSearchParams(window.location.search);return t.get(e)}
async function showLoading(t){let e=document.getElementById("custom-loading"),l=document.getElementById("loading-text"),n=document.getElementById("typing-text");t?(e.style.display="flex",n.style.width="0",l.style.display="block",await new Promise(t=>setTimeout(t,1e3)),l.style.display="none",n.style.animation="typing 2s steps(10) forwards"):e.style.display="none"}
