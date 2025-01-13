import { useEffect, useState } from "react";
import "./scss/_searchBooking.scss";
import { BiCalendar } from "react-icons/bi";
import DatePicker from "react-datepicker";

interface SearchBookingProps {
  buttonText: string;
  padding?: string;
}

const SearchBooking: React.FC<SearchBookingProps> = ({
  buttonText,
  padding = "0px",
}) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isAdultsOpen, setIsAdultsOpen] = useState(false);

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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="booking-container" style={{ padding }}>
        {isDesktop ? (
          <>
            <div className="booking-grid-container">
              <div
                className="start-date-container"
                onClick={() => setIsCheckInOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="check-in-text">
                  <p>
                    {checkInDate
                      ? checkInDate.toLocaleDateString("sv-SE", {
                          day: "2-digit",
                          month: "long",
                        })
                      : "Incheck"}
                  </p>
                  <BiCalendar
                    className="calendar-icon"
                    onClick={() => setIsCheckInOpen(true)}
                  />
                </div>

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
                    className="calendar"
                  />
                )}
                <span className="check-line"></span>
              </div>
              <div
                className="end-date-container"
                onClick={() => setIsCheckOutOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="check-out-text">
                  <p>
                    {checkOutDate
                      ? checkOutDate.toLocaleDateString("sv-SE", {
                          day: "2-digit",
                          month: "long",
                        })
                      : "Utcheck"}
                  </p>
                  <BiCalendar
                    className="calendar-icon"
                    onClick={() => setIsCheckOutOpen(true)}
                  />
                </div>
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
                    className="calendar"
                  />
                )}
                <span className="check-line"></span>
              </div>
              <div
                className="persons-container"
                onClick={() => setIsAdultsOpen(!isAdultsOpen)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="number"
                  min="1"
                  value={adults === 0 ? "" : adults}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (isNaN(value) || value < 1) {
                      setAdults(1);
                    } else {
                      setAdults(value);
                    }
                  }}
                  placeholder="Vuxna      +"
                />
                <span className="check-line"></span>
              </div>
              <div
                className="rooms-container"
                onClick={() => setIsRoomsOpen(!isRoomsOpen)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="number"
                  min="1"
                  value={rooms === 0 ? "" : rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
                  placeholder="Rum         +"
                />
                <span className="check-line"></span>
              </div>
              <div className="search-booking-button-container">
                <button
                  className="search-booking-button"
                  onClick={handleBooking}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="booking-grid-container">
              <div
                className="start-date-container"
                onClick={() => setIsCheckInOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="check-in-text">
                  <p>
                    {checkInDate
                      ? checkInDate.toLocaleDateString("sv-SE", {
                          day: "2-digit",
                          month: "long",
                        })
                      : "Incheck"}
                  </p>
                  <BiCalendar
                    className="calendar-icon"
                    onClick={() => setIsCheckInOpen(true)}
                  />
                </div>

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
                    className="calendar"
                  />
                )}
                <span className="check-line"></span>
              </div>
              <div
                className="end-date-container"
                onClick={() => setIsCheckOutOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="check-out-text">
                  <p>
                    {checkOutDate
                      ? checkOutDate.toLocaleDateString("sv-SE", {
                          day: "2-digit",
                          month: "long",
                        })
                      : "Utcheck"}
                  </p>
                  <BiCalendar
                    className="calendar-icon"
                    onClick={() => setIsCheckOutOpen(true)}
                  />
                </div>
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
                    className="calendar"
                  />
                )}
                <span className="check-line"></span>
              </div>
              <div
                className="persons-container"
                onClick={() => setIsAdultsOpen(!isAdultsOpen)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="number"
                  min="1"
                  value={adults === 0 ? "" : adults}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (isNaN(value) || value < 1) {
                      setAdults(1);
                    } else {
                      setAdults(value);
                    }
                  }}
                  placeholder="Vuxna      +"
                />
                <span className="check-line"></span>
              </div>
              <div
                className="rooms-container"
                onClick={() => setIsRoomsOpen(!isRoomsOpen)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="number"
                  min="1"
                  value={rooms === 0 ? "" : rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
                  placeholder="Rum         +"
                />
                <span className="check-line"></span>
              </div>
            </div>
            <div className="search-booking-button-container">
              <button className="search-booking-button" onClick={handleBooking}>
                {buttonText}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBooking;
