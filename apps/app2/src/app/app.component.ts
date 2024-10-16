import { Component } from '@angular/core';
import { HeaderComponent } from '@angular-tailwind-nx/lib1';
import { CardComponent } from '@angular-tailwind-nx/lib2';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app2';
}
