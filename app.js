'use strict';
const DEFAULT='Welcome to the EduSuite demonstration. Term announcements will appear here.';
const KEY='edusuite_demo_public_announcement_v1';
const announcement=document.querySelector('#announcement');
const status=document.querySelector('#status');
function current(){try{return localStorage.getItem(KEY)||DEFAULT}catch{return DEFAULT}}
function render(){const box=document.querySelector('#news-list');box.replaceChildren();const card=document.createElement('article');card.className='card';const heading=document.createElement('h3');heading.textContent='School notice';const body=document.createElement('p');body.textContent=current();card.append(heading,body);box.append(card);announcement.value=current()}
document.querySelector('#save').addEventListener('click',()=>{try{localStorage.setItem(KEY,announcement.value.trim()||DEFAULT);status.textContent='Saved in this browser only.'}catch{status.textContent='Local storage unavailable.'}render()});
document.querySelector('#reset').addEventListener('click',()=>{try{localStorage.removeItem(KEY)}catch{}status.textContent='Demo reset.';render()});
render();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
let deferredPrompt;window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredPrompt=event;document.querySelector('#install').hidden=false});document.querySelector('#install').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.querySelector('#install').hidden=true});
