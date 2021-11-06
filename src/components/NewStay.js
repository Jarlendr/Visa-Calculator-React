import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewStay.css';

const NewStay = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <form className="new-stay__form">
      <DatePicker
        className="new-stay"
        isClearable
        withPortal
        placeholderText="Select Start Date"
        selected={startDate}
        onChange={(startDate) => setStartDate(startDate)}
        selectStart
        startDate={startDate}
        onFocus={(e) => (e.target.readOnly = true)}
      />
      <DatePicker
        className="new-stay"
        isClearable
        withPortal
        placeholderText="Select End Date"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
        onFocus={(e) => (e.target.readOnly = true)}
      />
      <span className="break"></span>
      <button className="button" type="button">
        Cancel
      </button>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewStay;
