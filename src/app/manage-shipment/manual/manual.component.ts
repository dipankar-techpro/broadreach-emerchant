import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

// Range datepicker Start
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
// Range datepicker Ends
@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss',
  '../../../assets/sass/libs/datepicker.scss'],
})
export class ManualComponent implements OnInit {
   // Variable declaration
   d: any;
   d2: any;
   d3: any;
   model: NgbDateStruct;
   popupModel;
   date: {year: number, month: number};
   displayMonths = 2;
   navigation = 'select';
   disabledModel: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
   disabled = true;
   customModel: NgbDateStruct;
 
   configModal;    // Global configuration of datepickers
 
 
   // Selects today's date
   selectToday() {
     this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
   }
 
   // Custom Day View Starts
   isWeekend(date: NgbDateStruct) {
     const d = new Date(date.year, date.month - 1, date.day);
     return d.getDay() === 0 || d.getDay() === 6;
   }
 
   isDisabled(date: NgbDateStruct, current: {month: number}) {
     return date.month !== current.month;
   }
   // Custom Day View Ends
   meridian = true;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  meridianTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  secondsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  spinnersTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  stepsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  validationTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  spinners = true;
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;


  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  // Using for Meridian
  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  // Using for Seconds  
  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  // Using for Spinners
  toggleSpinners() {
    this.spinners = !this.spinners;
  }
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys'},
    { id: 4, name: 'Pabrad??' },
    { id: 5, name: 'Klaip??da' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.selectToday();
  }

}
