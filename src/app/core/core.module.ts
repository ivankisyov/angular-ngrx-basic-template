import { NgModule, Optional, SkipSelf, isDevMode } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../store/router/custom-serializer';
import { reducers } from '../store';

@NgModule({
  imports: [
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  exports: [HeaderComponent, FooterComponent, AppRoutingModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
