const eventData = [
  {
    title: "Diwali Dhamaka Night",
    description:
      "Celebrate the festival of lights with music, dance, and delicious food.",
    image: "https://images.unsplash.com/photo-1508519829430-40f7d3d161b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGl3YWxpfGVufDB8fDB8fHww",
    price: 499,
    venue: {
      street: "45 Festive Lane",
      city: "Mumbai",
      state: "Maharashtra",
    },
    dateAndTime: new Date("2025-11-10T19:00:00"),
  },
  {
    title: "Pongal Celebration",
    description:
      "Experience traditional Pongal festivities with cultural activities and delicious treats.",
    image: "https://images.unsplash.com/photo-1672839641769-b7a8afa0cb14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbmdhbHxlbnwwfHwwfHx8MA%3D%3D",
    price: 299,
    venue: {
      street: "Temple Grounds",
      city: "Chennai",
      state: "Tamil Nadu",
    },
    dateAndTime: new Date("2025-01-15T10:00:00"),
  },
  {
    title: "Onam Sadhya Feast",
    description:
      "Enjoy an authentic Onam Sadhya feast with over 25 traditional dishes.",
    image: "https://plus.unsplash.com/premium_photo-1667786643771-d43758a347d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b25hbXxlbnwwfHwwfHx8MA%3D%3D",
    price: 599,
    venue: {
      street: "Kerala Convention Center",
      city: "Thiruvananthapuram",
      state: "Kerala",
    },
    dateAndTime: new Date("2025-08-25T12:00:00"),
  },
  {
    title: "Lohri Night",
    description:
      "Celebrate Lohri with bonfires, dance, and traditional Punjabi songs.",
    image: "https://images.unsplash.com/photo-1589754328566-f3c618d68387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9ocml8ZW58MHx8MHx8fDA%3D",
    price: 100,
    venue: {
      street: "Cultural Park",
      city: "Amritsar",
      state: "Punjab",
    },
    dateAndTime: new Date("2025-01-13T18:00:00"),
  },
  {
    title: "Durga Puja Pandals",
    description:
      "Visit beautifully decorated Durga Puja pandals and experience the festive spirit.",
    image: "https://images.unsplash.com/photo-1622279488885-d831e8e76cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVyZ2ElMjBwdWphfGVufDB8fDB8fHww",
    price: 0, // Free event
    venue: {
      street: "Pandals Grounds",
      city: "Kolkata",
      state: "West Bengal",
    },
    dateAndTime: new Date("2025-10-14T10:00:00"),
  },
  {
    title: "Bihu Dance Festival",
    description:
      "Experience the vibrant traditional Bihu dance performed during Assam's new year celebrations.",
    image: "https://images.unsplash.com/photo-1602020277883-8441715993df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlodXxlbnwwfHwwfHx8MA%3D%3D",
    price: 150,
    venue: {
      street: "Assam Cultural Grounds",
      city: "Guwahati",
      state: "Assam",
    },
    dateAndTime: new Date("2025-04-13T19:30:00"),
  },
  {
    title: "Navratri Garba Nights",
    description:
      "Join the grand Navratri Garba celebrations with traditional folk dance and music.",
    image: "https://images.unsplash.com/photo-1699637568981-4a79d177e025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyYmF8ZW58MHx8MHx8fDA%3D",
    price: 200,
    venue: {
      street: "Garba Grounds",
      city: "Ahmedabad",
      state: "Gujarat",
    },
    dateAndTime: new Date("2025-09-26T20:00:00"),
  },
  {
    title: "Kerala Boat Race",
    description:
      "Enjoy the thrilling Kerala boat race featuring snake boats and traditional performances.",
    image: "https://plus.unsplash.com/premium_photo-1685291261001-e0c42bc4217c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhJTIwYm9hdCUyMHJhY2V8ZW58MHx8MHx8fDA%3D",
    price: 0, // Free event
    venue: {
      street: "Backwaters of Kerala",
      city: "Alappuzha",
      state: "Kerala",
    },
    dateAndTime: new Date("2025-08-15T09:00:00"),
  },
  {
    title: "Christmas Carnival",
    description:
      "Celebrate Christmas with a carnival featuring rides, food stalls, and performances.",
    image: "https://images.unsplash.com/photo-1522448746354-da4936934201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 250,
    venue: {
      street: "Carnival Grounds",
      city: "Delhi",
      state: "Delhi",
    },
    dateAndTime: new Date("2025-12-25T10:00:00"),
  },
  {
    title: "Ganesh Chaturthi Procession",
    description:
      "Witness the grand procession of Lord Ganesh during the most important festival in Maharashtra.",
    image: "https://images.unsplash.com/photo-1600238323655-3595cc241793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FuZXNoJTIwY2hhdHVyaGl8ZW58MHx8MHx8fDA%3D",
    price: 0, // Free event
    venue: {
      street: "Ganesh Temple",
      city: "Mumbai",
      state: "Maharashtra",
    },
    dateAndTime: new Date("2025-09-17T18:00:00"),
  },
];

module.exports = { data: eventData };
