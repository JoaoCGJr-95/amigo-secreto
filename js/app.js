// Adicionar nomes dos amigos

let nomes = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    let nomeMaiusculo = nome.toUpperCase();

//Recuperar lista e incluir nomes na lista

    let listaAmigos = document.getElementById('lista-amigos');
    
    if(nome.trim() === ''){
        alert('Por favor, insira um nome antes de adicionar!');
        return;
    }
    if(nomes.includes(nomeMaiusculo)){
        alert(`O nome ${nome} ja foi adicionado a lista de nomes!`);
        return;
    } else if(nomes == ''){
        listaAmigos.textContent = listaAmigos.textContent + nome;
        nomes.push(nome);
    } else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nome;
        nomes.push(nome);
    }
    document.getElementById('nome-amigo').value = '';

    atualizarLista();
    atualizarSorteio();
}

//sortear nomes

function sortear(){
    if(nomes.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio');
    embaralhaVetor(nomes);

    if(nomes.length === 0){
        alert('A lista de nomes está vazia. Adicione nomes antes de sortear!');
        return;
    }
    
    for (let i = 0; i < nomes.length; i++){
        if(i == nomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' ---> ' + nomes[0] + '<br>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + ' ---> ' + nomes[i + 1] + '<br>';
        }  
    }
}

function embaralhaVetor(nomes){
    for( let i = nomes.length; i; i--){
        let indiceAleatorio = Math.floor(Math.random() * i);
        [nomes[i - 1], nomes[indiceAleatorio]] = [nomes[indiceAleatorio], nomes[i - 1]];
    }
}

//Desafio: remover algum amigo e atualizar a lista em tempo real, sem precisar refazer toda a lista.

function excluirAmigo(index){
    nomes.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = nomes[i];
        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        }); //adiciona o evento de fazer algo ao clicar. No caso excluir!   
        lista.appendChild(paragrafo);  
    }
}

function atualizarSorteio(){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

//reiniciar jogo

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    nomes = [];
}