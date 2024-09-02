const filterButtons = document.querySelectorAll(".filter button");
const filterGetCards = document.querySelectorAll(".card-gallery .card");

const filterCard = (e) =>{
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')

    filterGetCards.forEach(card =>{
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove('hide');
        }
    })
};
filterButtons.forEach(button => button.addEventListener("click", filterCard));