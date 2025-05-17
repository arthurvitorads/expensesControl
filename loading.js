function showLoading(){
    const div = document.createElement("div")
    div.classList.add("loadingContent")
    const lbl = document.createElement("label")
    lbl.innerText = "Carregando...";
    div.appendChild(lbl)
    document.body.appendChild(div)
    setTimeout(() => hideLoading(), 2000)
}

function hideLoading(){
    const loading = document.getElementsByClassName("loadingContent")
    if(loading.length > 0){
        loading[0].remove()
    }
}