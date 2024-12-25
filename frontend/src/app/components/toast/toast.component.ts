import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  @Input() message: string | null = null;

  show(message: string) {
    this.message = message;
    setTimeout(() => this.hide(), 2000); // Auto-hide after 2 s
  }

  hide() {
    this.message = null;
  }
}
