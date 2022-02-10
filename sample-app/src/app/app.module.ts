import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ButtonsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
