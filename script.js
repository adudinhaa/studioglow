const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("active");

});

const form = document.getElementById("form");

if(form){

  form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const servico =
    document.getElementById("servico").value;

    const data =
    document.getElementById("data").value;

    const hora =
    document.getElementById("hora").value;

    const obs =
    document.getElementById("obs").value;

    const mensagem =
`Olá! Gostaria de agendar um horário.

Nome: ${nome}

Serviço:
${servico}

Data:
${data}

Horário:
${hora}

Observações:
${obs}`;

    const telefone = "5548991823784";

    const url =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

  });

}
