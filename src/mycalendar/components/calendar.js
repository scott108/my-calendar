import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Weeks from './weeks';

export default function Calendar(props) {
  const { calendarTable } = props;

  return (
    <div className={classNames('calendar_table')}>
      {
        calendarTable.map((calendar, index) => {
          const { currentYear, currentMonth, weeks } = calendar;
          return (
            <div key={index} className={classNames('calendar')}>
              <div
                className={classNames('title')}>
                {currentMonth}
              </div>
              <Weeks
                weeks={weeks}
                year={currentYear}
                month={currentMonth}
              />
            </div>
          )
        })
      }
    </div>
  )
}