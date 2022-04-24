import { InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  name?: string;
  value: (Date | null)[];
  setDateInterval: React.Dispatch<React.SetStateAction<(Date | null)[]>>;
}

const DatePickerInput: React.FC<DatePickerInputProps> = React.memo((props) => {
  const { name, value, setDateInterval } = props;
  const [startDate, setStartDate] = useState<Date | null>(
    value[0] || new Date()
  );
  const [endDate, setEndDate] = useState<Date | null>(value[1] || null);

  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  console.log({value});

  useEffect(() => {
    setDateInterval([startDate, endDate]);
  }, [startDate, endDate])

  return (
    <ReactDatePicker
      selected={startDate}
      selectsRange
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      customInput={<InputBase sx={{ width: "100%" }} name={name} />}
    />
  );
});

export default DatePickerInput;
