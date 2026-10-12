# Voz Livre — TTS online/offline

Conversor de texto em fala 100% no navegador (eSpeak-NG via WebAssembly/JS).

## Publicar no GitHub Pages
1. Crie um repositório e envie TODOS estes arquivos (index.html, sw.js, vendor/, voices/).
2. Settings → Pages → Branch: main, pasta / (root) → Save.
3. Abra o link `https://SEU-USUARIO.github.io/NOME-DO-REPO/` uma vez com internet.
   Depois disso o app funciona offline (service worker guarda tudo em cache).

## Testar localmente
`python3 -m http.server 8000` dentro da pasta e abra http://localhost:8000
(não abra o index.html com duplo clique: o navegador bloqueia o carregamento das vozes via file://).

Licença: eSpeak/meSpeak são GPL; lamejs é LGPL.
