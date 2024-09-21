$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        novaLinha();
    })
})

function novaLinha(){
    const novoItem = $('<li style="display: none;"></li>');
    
    const inputAtividade = $('#atividade').val();
    const inputData = $('#data').val();
    const inputHoras = $('#horas').val();

    $(`<p>${inputAtividade}</p>`).appendTo(novoItem);
    $(`
        <div class="marca">
            <p>${inputHoras}</p>
            <p>${inputData}</p>
        </div>`
    ).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);

    $('#atividade').val('');
    $('#data').val('');
    $('#horas').val('');

    tarefaConcluida(novoItem);
}

function tarefaConcluida(item){
    $(item).click(function(){
        $(this).css('text-decoration', 'line-through');
    });
}