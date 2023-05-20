import React,{useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const containerStyle = {
  width: "60%",
  height: "50%",
};
const popoverStyle = {
  padding: "16px",
};

export default function Calendar() {
  const [events, setEvents] = React.useState([
    {
      title: "Event 1",
      start: dayjs("2023-05-10T10:00:00").toDate(),
      end: dayjs("2023-05-10T12:00:00").toDate(),
      location: "Location 1",
    },
    {
      title: "Event 2",
      start: dayjs("2023-05-17T14:30:00").toDate(),
      end: dayjs("2023-05-17T16:30:00").toDate(),
      location: "Location 2",
    },
    {
      title: "Event 2",
      start: dayjs("2023-05-11T14:30:00").toDate(),
      end: dayjs("2023-05-11T16:30:00").toDate(),
      location: "Location 2",
    }
  ]);
  const [data,setData] = useState({
    title:"",
    start:"",
    end:"",
    location:""
  })
  const calendarRef = React.useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [dateStr, setDateStr] = React.useState("");
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);
  const [target, setTarget] = React.useState(false);
  const handleMonthClick = React.useCallback(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridMonth");
    }
  }, []);

  const handleYearClick = React.useCallback(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView("dayGridYear");
    }
  }, []);
  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setPopoverAnchorEl(info.el);
    console.log(info.event);
  };

  const handlePopoverClose = () => {
    setSelectedEvent(null);
    setPopoverAnchorEl(null);
  };
  const handleFormPopoverClose = () => {
    setShowForm(false);
    setTarget(null);
    // setPopoverAnchorEl(null);
  };
  const handleAddEvent=(e)=>{
    console.log("Hi")
    setShowForm(true);
    setDateStr(e.dateStr);
    setTarget(e.dayEl);
    console.log(e);
    
}

const handleInputChange = (event) => {
  // 2023-05-10T10:00:00
  // let str="";
  // if(event.target.name === "start" ||event.target.name === "end" )
  //       {  
  //           str = `${dateStr}T${event.target.value}`;
  //           if (dayjs(str).isValid()) {
  //             setData({
  //               ...data,
  //               [event.target.name]: dayjs(str).toDate()
  //             });
  //           } else {
  //             console.log("Invalid")

  //           }
  //           console.log(dayjs(str).toDate())
            
  //     }   
  setData({
    ...data,

    [event.target.name]: event.target.value
  });

};
const handleAdd = ()=>{
  console.log(data);
  let modifiedUser =  {...data,
                        start:dayjs(`${dateStr}T${data.start}`).toDate(),
                        end:dayjs(`${dateStr}T${data.end}`).toDate()
  };
  console.log(modifiedUser);
  setEvents([...events, modifiedUser]);
  console.log(events);
  setData({});
  handleFormPopoverClose();
}
const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setSideDrawerOpen(open);
  
};

const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (<>
  
    <div style={containerStyle}>
    <React.Fragment>
       <Button onClick={toggleDrawer(true)}>{'right'}</Button>
       <Drawer
         anchor={'right'}
         open={sideDrawerOpen}
         onClose={toggleDrawer(false)}
       >
         {list('right')}
       </Drawer>
     </React.Fragment>
      <button onClick={handleMonthClick}>Month view</button>
      <button onClick={handleYearClick}>Year view</button>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        selectable={true}
        initialView="dayGridMonth"
        dateClick={handleAddEvent}

        events={events}
        eventClick={handleEventClick}
        
        height="500px"
        width="400px"
      />
       <Popover
        open={!!popoverAnchorEl}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
         {selectedEvent && (
          <div style={popoverStyle}>
            <Typography variant="h6" gutterBottom>
              {selectedEvent.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Start time: {selectedEvent.start.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              End time: {selectedEvent.end.toLocaleString()}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {selectedEvent.extendedProps.location}
            </Typography>
          </div>
        )}
      </Popover>

      <Popover  
      open={!!showForm}
      anchorEl={target}
      onClose={handleFormPopoverClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}>
      {showForm && (
          <div style={popoverStyle}>
          <div> <TextField  label="Title" variant="standard" value={data.title} name="title" onChange={handleInputChange}/></div>
          <div> <TextField  label="Start Time" variant="standard" value={data.start} placeholder="HH:MM:SS"name="start"  onChange={handleInputChange}/></div>
          <div> <TextField  label="End Time" variant="standard" value={data.end} name="end" placeholder="HH:MM:SS" onChange={handleInputChange} /></div>
          <div> <TextField  label="Location" variant="standard"  value={data.location} name="location" onChange={handleInputChange} /></div>
          <Button variant="contained" sx={{mt:5}} onClick={handleAdd}>Add</Button>    
          </div>
        )}
      </Popover>
    </div>
     <div>
    
 
 
 </div>
 </>
  );
}


// import * as React from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { Box } from "@mui/material";

// export default function DateCalendarValue() {
//   const [value, setValue] = React.useState(dayjs("2022-04-17"));

//   return (
//     <Box >
//       <LocalizationProvider dateAdapter={AdapterDayjs} >
//       <DemoContainer components={["DateCalendar", "DateCalendar"]}   >
//         <DemoItem label="Calendar" sx={{ width: 700 , m:500 }}>
//           <DateCalendar
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//     </Box>

//   );
// }
