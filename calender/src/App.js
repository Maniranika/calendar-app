import React, { useState } from "react";
import "./App.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const generateCalendar = () => {
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      dates.push(d);
    }

    return dates;
  };

  const dates = generateCalendar();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&larr;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={nextMonth}>&rarr;</button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}

        {dates.map((date, index) => {
          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={index}
              className={`calendar-date ${isToday ? "today" : ""}`}
            >
              {date || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
