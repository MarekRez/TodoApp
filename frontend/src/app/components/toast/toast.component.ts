import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  toast: Toast | null = null;

  show(toast: Toast) {
    console.log('Showing toast:', toast); // Debug
    this.toast = toast;
    setTimeout(() => this.hide(), 3000);
  }

  hide() {
    this.toast = null;
  }

  getToastClass(): string {
    const baseClass = 'text-bg-';
    return baseClass + this.toast?.type;
  }

}

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}
