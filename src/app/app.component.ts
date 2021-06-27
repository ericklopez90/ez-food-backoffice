import { Component } from '@angular/core';
import { LoaderService } from '@services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ez-food-backoffice';

  loading: Observable<boolean>;
  constructor( private loader: LoaderService ) {
    this.loading = this.loader.isLoading;
  }
}
