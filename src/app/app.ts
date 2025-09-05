import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonView } from "./components/json-view/json-view";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test_angular');
}
