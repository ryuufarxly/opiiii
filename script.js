// Avatar modal
const avatar=document.getElementById('avatar');
const avatarModal=document.getElementById('avatarModal');
avatar.addEventListener('click',()=>avatarModal.hidden=false);
avatarModal.addEventListener('click',()=>avatarModal.hidden=true);

// Gallery modal
const openGallery=document.getElementById('openGallery');
const galleryModal=document.getElementById('galleryModal');
const closeGallery=document.getElementById('closeGallery');
openGallery.addEventListener('click',()=>{
  galleryModal.hidden=false;
  for(let i=0;i<5;i++){
    const heart=document.createElement('span');
    heart.className='heart-effect';
    heart.textContent='❤';
    heart.style.left=(Math.random()*80+10)+'%';
    heart.style.color='var(--pink-pastel)';
    openGallery.appendChild(heart);
    setTimeout(()=>heart.remove(),1000);
  }
});
closeGallery.addEventListener('click',()=>galleryModal.hidden=true);
galleryModal.addEventListener('click',(e)=>{if(e.target.classList.contains('modal-backdrop')) galleryModal.hidden=true;});

// Card ripple effect
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click',e=>{
    const ripple=document.createElement('span');
    ripple.className='card-ripple';
    ripple.style.left=(e.clientX-card.offsetLeft)+'px';
    ripple.style.top=(e.clientY-card.offsetTop)+'px';
    ripple.style.width=ripple.style.height=Math.max(card.offsetWidth,card.offsetHeight)+'px';
    card.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
    card.classList.add('active');
    setTimeout(()=>card.classList.remove('active'),420);
  });
});

// Bubbles
const bubbles=document.createElement('div');
bubbles.className='bubbles';
document.body.appendChild(bubbles);
function createBubble(){
  const b=document.createElement('div');
  b.className='bubble';
  const size=Math.random()*18+8;
  b.style.width=b.style.height=size+'px';
  b.style.left=Math.random()*100+'%';
  b.style.animationDuration=(6+Math.random()*6)+'s';
  bubbles.appendChild(b);
  setTimeout(()=>b.remove(),12000);
}
setInterval(createBubble,700);

// Fish layer
const fishLayer=document.createElement('div');
fishLayer.className='fish-layer';
document.body.appendChild(fishLayer);
const colors=['orange','yellow','blue','red','green'];
function createFish(){
  const f=document.createElement('div');
  f.className='fish';
  f.style.top=(Math.random()*80+10)+'%';
  f.style.animationDuration=(16+Math.random()*10)+'s';
  const color=colors[Math.floor(Math.random()*colors.length)];
  f.innerHTML=`<svg viewBox="0 0 64 32"><path d="M2 16 L16 8 L32 16 L16 24 Z" fill="${color}"/><circle cx="8" cy="16" r="3" fill="white"/><circle cx="9" cy="16" r="1.2" fill="black"/></svg>`;
  fishLayer.appendChild(f);
  setTimeout(()=>f.remove(),26000);
}
setInterval(createFish,6000);
