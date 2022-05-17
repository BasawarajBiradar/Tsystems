import { Directive } from '@angular/core';
import { BasseConfigService } from './basse-config.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private base: BasseConfigService) {
    console.log(this.base.url);
   }

}
