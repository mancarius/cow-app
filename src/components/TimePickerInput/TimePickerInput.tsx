import { InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TimerPickerInput.css";

interface TimePickerInputProps {
  value: (string | null)[];
  setTimeInterval: React.Dispatch<React.SetStateAction<(string | null)[]>>;
}

const TimePickerInput: React.FC<TimePickerInputProps> = React.memo((props) => {
  const { value, setTimeInterval } = props;
  const [startTime, setStartTime] = useState<string>(
    value[0] || new Date().toLocaleTimeString()
  );
  const [endTime, setEndTime] = useState<string>(
    value[1] || new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setTimeInterval([startTime, endTime]);
  }, [startTime, endTime]);

  return (
    <div className="time-range-container">
      <InputBase
        type="time"
        value={startTime}
        onChange={(e) => {
          setStartTime(e.currentTarget.value);
        }}
      />
      <span>to</span>
      <InputBase
        type="time"
        value={endTime}
        onChange={(e) => {
          setEndTime(e.currentTarget.value);
        }}
      />
    </div>
  );
});

export default TimePickerInput;
