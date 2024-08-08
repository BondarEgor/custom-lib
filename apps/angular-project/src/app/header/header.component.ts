import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ey-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyHeaderComponent {
  SOCIAL_LINKS = [
    'fa-brands fa-telegram',
    'fa-brands fa-twitter',
    'fa-brands fa-youtube',
    'fa-brands fa-facebook',
    'fa-solid fa-moon',
  ];
}
