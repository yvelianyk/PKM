/**
 * This module exports PrimeNG components.
 * For adding new component, import it from primeng core module,
 * and add to components array
 */
import { NgModule } from '@angular/core';

// Import components here:
import { ButtonModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';

// Add imported component here:
let components = [
    ButtonModule,
    DataGridModule
]

@NgModule({
    imports: components,
    exports: components
})

export class ComponentsModule { }
