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

    document.getElementById('erro_nome').value;
    document.getElementById('erro_email').value;
    document.getElementById('erro_telefone').value;
    document.getElementById('erro_cpf').value;
    document.getElementById('erro_nascimento').value;
    document.getElementById('erro_cidade').value;
    document.getElementById('erro_quintal').value;
    document.getElementById('erro_cuidou').value;
    document.getElementById('erro_horas').value;
    document.getElementById('erro_motivo').value;
    document.getElementById('erro_termo').value;
})