//GET
async function listarConvidados() {
  try {
    const response = await fetch("/api/guests");
    if (!response.ok) {
      throw new Error("Erro ao buscar convidados");
    }
    const guests = await response.json();
    atualizarLista(guests);
  } catch (err) {
    console.error(err);
  }
}

//UPDATE
function atualizarLista(guests){
    const ul = document.getElementById('listaConvidados');
    ul.innerHTML = '';
    guests.forEach(guest => {
       const li = document.createElement('li');
       li.textContent = `${guest.name} - ${guest.confirmed ? 'Confirmado' : 'Pendente'}`;
       ul.appendChild(li); 
    });
}

//POST
async function confirmarPresenca(nome) {
  try {
    const response = await fetch('/api/guests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome })
    });

    if (!response.ok) throw new Error('Erro ao confirmar presença');

    const data = await response.json();
    alert(data.message);
    listarConvidados();
  } catch (err) {
    console.error(err);
    alert('Erro ao confirmar presença!');
  }
}

const btn = document.getElementById('btnConfirm');
btn.addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  if (nome) {
    confirmarPresenca(nome);
  } else {
    alert('Digite seu nome!');
  }
});

listarConvidados();
