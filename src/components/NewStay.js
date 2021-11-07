import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewStay.css';

const NewStay = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const startDateChange = (event) => {
    setStartDate(new Date(event));
  };

  const endDateChange = (event) => {
    setEndDate(new Date(event));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const dateInputs = {
      start: startDate,
      end: endDate,
      id: Math.random().toString(),
    };

    props.onSaveDateInputsHandler(dateInputs);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <form className="new-stay__form" onSubmit={submitHandler}>
      <DatePicker
        className="new-stay"
        isClearable
        withPortal
        placeholderText="Select Start Date"
        selected={startDate}
        onChange={startDateChange}
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
        onChange={endDateChange}
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
