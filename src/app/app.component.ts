import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Shop';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('instagram',sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagramLogo.svg'));
    iconRegistry.addSvgIcon('electric',sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/electric.svg'));
    iconRegistry.addSvgIcon('construction',sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/construction.svg'));
    iconRegistry.addSvgIcon('electrical-service',sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/electrical-service.svg'));
    iconRegistry.addSvgIcon('free-shipping2', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/free-shipping2.svg'));
    iconRegistry.addSvgIcon('Customer-Support', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/Customer-Support.svg'));
    iconRegistry.addSvgIcon('boxes', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/boxes.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/email.svg'));
    iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/whatsapp.svg'))

   }

}
