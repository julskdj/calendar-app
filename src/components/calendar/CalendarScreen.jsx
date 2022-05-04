import { useState } from "react";
import { momentLocalizer, Calendar } from "react-big-calendar";
import moment from "moment";

import Navbar from "../ui/Navbar";
import { messages } from "../../helpers/calendar-idioma-es";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import CalendarEvent from "./CalendarEvent";


moment.locale('es')
const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Julio'
    }
  },
];

const CalendarScreen = () => {

  const iniciar = localStorage.getItem('lastView') || 'month'

  const [lastView, setlastView] = useState(iniciar);

  const onDoubleClick = (e) => {
    console.log(e)
  }

  const onSelectEvent = (e) =>{
    console.log(e);
  } 

  const onViewChange = (e) => {
    setlastView(e)
    localStorage.setItem('lastView', e)
    console.log(e);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {

      const style = {
        backgroundColor: '#367CF7',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white'
      }

      return {
        style
      }
  }

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccesor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />
    </div>
  );
};

export default CalendarScreen;
