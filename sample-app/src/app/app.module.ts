import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ButtonsModule,
        DropDownListModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
