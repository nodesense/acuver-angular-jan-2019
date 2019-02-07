import { AppModule } from './app/app.module';
import { platformBrowserDynamic } 
        from "@angular/platform-browser-dynamic";

// bootstrap angular into browser

console.log('Loading Angular');

platformBrowserDynamic()
        .bootstrapModule(AppModule);
