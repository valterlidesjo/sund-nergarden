import { useState } from "react";
import "./scss/_searchBooking.scss";
import { BiCalendar } from "react-icons/bi";
import DatePicker from "react-datepicker";

const SearchBooking: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const handleBooking = () => {
    if (!checkInDate) {
      setCheckInDate(new Date());
    }
    
    if (!checkOutDate) {
      setCheckOutDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    }

    const validCheckInDate = checkInDate || new Date();
    const validCheckOutDate =
      checkOutDate || new Date(new Date().getTime() + 24 * 60 * 60 * 1000); 

    const stayLength = Math.ceil(
      (validCheckOutDate.getTime() - validCheckInDate.getTime()) /
        (1000 * 3600 * 24)
    );

    const url = `https://online.bookvisit.com/package?channelid=918cee3d-0141-4e51-b886-ac9fcf09653c&roomconfig=a${adults}&year=${validCheckInDate.getFullYear()}&month=${
      validCheckInDate.getMonth() + 1
    }&day=${validCheckInDate.getDate()}&staylength=${stayLength}`;

    window.location.href = url;
  };

  return (
    <>
      <div className="booking-container">
        <div className="booking-top-container">
          <div
            className="start-date-container"
            onClick={() => setIsCheckInOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <p>
              {checkInDate
                ? checkInDate.toLocaleDateString("sv-SE", {
                    day: "2-digit",
                    month: "long",
                  })
                : "Incheck"}
            </p>
            {isCheckInOpen && (
                <DatePicker
                  selected={checkInDate}
                  onSelect={(date) => {
                    setCheckInDate(date);
                    setIsCheckInOpen(false);
                  }}
                  onClickOutside={() => setIsCheckInOpen(false)}
                  inline
                  minDate={new Date()}
                  isClearable
                />
            )}
            <BiCalendar
              className="calendar-icon"
              onClick={() => setIsCheckInOpen(true)}
            />
          </div>
          <div
            className="end-date-container"
            onClick={() => setIsCheckOutOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <p>
              {checkOutDate
                ? checkOutDate.toLocaleDateString("sv-SE", {
                    day: "2-digit",
                    month: "long",
                  })
                : "Utcheck"}
            </p>
            {isCheckOutOpen && (
              <DatePicker
                selected={checkOutDate}
                onSelect={(date) => {
                  setCheckOutDate(date);
                  setIsCheckOutOpen(false);
                }}
                onClickOutside={() => setIsCheckOutOpen(false)}
                inline
                minDate={checkInDate || new Date()}
              />
            )}
            <BiCalendar
              className="calendar-icon"
              onClick={() => setIsCheckOutOpen(true)}
            />
          </div>
        </div>
        <div className="booking-bottom-container">
          <div className="persons-container">
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
              placeholder="Vuxna"
            />
          </div>
          <div className="rooms-container">
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
              placeholder="Rum"
            />
          </div>
        </div>
        <div className="search-booking-button-container">
          <button className="search-booking-button" onClick={handleBooking}>
            Sök Lediga Rum
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBooking;
