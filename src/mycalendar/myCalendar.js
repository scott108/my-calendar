import React, { useState, useMemo } from 'react';
import './myCalendar.scss';
import classNames from 'classnames';
import Calendar from './components/calendar';
import { creatCalendarTable } from './utils/util';

export default function MyCalendar(props) {
  const [calendarTable, setCalendarTable] = useState([]);
  let year = '';

  return (
    <div className={classNames('my_calendar')}>
      <input
        type="text"
        onChange={(e) => {
          year = e.target.value;
        }}
        className={classNames('calendar_input')}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"></input>
      <button onClick={() => {
        const table = creatCalendarTable(year);
        setCalendarTable(table);
      }}>SHOW</button>
      <Calendar
        calendarTable={calendarTable}
      />
    </div>
  );
}