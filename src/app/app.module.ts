import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerAComponent } from './consumer-a/consumer-a.component';
import { ConsumerBComponent } from './consumer-b/consumer-b.component';
import { HomeComponent } from './home/home.component';
import { TimePickerSliderComponent } from './time-picker-slider/time-picker-slider.component';
import { DatetimePickerBoxComponent } from './time-picker-slider/datetime-picker-box/datetime-picker-box.component';
import { TimeSliderComponent } from './time-picker-slider/time-line/time-slider/time-slider.component';
import { TimeLineComponent } from './time-picker-slider/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerAComponent,
    ConsumerBComponent,
    HomeComponent,
    TimePickerSliderComponent,
    DatetimePickerBoxComponent,
    TimeSliderComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
