import { Component, Input } from '@angular/core';
import { currentylEffectsInterface } from 'src/app/interfaces/characterSheetDataInterface';

@Component({
  selector: 'app-currently-effects',
  templateUrl: './currently-effects.component.html',
  styleUrls: ['./currently-effects.component.scss'],
})
export class CurrentlyEffectsComponent {
  @Input() data: currentylEffectsInterface;
  constructor() {}
}
