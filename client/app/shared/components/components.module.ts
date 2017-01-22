/**
 * This module exports PrimeNG components.
 * For adding new component, import it from primeng core module,
 * and add to components array
 */
import { NgModule } from '@angular/core';

// Import components here:
import { MenuModule, MenubarModule, MenuItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { EditorModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';


// Add imported component here:
let components = [
    ButtonModule,
    DataGridModule,
    MenubarModule,
    MenuModule,
    MenubarModule,
    EditorModule,
    SharedModule,
    InputTextModule,
    GrowlModule
]

@NgModule({
    imports: components,
    exports: components
})

export class ComponentsModule { }
