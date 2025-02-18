// import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";
import dayjs from "dayjs";

function Calander() {
  const today = dayjs();

  const [value, setValue] = useState([today, null]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DemoItem label="Controlled picker" component="DateRangePicker">
            <DateRangePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              minDate={today}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default Calander;
