import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Weeks from './weeks';

export default function Calendar(props) {
  const { currentYear, currentMonth, weeks } = props.calendar;
  return (
    <div key={props.key} className={classNames('calendar')}>
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
}