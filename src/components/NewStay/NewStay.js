import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewStay.css';

const NewStay = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!startDate || !endDate) {
      return;
    }
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
        fixedHeight
        dateFormat="dd/MM/yy"
        placeholderText="Select Start/End"
        selected={null}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        onFocus={(e) => (e.target.readOnly = true)}
        required
      />
      <span className="break"></span>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewStay;
