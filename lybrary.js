  // acervo de livros
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
//exibir o estoque na pagina
function exibirestoque(){
  let booklist = document.getElementById("booklist");
  booklist.innerHTML = "";
  estoque.forEach(livro => {
    const li = document.createElement("li");
    li.textContent = `${livro.nome} - Autor: ${livro.autor}, ano de fabricação: ${livro.ano_fabricacao}, exemplares: ${livro.exemplares}`;
    booklist.appendChild(li);
  });
}
exibirestoque();
//controle de exemplares
function relatorio() {
  // Organizar em ordem crescente pelo ano_fabricacao
  estoque.sort((a, b) => a.ano_fabricacao - b.ano_fabricacao);
  // Exibir relatório organizado
  estoque.forEach(livro => {
      console.log("Titulo: " + `${livro.nome} exemplares: ${livro.exemplares} autor: ${livro.autor} ano de fabricação: ${livro.ano_fabricacao}`);
      exibirestoque();
  });
};
//alterar unidades
function alterarunidades() {
  let nomeLivro = document.getElementById("busca").value;
  let novasUnidades = parseInt(document.getElementById("bookUnits").value);
  let livro = estoque.find(l => l.nome === nomeLivro);
  if (livro) {
    livro.exemplares = novasUnidades;
    alert(`Unidades do livro "${nomeLivro}" atualizadas para ${novasUnidades}.`);
    exibirestoque(); //atualiza a lista exibida
  } else {
    alert("Livro não encontrado")
  }
}
    //adiconar livros
    function main() {
      let continua = false;
      do {
        let livro = null;
        let erro = false;
        let nome = prompt("Digite o nome do livro");
        if(nome == "") {
            erro = true;
            alert("Por favor insira um nome válido");
          } else if (!isNaN(parseFloat(nome))) {
            erro = true;
            alert("Numeros não são válidos. Tente novamente")
        }
        if(erro == false) {
          livro = {
              nome: nome,
              autor: prompt("Digite o autor do livro"),
              ano_fabricacao: parseInt(prompt("Digite o ano de fabricação"))
          };
        }
       estoque.push(livro);
      continua = confirm("Deseja continuar ?")}
      while(continua == true);
      exibirestoque();
  };
  //excluir livros
  function excluir() {
    let exclusao = prompt("Digite o livro que deseja excluir");
    let index = null;
   estoque.forEach(livro => {
    if(exclusao === livro.nome) {
        index = estoque.findIndex(item => item.nome === exclusao);
        estoque.splice(index, 1);
    }
   });
    };
    // Função para buscar o livro
    function buscarLivro() {
      const busca = document.getElementById("busca").value.toLowerCase();
      const resultado = estoque.find(livro =>
        livro.nome.toLowerCase().localeCompare(busca) === 0
      );
      if (resultado) {
        alert(`Livro encontrado: ${resultado.nome}, Exemplares: ${resultado.exemplares}`);
      } else {
        alert("Livro não encontrado.");
      }
    }
  exibirestoque()