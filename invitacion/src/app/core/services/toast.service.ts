import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  show(msg: string, color = 'var(--navy)') {
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
      background:${color};color:#fff;font-family:'Cinzel',serif;
      font-size:10px;letter-spacing:2px;padding:10px 24px;
      z-index:99999;white-space:nowrap;
      box-shadow:0 4px 16px rgba(0,0,0,.2);
      animation:toastIn .3s ease;`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }
}
