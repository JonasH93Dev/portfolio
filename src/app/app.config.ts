import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: TRANSLATE_HTTP_LOADER_CONFIG, useValue: { prefix: '/assets/i18n/', suffix: '.json' } },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateHttpLoader },
        fallbackLang: 'en'
      })
    )
  ]
};
