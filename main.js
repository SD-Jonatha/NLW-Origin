window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}



//console.log(scrollY)
function activateMenuAtCurrentSection(section){
  //Linha alvo
  const targetLine = scrollY + innerHeight / 2
  // verificar se a secao passou da linha
  // quais dados vou precisar?

  // O topo da secao
  const sectionTop = section.offsetTop 
  // a altura da seçao
  const sectionHeight = section.offsetHeight
  // o topo da seçao chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine 
  >= sectionTop
  // informaçoes dos dados e da lógica
  console.log('O topo da secao chegou ou passou da linha?', 
  sectionTopReachOrPassedTargetline)

  // verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  // a seçao termina onde   ?
  const sectionEndsAt = sectionTop + sectionHeight + 300


  const sectionEndPassedTargetline = sectionEndsAt 
  <= targetLine

  console.log('o fundo da seçao passou da linha', sectionEndPassedTargetline)

  //limites da seçao passou da linha
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline && 
  !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}
  

function showNavOnScroll(){
  
  if(scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 550){
    backToTopButton.classList.add('show')
 
  } else {
    backToTopButton.classList.remove('show')
  }
}



function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header, 
#services .card,
#about,
#about header, 
#about .content`)
