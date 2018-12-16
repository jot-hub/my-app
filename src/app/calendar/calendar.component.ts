import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit
} from '@angular/core';
import { DAYS_OF_WEEK, CalendarEvent } from 'angular-calendar';
import { addMinutes, addDays, subDays, addHours } from 'date-fns';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date()

  // exclude weekends
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  events: CalendarEvent[]

  public ownWeekViewHour(date: Date, locale: string): string {
    return formatDate(date, 'h:mm', locale);
  }

  ngOnInit() {

    this.events = this.getEvents();
  }

  public getEvents(): CalendarEvent[] {

    return [
        {
          title: "Test event",
          start: new Date('December 17, 2018 10:24:00'),
          color: {
            primary: "pink",
            secondary: "red"
          },
          allDay: true
        }
    ];
  }
}
