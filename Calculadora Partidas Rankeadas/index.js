// Exemplos de uso (laço de repetição)
const partidas = [
    { vitorias: 8, derrotas: 3 },
    { vitorias: 15, derrotas: 4 },
    { vitorias: 40, derrotas: 12 },
    { vitorias: 76, derrotas: 10 },
    { vitorias: 90, derrotas: 5 },
    { vitorias: 98, derrotas: 3 },
    { vitorias: 120, derrotas: 19 }
];

for (let i = 0; i < partidas.length; i++) {
    const { vitorias, derrotas } = partidas[i];
    const resultado = calcularRank(vitorias, derrotas);

    console.log(
        `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
    );
}

function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}