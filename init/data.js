const eventData = [
  {
    title: "Diwali Dhamaka Night",
    description:
      "Celebrate the festival of lights with music, dance, and delicious food.",
    image: "https://images.pexels.com/photos/4171733/pexels-photo-4171733.jpeg",
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
    image: "https://images.unsplash.com/photo-1607092921503-5cf42f8c2cd9",
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
    image: "https://images.pexels.com/photos/3727248/pexels-photo-3727248.jpeg",
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
    image: "https://images.unsplash.com/photo-1610986602711-0c160cf474b3",
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
    image: "https://images.pexels.com/photos/287162/pexels-photo-287162.jpeg",
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
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
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
    image: "https://images.pexels.com/photos/3307301/pexels-photo-3307301.jpeg",
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
    image: "https://images.unsplash.com/photo-1621440316150-6c26b3ecb3d3",
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
    image: "https://images.unsplash.com/photo-1607990283657-d658b9d8f978",
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
    image: "https://images.pexels.com/photos/164185/pexels-photo-164185.jpeg",
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
