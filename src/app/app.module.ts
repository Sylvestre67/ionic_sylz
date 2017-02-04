import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { SylzTopNav } from '../layout/sylz-top-nav/sylz-top-nav';
import { RedishPage } from '../pages/redish/redish';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    RedishPage,
	SylzTopNav,
  ],
  imports: [
    MaterialModule.forRoot(),
	FlexLayoutModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
	RedishPage,
	SylzTopNav,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
