import { Routes, RouterModule } from '@angular/router';
import {CSVReaderComponent} from './csv-reader/csv-reader.component';


export const appRoutes: Routes = [
    { 
        path: 'roboStatement', 
        component: CSVReaderComponent,
    },
    { 
        path: '', 
        component: CSVReaderComponent, 
    }
];
