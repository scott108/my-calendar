import React, { useMemo } from 'react';
import { weekHeaders, monthNameTable } from '../utils/util';
import classNames from 'classnames';
import SelectableTableBody from './selectableTableBody';
import moment from 'moment';

export default function Weeks(props) {
  const { weeks, month } = props;
  const now = useMemo(() => moment().format('YYYY-M-DD'), []);
  const renderWeeksHeader = () => {
    return weekHeaders.map((head) => {
      return (
        <td key={head} align='center'>
          <div
            className={classNames('week_item')}>
              {head}
          </div>
        </td>
      );
    });
  }
  return (
    <table style={{width: '100%', hieght: '100%'}}>
      <thead>
        <tr>
          {renderWeeksHeader()}
        </tr>
      </thead>
      <tbody>
        <SelectableTableBody
          rows={6}
          columns={7}
          data={weeks}
          columnHeight={50}
          renderComponent={(week) => {
            const date = `${week.year}-${week.month}-${week.day}`;
            const isToday = date === now;
            const fontColor = isToday
              ? '#fff' : monthNameTable[week.month - 1] === month
              ? '#000' : '#BEBEBE';

            return (
              <div
                style={{
                  color: fontColor
                }}
                className={classNames(isToday ? 'week_item_highlight' : 'week_item')}>
                {week.day}
              </div>
            );
          }}
        />
      </tbody>
    </table>
  )
}