import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista zadań';

  get footer(): string {
    return '2020 © Lista zadań. All rights reserved.';
  }

  // function equal to getter
  // getFooter(): string {
  //   return '2020 © Lista zadań. All rights reserved.';
  // }
}
