import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Getstarted } from '../getstarted/getstarted';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , Getstarted],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('netflixFrontend');
}
