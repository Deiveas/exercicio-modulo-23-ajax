document.addEventListener("DOMContentLoaded", function () {
  const nomeUsuario = document.querySelector("#nome");
  const nomeDeUsuario = document.querySelector('#nome-usuario');
  const avatarGit = document.querySelector('#meu-avatar');
  const meusRepositorios = document.querySelector('#reposi');
  const meusSeguidores = document.querySelector('#seguidores');
  const euSeguindo = document.querySelector('#seguindo');
  const linkMeuGit = document.querySelector('#git-link');
  const minhaBiografia = document.querySelector('#biografia');

  fetch("https://api.github.com/users/Deiveas")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      nomeUsuario.innerText = json.name;
      nomeDeUsuario.innerText = json.login;
      avatarGit.src = json.avatar_url;
      meusRepositorios.innerText = json.public_repos;
      meusSeguidores.innerText = json.followers;
      euSeguindo.innerText = json.following;
      linkMeuGit.href = json.html_url;
      minhaBiografia.innerText =json.bio;
    })

});
