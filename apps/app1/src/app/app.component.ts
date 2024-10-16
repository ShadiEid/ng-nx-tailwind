import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'libs/lib1/src';
import { CardComponent } from '@angular-tailwind-nx/lib2';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';
}
