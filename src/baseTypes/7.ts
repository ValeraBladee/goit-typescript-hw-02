/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY",
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.saturday || day === Weekday.sunday;
}

isWeekend(Weekday.monday)