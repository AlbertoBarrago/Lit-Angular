// card.component.ts
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { User } from "../../../web-components/card-user/user";
import { CommonModule } from "@angular/common";
import {filter, fromEvent} from 'rxjs';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <card-user
      class="card-item"
      [user]="user">
    </card-user>
  `,
  styleUrls: ['./card.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() user: User | null = null;
}
