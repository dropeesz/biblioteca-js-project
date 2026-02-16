// 🔥 Função para normalizar texto (ignora acento e maiúscula)
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 📚 Acervo de livros
let estoque = [
  { nome: "O Senhor dos Anéis", exemplares: 59, autor: "J.R.R. Tolkien", ano_fabricacao: 1954 },
  { nome: "1984", exemplares: 39, autor: "George Orwell", ano_fabricacao: 1949 },
  { nome: "O Hobbit", exemplares: 29, autor: "J.R.R. Tolkien", ano_fabricacao: 1937 },
  { nome: "A Guerra dos Tronos", exemplares: 49, autor: "George R.R. Martin", ano_fabricacao: 1996 },
  { nome: "Cem Anos de Solidão", exemplares: 44, autor: "Gabriel García Márquez", ano_fabricacao: 1967 },
  { nome: "O Código Da Vinci", exemplares: 39, autor: "Dan Brown", ano_fabricacao: 2003 },
  { nome: "Dom Casmurro", exemplares: 34, autor: "Machado de Assis", ano_fabricacao: 1899 },
  { nome: "O Primo Basílio", exemplares: 37, autor: "José de Alencar", ano_fabricacao: 1878 },
  { nome: "A Moreninha", exemplares: 29, autor: "Joaquim Manuel de Macedo", ano_fabricacao: 1844 },
  { nome: "O Retrato de Dorian Gray", exemplares: 42, autor: "Oscar Wilde", ano_fabricacao: 1890 }
];

// 📦 Exibir estoque na página
function exibirestoque() {
  let booklist = document.getElementById("booklist");
  booklist.innerHTML = "";

  estoque.forEach(livro => {
    const li = document.createElement("li");
    li.textContent = `${livro.nome} - Autor: ${livro.autor}, Ano: ${livro.ano_fabricacao}, Exemplares: ${livro.exemplares}`;
    booklist.appendChild(li);
  });
}

exibirestoque();

// 📊 Relatório organizado por ano
function relatorio() {
  estoque.sort((a, b) => a.ano_fabricacao - b.ano_fabricacao);

  console.clear();
  estoque.forEach(livro => {
    console.log(`Título: ${livro.nome} | Ano: ${livro.ano_fabricacao} | Exemplares: ${livro.exemplares}`);
  });

  exibirestoque();
}

// 🔄 Alterar unidades
function alterarunidades() {
  let nomeLivro = normalizar(document.getElementById("busca").value);
  let novasUnidades = parseInt(document.getElementById("bookUnits").value);

  let livro = estoque.find(l =>
    normalizar(l.nome) === nomeLivro
  );

  if (livro) {
    livro.exemplares = novasUnidades;
    alert(`Unidades do livro "${livro.nome}" atualizadas para ${novasUnidades}.`);
    exibirestoque();
  } else {
    alert("Livro não encontrado.");
  }
}

// ➕ Adicionar livros
function main() {
  let continua = false;

  do {
    let nome = prompt("Digite o nome do livro");

    if (!nome || !isNaN(parseFloat(nome))) {
      alert("Nome inválido.");
      continue;
    }

    let novoLivro = {
      nome: nome,
      autor: prompt("Digite o autor do livro"),
      ano_fabricacao: parseInt(prompt("Digite o ano de fabricação")),
      exemplares: 0
    };

    estoque.push(novoLivro);

    continua = confirm("Deseja continuar?");
  } while (continua);

  exibirestoque();
}

// 🗑 Excluir livro
function excluir() {
  let exclusao = normalizar(prompt("Digite o livro que deseja excluir"));

  const index = estoque.findIndex(livro =>
    normalizar(livro.nome) === exclusao
  );

  if (index !== -1) {
    alert(`Livro "${estoque[index].nome}" removido com sucesso.`);
    estoque.splice(index, 1);
    exibirestoque();
  } else {
    alert("Livro não encontrado.");
  }
}

// 🔎 Buscar livro
function buscarLivro() {
  const busca = normalizar(document.getElementById("busca").value);

  const resultado = estoque.find(livro =>
    normalizar(livro.nome).includes(busca)
  );

  if (resultado) {
    alert(`Livro encontrado:
Título: ${resultado.nome}
Autor: ${resultado.autor}
Ano: ${resultado.ano_fabricacao}
Exemplares: ${resultado.exemplares}`);
  } else {
    alert("Livro não encontrado.");
  }
}
