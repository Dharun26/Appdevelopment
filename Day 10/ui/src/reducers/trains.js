const initialState = [
  {
    id: '214',
    name: 'Kongu Express',
    depatureTime: '18:30',
    arrivalTime: '06:15',
    fare: ' Rs. 350-1000',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Coimbatore'],
    seats: [
      { no: 'First class ',available:'10',price:'650', isBooked: false },
      { no: 'Second class', available:'0',price:'450',isBooked: true },
      { no: 'General class',available:'10',price:'350', isBooked: false },
      { no: 'Sleeper Class',available:'0',price:'750', isBooked: true },
      { no: 'AC class', available:'10',price:'1000',isBooked: false },
    
     
    ],
  },
  {
    id: '102',
    name: 'Kaniyakumari Express',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: 'Rs. 235-1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Kanyakumari', 'Madurai', 'tenkasi'],
    seats: [
      { no: 'First class ',available:'10',price:'650', isBooked: false },
      { no: 'Second class', available:'0',price:'450',isBooked: true },
      { no: 'General class',available:'10',price:'350', isBooked: false },
      { no: 'Sleeper Class',available:'0',price:'750', isBooked: true },
      { no: 'AC class', available:'10',price:'1000',isBooked: false },
     
    ],
  },
  {
    id: '786',

    name: 'Pandiyan Express',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: 'Rs. 235-1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Coimbatore', 'Salem', 'madurai'],
    seats: [
      { no: 'First class ',available:'10',price:'650', isBooked: false },
      { no: 'Second class', available:'0',price:'450',isBooked: true },
      { no: 'General class',available:'10',price:'350', isBooked: false },
      { no: 'Sleeper Class',available:'0',price:'750', isBooked: true },
      { no: 'AC class', available:'10',price:'1000',isBooked: false },
    ],
  },
  {
    id: '618',
    name: 'vande bharat',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: 'Rs. 235-1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['trichy', 'Coimbatore', 'Madurai'],
    seats: [
      { no: 'First class ',available:'10',price:'650', isBooked: false },
      { no: 'Second class', available:'0',price:'450',isBooked: true },
      { no: 'General class',available:'10',price:'350', isBooked: false },
      { no: 'Sleeper Class',available:'0',price:'750', isBooked: true },
      { no: 'AC class', available:'10',price:'1000',isBooked: false },
     
     
    ],
  },
  {
    id: '188',
    name: 'Podhigai',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: 'Rs. 235-1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['tenkasi', 'madurai', 'trichy'],
    seats: [
      { no: 'First class ',available:'10',price:'650', isBooked: false },
      { no: 'Second class', available:'0',price:'450',isBooked: true },
      { no: 'General class',available:'10',price:'350', isBooked: false },
      { no: 'Sleeper Class',available:'0',price:'750', isBooked: true },
      { no: 'AC class', available:'10',price:'1000',isBooked: false },
     
    ],
  },
];
export default (state = initialState, action) => {
  return state;
};