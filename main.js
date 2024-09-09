
$('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('ul');

    $(`<li>
        <img src="./images/icone_concluir.png" alt="ícone de tarefa ainda a concluir"/>
        ${novaTarefa}
        </li>`).appendTo(novoItem);

    $('#nova-tarefa').val('');

    
    $('li').click(function(){
        $('li').toggleClass('linha');
    })


})

