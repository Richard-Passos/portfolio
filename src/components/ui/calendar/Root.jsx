'use client';

import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils';

import { buttonVariants } from '../button';

const Calendar = ({ className, classNames = {}, ...props }) => {
  const mergedClassNames = Object.entries(calendarClassNames).reduce(
    (obj, [key, value]) => ({ ...obj, [key]: cn(value, classNames[key]) }),
    {},
  );

  return (
    <DayPicker
      className={cn('w-fit rounded-md border bg-main p-4 text-sm', className)}
      classNames={{ ...classNames, ...mergedClassNames }}
      fixedWeeks
      showOutsideDays
      {...props}
    />
  );
};

const calendarClassNames = {
  caption: 'relative flex h-7 items-center justify-center',
  caption_dropdowns: 'flex h-full gap-2 first:[&>div]:hidden',
  caption_label: 'flex h-full items-center gap-1 rounded-sm px-2 font-medium',

  cell: 'p-0',

  day: buttonVariants({
    color: 'inverted',
    style: 'ghost',
    size: 'sm',
    className:
      'aspect-square h-9 px-0 disabled:opacity-10 [&:not(button)]:pointer-events-none',
  }),
  day_hidden: 'invisible',
  day_outside: 'opacity-25 hover:opacity-100 aria-selected:opacity-100',
  day_range_end: 'rounded-l-none [&.rounded-r-none]:rounded-l-full',
  day_range_middle: 'rounded-none',
  day_range_start: 'rounded-r-none [&.rounded-l-none]:rounded-r-full',
  day_selected: 'bg-primary text-primary-content hover:bg-primary/80',

  dropdown:
    'absolute inset-0 cursor-pointer bg-main opacity-0 [&:focus+div]:outline',
  dropdown_month: 'relative [&>div]:border [&>span]:hidden',
  dropdown_year: 'relative [&>div]:border [&>span]:hidden',
  dropdown_icon: 'h-3.5 w-3.5',

  head_cell:
    'inline-flex w-9 items-center justify-center font-normal text-muted-content',

  month: 'space-y-4',
  months: 'flex w-min flex-wrap justify-center gap-4 min-[553px]:w-fit',

  nav_button: buttonVariants({
    color: 'inverted',
    style: 'outline',
    size: 'sm',
    className: 'absolute top-0 aspect-square h-full rounded-sm px-0',
  }),
  nav_button_next: 'right-0',
  nav_button_previous: 'left-0',
  nav_icon: 'h-4 w-4',

  row: 'mt-2 flex',

  weeknumber: buttonVariants({
    color: 'inverted',
    style: 'ghost',
    size: 'sm',
    className:
      'aspect-square h-9 px-0 font-normal text-muted-content disabled:opacity-10 [&:not(button)]:pointer-events-none',
  }),
};

export default Calendar;
