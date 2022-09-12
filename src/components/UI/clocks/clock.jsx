import moment from "moment";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { getClockValue } from "../../../helpers/utils";
import CLOSE_SVG from "../../../assets/close.svg";

const Clock = ({ name, timezone, onDelete, id }) => {
  const [time, setTime] = useState(moment().utcOffset(timezone));

  const interval = setInterval(() => {
    setTime(moment().utcOffset(timezone));
  }, 1000);

  const hour = useRef();
  const minute = useRef();
  const second = useRef();

  useEffect(() => {
    const { h, m, s } = getClockValue(time);
    hour.current.style.transform = `rotateZ(${h + m / 12}deg)`;
    minute.current.style.transform = `rotateZ(${m}deg)`;
    second.current.style.transform = `rotateZ(${s}deg)`;
  }, [time]);

  const handleDelete = () => {
    clearInterval(interval);
    onDelete(id);
  };

  return (
    <div className="d-flex flex-column clock-block m-2">
      <div className="d-flex flex-row justify-content-between w-100 p-2 align-center">
        <h2 className="m-2">{name}</h2>
        <button
          className="btn btn-warning border border-primary close-btn d-flex align-center justify-content-center p-0"
          onClick={handleDelete}
        >
          <img alt="" className="w-100" src={CLOSE_SVG} />
        </button>
      </div>

      <div className="clock">
        <div className="hour">
          <div ref={hour} className="hr"></div>
        </div>
        <div className="min">
          <div ref={minute} className="mn"></div>
        </div>
        <div className="sec">
          <div ref={second} className="sc"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
