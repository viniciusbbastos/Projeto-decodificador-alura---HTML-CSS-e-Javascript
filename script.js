
function limparTexto(textarea) {
    if (textarea.value === "Digite seu texto") {
        textarea.value = "";
        textarea.classList.add("digitando");
    }
}

function reporTexto(textarea) {
    if (textarea.value === "") {
        textarea.value = "Digite seu texto";
        textarea.classList.remove("digitando");
    }
}

function criptografar() {
    let imagem = document.getElementById("conteudo__mostra__imagem");
    let textoInfo = document.getElementById("conteudo__mostra__info");
    let alternativo = document.getElementById("conteudo__mostra__alt");
    let textoLimpo = document.getElementById("conteudo__criptografia__caixa");
    let caixaTexto = document.getElementById("conteudo__mostra__resultado");

    alternativo.style.display = "none";
	
	trocaCena(textoLimpo, alternativo, imagem, textoInfo);
	
    if (textoLimpo.value !== "Digite seu texto") {
        caixaTexto.value = textoLimpo.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textoLimpo.value = "Digite seu texto";
    }
}

function descriptografar() {
    let imagem = document.getElementById("conteudo__mostra__imagem");
    let textoInfo = document.getElementById("conteudo__mostra__info");
    let alternativo = document.getElementById("conteudo__mostra__alt");
    let textoLimpo = document.getElementById("conteudo__criptografia__caixa");
    let caixaTexto = document.getElementById("conteudo__mostra__resultado");

    alternativo.style.display = "none";

    trocaCena(textoLimpo, alternativo, imagem, textoInfo);

    if (textoLimpo.value !== "Digite seu texto") {
        caixaTexto.value = textoLimpo.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        textoLimpo.value = "Digite seu texto";
    }
}

function copiar() {
    let caixaTexto = document.getElementById("conteudo__mostra__resultado");

    navigator.clipboard.writeText(caixaTexto.value);
}

function trocaCena(tl, alt, imag, ti) {
	if (tl.value !== "Digite seu texto" && alt.style.display === "none") {
        imag.style.display = "none";
        ti.style.display = "none";
        alt.style.display = "flex";
    } else {
        if (window.innerWidth > 1024) {
            imag.style.display = "block";
        }
        ti.style.display = "flex";
        alt.style.display = "none";
    }
}