import {Injectable} from '@angular/core';
import {UnixTime} from './unix-time';
import {SliderValues} from "./slider-values";
import {ThumbPositionInfo} from "./thumb-position-info";
import {DateTime} from "luxon";

@Injectable({
  providedIn: 'root'
})
export class TimeSliderService {
  sliderValues: SliderValues = {sliderStart: 0, sliderEnd: 1, sliderValue: 1, sliderOffset: 0};
  sections: number[] = [0, 0.2, 0.5, 0.7, 1];

  constructor() {
  }

  public getDateFromThumbPosition(thumbPosition: ThumbPositionInfo): UnixTime {
    const buttom = new Date(2022, 1, 1);
    const upper = new Date(2022, 4, 1);
    return DateTime.fromJSDate(this.randomDate(buttom, upper)).toUnixInteger();
  }

  public getThumbPosition(unixTime: UnixTime): ThumbPositionInfo {
    const relativeTime = unixTime - this.sliderValues.sliderStart;
    const thumbPosition = relativeTime / this.sliderValues.sliderValue;
    return {thumbPosition: thumbPosition, sliderOffset: 0.5};
  }

  public dateToUnixTime(date: Date): UnixTime {
    return date.getTime() / 1000;
  }

  public unixTimeToDate(unixTime: UnixTime): Date {
    return new Date(unixTime * 1000);
  }

  public getMiddayFromUnixTime(pickedUnixTime: UnixTime): UnixTime {
    return this.getDateMiddayUnixTime(this.unixTimeToDate(pickedUnixTime));
  }

  public getTodayUnixTime(): UnixTime {
    return new Date().getTime() / 1000;
  }

  public getDateMidnightUnixTime(date: Date): UnixTime {
    return date.setHours(0, 0, 0, 0) / 1000;
  }

  public getDateBeforeMidnightUnixTime(date: Date): UnixTime {
    return date.setHours(23, 59, 59, 0) / 1000;
  }

  public getTodayMidnightUnixTime(): UnixTime {
    return this.getDateMidnightUnixTime(new Date());
  }

  public randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  // public thisMonthAndYearToShow(pickedDate: Date): string {
  //   return this.datePipe.transform(pickedDate, 'MMMM yyyy');
  // }
  //
  // public isoToUnixTime(time: string): UnixTime {
  //   return moment(time).unix();
  // }
  //
  // public dateToShowInLegend(date: Date): string {
  //   return this.datePipe.transform(date, 'EEEEEE d.M.');
  // }
  //
  // public todaysDateToShow(): string {
  //   return this.datePipe.transform(new Date(), 'dd. MMMM yyyy');
  // }
  //
  // public createDateToShow(pickedDate: Date): string {
  //   return this.datePipe.transform(pickedDate, 'EEEEEE d.M.yyyy');
  // }
  //
  // public createTimeToShow(date: Date | string, displayWide: boolean): string {
  //   if (displayWide === true) {
  //     return this.datePipe.transform(date, 'HH : mm');
  //   } else {
  //     return this.datePipe.transform(date, 'HH:mm');
  //   }
  // }
  //
  // public createDateToShowForMobileInfoPanel(pickedDate: Date): string {
  //   return this.datePipe.transform(pickedDate, 'd.M.yy');
  // }

  private getDateMiddayUnixTime(date: Date): UnixTime {
    return date.setHours(12, 0, 0, 0) / 1000;
  }

  getSections(date: UnixTime): UnixTime[] {
    const newDateTime = DateTime.fromSeconds(date);
    return [
      newDateTime.minus({day: 3}).toUnixInteger(),
      newDateTime.minus({day: 2}).toUnixInteger(),
      newDateTime.minus({day: 1}).toUnixInteger(),
      newDateTime.toUnixInteger(),
      newDateTime.plus({day: 1}).toUnixInteger(),
      newDateTime.plus({day: 2}).toUnixInteger(),
      newDateTime.plus({day: 3}).toUnixInteger()
    ];
  }
}
