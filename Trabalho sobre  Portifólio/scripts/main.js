var minhaImagem = document.querySelectorAll('img');

minhaImagem[0].onclick = function(){

	var meuLocal = minhaImagem[0].getAttribute('src');

	if(meuLocal === 'imagens/dados.jpeg'){
		minhaImagem[0].setAttribute('src', 'imagens/tecnologia.jpg');
	}	else{
			minhaImagem[0].setAttribute('src', 'imagens/dados.jpeg');
	}

}

minhaImagem[1].onclick = function(){

	var meuLocal = minhaImagem[1].getAttribute('src');

	if(meuLocal === 'imagens/tecnologia.jpg'){
		minhaImagem[1].setAttribute('src','imagens/dados.jpeg' );
	}	else{
			minhaImagem[1].setAttribute('src', 'imagens/tecnologia.jpg');
	}

}