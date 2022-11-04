let isIgnite = true
function ChangeCard(event){
    const card = event.currentTarget //Vai pegar no evento o que está sendo clicado que é o cartão
    const backgroundImage = isIgnite ? "url(./Assets/Bg-explore.svg)" : "url(./Assets/Bg-ignite.svg)"
    isIgnite = !isIgnite    //Permite que transforme em false depois do evento se acima
    card.style.backgroundImage = backgroundImage
}