let carros_estacionados = 0;
const limitemaximo = 4;
console.log("---Iniciando verificação de vagas---")
for (let vaga = 1; vaga <= 10; vaga ++ ){
    if(vaga === 4 || vaga === 7){
        console.log(`Vaga ${vaga}: [Interditada]-Pulando...`);
        continue;
    }
    carros_estacionados ++;
    console.log(`Vaga ${vaga}:[Livre]->carro_estacionado!(Total:${carros_estacionados})`);
    if(carros_estacionados === limitemaximo){
        console.log("---Limite atingido! Fechar portão---");
        break;
    }
}
console.log("Relatório final: Operação de entrada encerrada");