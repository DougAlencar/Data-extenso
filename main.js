		// gerar mes por extenso
		function dataPorExtenso(date) {
		const meses = [
		"janeiro", "fevereiro", "março",
		"abril", "maio", "junho",
		"julho", "agosto", "setembro",
		"outubro", "novembro", "dezembro"
		];
	  
	  const dia = date.getDate();
	  const mes = meses[date.getMonth()];
	  const ano = date.getFullYear();
  
		return `${dia} de ${mes} de ${ano}`;
}
		const hoje = new Date();
    
    alert("São Bernado do Campo " + dataPorExtenso(hoje) ")
