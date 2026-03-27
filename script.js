let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let quintal_sim = document.getElementById('quintal_sim').value;
    let quintal_nao = document.getElementById('quintal_nao').value;
    let cuidou_sim = document.getElementById('cuidou_sim').value;
    let cuidou_nao = document.getElementById('cuidou_nao').value;
    let horas = document.getElementById('horas').value;
    let motivo = document.getElementById('motivo').value;
    let termo = document.getElementById('termo').value;

    document.getElementById('erro_nome').textContent = '';
    document.getElementById('erro_email').textContent = '';
    document.getElementById('erro_telefone').textContent = '';
    document.getElementById('erro_cpf').textContent = '';
    document.getElementById('erro_nascimento').textContent = '';
    document.getElementById('erro_cidade').textContent = '';
    document.getElementById('erro_quintal').textContent = '';
    document.getElementById('erro_cuidou').textContent = '';
    document.getElementById('erro_horas').textContent = '';
    document.getElementById('erro_motivo').textContent = '';
    document.getElementById('erro_termo').textContent = '';

    if (nome.length < 3) {
        document.getElementById('erro_nome').textContent = 'O seu nome deve ter pelo menos 3 caracteres';
        valido = false;
    }

    if (!email.includes('@')) {
        document.getElementById('erro_email').textContent = 'Insira um e-mail válido.';
        valido = false;
    }

    if (telefone.length < 8) {
        document.getElementById('erro_telefone').textContent = 'Insira no mínimo os 8 dígitos';
        valido = false;
    }

    if (cpf == '') {
        document.getElementById('erro_cpf').textContent = 'Seu CPF é obrigatório';
        valido = false;
    }

    if (motivo.length < 10) {
        document.getElementById('erro_motivo').textContent = 'Insira no mínimo 10 caracteres';
        valido = false;
    }
})