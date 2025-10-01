const btn = document.getElementById('btnLogin');
const ul = document.getElementById('listaConvidados');

btn.addEventListener('click', async () => {
  const secret = document.getElementById('adminSecret').value.trim();
  if (!secret) return alert('Digite a senha!');

  try {
    const response = await fetch(`/api/list?secret=${secret}`);
    if (!response.ok) throw new Error('Senha incorreta ou erro ao buscar lista');

    const guests = await response.json();
    ul.innerHTML = '';
    guests.forEach(guest => {
      const li = document.createElement('li');
      li.textContent = `${guest.name} - ${guest.confirmed ? 'Confirmado' : 'Pendente'}`;
      ul.appendChild(li);
    });
  } catch (err) {
    alert(err.message);
  }
});