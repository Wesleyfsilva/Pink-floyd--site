// Dados dos integrantes
const integrantes = {
  "syd-barrett": "Syd Barrett foi o fundador original do Pink Floyd, conhecido por seu estilo único e contribuição essencial para os primeiros álbuns da banda.",
  "roger-waters": "Roger Waters foi o principal compositor e letrista da banda durante sua fase mais criativa, incluindo álbuns icônicos como 'The Wall'.",
  "david-gilmour": "David Gilmour é conhecido por seus solos de guitarra inconfundíveis e contribuições significativas para a música e produção da banda.",
  "nick-mason": "Nick Mason é o baterista original da banda e é conhecido pelo seu estilo de bateria inovador e pela sua presença constante na banda ao longo dos anos.",
  "richard-wright": "Richard Wright foi o tecladista e um dos compositores chave da banda, conhecido por suas contribuições melódicas e atmosféricas aos álbuns do Pink Floyd."
};

// Manipulação do formulário
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  const question1 = document.getElementById('question1').value.trim().toLowerCase();
  const question2 = document.getElementById('question2').value.trim().toLowerCase();
  
  let result = '';

  // Respostas corretas
  const correctAnswers = {
      question1: 'the piper at the gates of dawn',
      question2: 'syd barrett'
  };

  // Verifica as respostas
  if (question1 === correctAnswers.question1 && question2 === correctAnswers.question2) {
      result = 'Parabéns! Você acertou todas as respostas!';
  } else {
      result = 'Algumas respostas estão incorretas. Tente novamente!';
  }

  // Mostra o resultado
  document.getElementById('quiz-result').textContent = result;

  // Limpa os campos do formulário
  this.reset();
});

// Manipulação dos integrantes
document.querySelectorAll('.integrante').forEach(function(item) {
  item.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      const info = document.getElementById('integrante-info');
      const p = info.querySelector('p');

      // Remove a classe 'active' de todos os integrantes
      document.querySelectorAll('.integrante-info').forEach(function(el) {
          el.classList.remove('active');
      });

      // Atualiza o texto com as informações do integrante e exibe o info
      p.textContent = integrantes[id];
      info.classList.add('active');
  });
});
