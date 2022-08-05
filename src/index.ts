const nameAvatar=document.querySelector('.name') as HTMLHeadingElement
const descAvatar=document.querySelector('.desc') as HTMLDivElement
const btnRandom=document.querySelector('button') as HTMLElement
const avatar=document.querySelector('#avatar') as HTMLImageElement
const app=document.querySelector('.container-app') as HTMLDivElement
const initial=document.querySelector('.initial') as HTMLDivElement

type listAvatar={
    name:string,
    description:string,
    img:string
}


let listOfAvatar:listAvatar[]=[
    {  
         name:'Goku',
        img:'/goku.png',
        description:`
        Protagonista da Animação,Goku é um personagem da raça sayajim que foi enviado a terra pleo seu pai para ter sua vida
        salva da destruição doe seu antigo planeta:planeta Vegeta.Ao longo de toda a sua trajetória como terráqueo fez grandes amigos 
        e também inimigos até que aos poucos foi descobrindo as suas origens.Tornou-se paide Gohan e Goten
        
    `},
    { 
        name:'Vegeta',
       img:'/vegeta.png',
       description:`
        Principe dos Sayajins e filho do Rei Vegeta.
        Vegeta cresceu como um guerreiro orgulhoso e sedento de poder.
        Veio á terra para destruir o planeta mas acabou entrando em confronto com Goku e os demais guerreiros Z.Vegeta tornou-se mais tarde melhor amigo de goku e companheiro
        de batalhas,tornando-se assim os dois os mais guerreiros Z.Tornou-se pai de Trubks e Bra.

       `
    },
    {
        name:'Mirai Trunks',
        img:'/trunks.png',
        description:` Filho mais velho de Vegeta.Trunks adulto teve sua primeira aparição durante as sagas andróide.Veio do futuro para ajudar Goku com a sua doença e
        também avisar á todos da terrivel possibilidade de um futuro sem eles.Trunks mais tarde veio novamente pedir a ajudar dos guerreiros durante a saga Goku Black.`
    
    },
    {
         name:'Gohan',
         img:'/gohan.png',
         description:`
         Filho mais velho de Goku,gohan teve suas aventuras ainda criança,aprendeu a despertar a sua força durante os treinamentos com piccolo,
         na qual tem uma grande admiração e afeto.Gohan foi o primeiro a despertar a forma de super sayjim 2 e foi o que causou a destruição de cell.Gohan também elevou o seu poder 
         durante a saga majin boo na qual despertou um novo poder ao treinar com o Kaioshin.
         
         
         `},
    {
        name:'Piccolo',
        img:'/piccolo.png',
        description:`
        Piccolo é um anti-herói,originalmente era inimigo de Goku e mais tarde não só tornou-se amigo deste como também foi o responsável por treinar seu Filho Gohan e sua neta Pan.
        
        `
    },
    {
        name:'Majin Boo',
        img:'/boo.png',
        description:`Majin Boo foi um dos vilões que mais deu trabalho durante o Anime,
        com a capacidade de absorver seus inimigos,majin boo sempre usou essa habilidade quando se achava em desvantagem em uma luta.
        Por ter absorvido grandes guerreiros com alto poder de luta como gotenks,piccolo e gohan,pôde ter uma grande saga.
        
        `},

    {
        name:'Cell',
        img:'/cell.png',
        description:`
        Criado pelo Dr.Mac Gero,Cell foi um andróide criado com uma única missão,destruir:Goku.Ele sabia que foi criado para ser a mais perfeita das criações do Doutor  e para chegar ao seu
        nivel Perfeito ele teria que absover os andróides N°17 e N°18 e assim o fez,porém foi destruido por Gohan.
    `},
 
]




let setData=()=>{
    initial.style.display='none'
    app.style.display='flex'
    btnRandom.innerHTML='<img src="/imgs/esfera.png" alt="">novo personagem'

    let index:number=Math.floor(Math.random() * listOfAvatar.length) 
    
    nameAvatar.innerHTML=listOfAvatar[index].name
    avatar.src=`./imgs${listOfAvatar[index].img}`
    descAvatar.innerHTML=listOfAvatar[index].description

}

btnRandom.addEventListener('click',setData)