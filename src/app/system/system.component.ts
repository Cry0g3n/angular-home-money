import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {
  @HostBinding('@fade') a = true;
}
