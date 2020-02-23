import React, { useState, useMemo } from 'react';
import './myCalendar.scss';
import classNames from 'classnames';
import Calendar from './components/calendar';
import { creatCalendarTable } from './utils/util';
import TextField from '@material-ui/core/TextField';

export default function MyCalendar(props) {
  const [calendarTable, setCalendarTable] = useState([]);
  const [isValid, setValid] = useState(true);
  let year = '';

  return (
    <div className={classNames('my_calendar')}>
      <TextField
        InputProps={{
          className: classNames('calendar_input'),
        }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
          year = e.target.value;
        }}
        label='Year'
        variant='outlined'
        error={!isValid}
        helperText={!isValid && 'Invalid year'} />
      <button onClick={() => {
        if(year.match(/^[0-9]+$/) && parseInt(year) > 0 && parseInt(year) <= 9999) {
          const table = creatCalendarTable(year);
          setCalendarTable(table);
          setValid(true);
        } else {
          setValid(false);
        }
      }}>SHOW</button>
      <Calendar
        calendarTable={calendarTable}
      />
    </div>
  );
}