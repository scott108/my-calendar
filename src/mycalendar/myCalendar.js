import React, { useState, useMemo } from 'react';
import './myCalendar.scss';
import classNames from 'classnames';
import Calendar from './components/calendar';
import { creatCalendarTable } from './utils/util';
import moment from 'moment';

export default function MyCalendar(props) {
  const [calendarTable, setCalendarTable] = useState([]);
  let year = 0;

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
      <div className={classNames('calendar_table')}>
        {
          calendarTable.map((calendar, index) => {
            return (
              <Calendar
                key={index}
                calendar={calendar}
              />
            )
          })
        }
      </div>
    </div>
  );
}