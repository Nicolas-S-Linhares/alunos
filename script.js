var alunos = [];

for (var i = 0; i < 5; i++) {
    var nome = process.argv[i * 5 + 2];
    var idade = parseInt(process.argv[i * 5 + 3]);
    var notasAluno = [];

    for (var j = 0; j < 4; j++) {
        var nota = parseFloat(process.argv[i * 5 + 4 + j]);
        notasAluno.push(nota);
    }

    var media = notasAluno.reduce((a, b) => a + b) / notasAluno.length;

    alunos.push({
        nome: nome,
        idade: idade,
        notas: notasAluno,
        media: media
    });
}

for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].media < 6) {
        console.log(alunos[i].nome + " está reprovado.");
    } else {
        console.log(alunos[i].nome + " está aprovado.");
    }
}

var somaIdades = 0;
for (var i = 0; i < alunos.length; i++) {
    somaIdades += alunos[i].idade;
}
var mediaIdades = somaIdades / alunos.length;
console.log("A média de idade de todos os alunos é: " + mediaIdades);