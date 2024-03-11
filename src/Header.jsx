import React from "react";

const Header = () => {
  // Get today's date
  const today = new Date();
  const year = today.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[today.getMonth()];
  const day = String(today.getDate()).padStart(2, "0");

  // Construct the date string
  const formattedDate = `${day}, ${month} ${year}`;
  return (
    <header style={{ color: "#D9D9D9" }}>
      <h1>My Tasks</h1>
      <p>{formattedDate}</p>
    </header>
  );
};

export default Header;
