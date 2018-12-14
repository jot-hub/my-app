import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { addMinutes } from 'date-fns';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {

  view: string = 'month';

  viewDate: Date = new Date()

  // exclude weekends
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  public ownWeekViewHour(date: Date, locale: string): string {
    return formatDate(date, 'h:mm', locale);
  }
}
