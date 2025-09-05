import { Routes } from '@angular/router';
import { JsonView } from './components/json-view/json-view';
import { HomePage } from './components/home-page/home-page';
import { ClassDetail } from './components/classes/class-detail/class-detail';

export const routes: Routes = [
    {path: 'json-view', component: JsonView},
    {path: 'home', component: HomePage},
    {path: 'classes/:className', component: ClassDetail},
    {path: '', redirectTo: 'json-view', pathMatch: 'full'},
];
