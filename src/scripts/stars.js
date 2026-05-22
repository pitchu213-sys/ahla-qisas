/* src/scripts/stars.js */
function makeStars(id, count){
  const c = document.getElementById(id); 
  if(!c) return;
  for(let i=0;i<count;i++){
    const s = document.createElement('span');
    s.className = 'star';
    const size = (i%3)+2;
    s.style.cssText = `top:${(i*37)%100}%;left:${(i*53)%100}%;width:${size}px;height:${size}px;animation-delay:${(i%5)*.6}s`;
    c.appendChild(s);
  }
}
makeStars('stars',40);
makeStars('stars2',25);
makeStars('stars3',15);