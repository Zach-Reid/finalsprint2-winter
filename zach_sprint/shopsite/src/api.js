//Author: Zachary Reid, Final Sprint Semester 2

const products = [
    { id: 1, name: 'Exercise book', description: 'An exercise book with paper for taking notes, drawing, writing stories, or anything else you need.', price: 5, image:'https://media.istockphoto.com/id/184867785/photo/blank-notepad.jpg?s=612x612&w=0&k=20&c=Uncl_WnYK12Vr9ND7LZgbD81j1JR7UqFDPOIvSjFPfU='},
    { id: 2, name: 'Wireless Headphones', description: 'These wireless headphones have the ability to connect to any device by using Bluetooth. Perfect for listening to music or videos on the go!', price: 20, image:'https://media.istockphoto.com/id/860853774/photo/blue-headphones-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=KqMSLWuM_Prrq5XHTe79bnFRU_leFDaXTuKqup5uvrE='},
    { id: 3, name: 'Gaming Mouse', description: 'With high responsiveness and satisfying buttons, this mouse is perfect for gamers, both casual and competitive.', price: 30, image:'https://media.istockphoto.com/id/1091778794/photo/computer-mouse-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mEGtmJ8dfonBrcFNeyGz0lTp7452PvcjA1DON_22ZH8='},
    { id: 4, name: 'Pack of Pencils', description: 'A pack of high-quality #2 pencils. Good for test-taking, note writing, etc.', price: 3, image:'https://media.istockphoto.com/id/1046667490/photo/two-pencils-sets-in-brown-and-white-cardboard-box-mockup-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mIXkHNzVKDzIYAqon03IiOQuQdrMTx4qStnUqf0IyVs='},
    { id: 5, name: 'Bookbag', description: 'A lightweight but durable boogbag for taking your belongings with you.', price: 15, image:'https://media.istockphoto.com/id/185332097/photo/backpack-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=LNSeH5zokijdWbW6Y482rope6zo2_ZUN7k2SLbtB6Zw='},
    { id: 6, name: 'Laptop', description: 'Perfect for the working person, this laptop boasts high storage and fast processing, perfect for typing up documents or writing some code.', price: 750, image:'https://media.istockphoto.com/id/484965494/photo/macbook-pro-with-blank-screen-and-computer-clipping-path.jpg?s=612x612&w=0&k=20&c=v05F8Sz5eZA-Z601beB_LapmpCuX6l4bL3w7SFG6JOw='},
    { id: 7, name: 'Tablet', description: 'This tablet is good for people looking to play apps or handle lightweight tasks with a tigher budget than a laptop', price: 400, image:'https://media.istockphoto.com/id/1146194863/vector/realistic-vector-illustration-of-white-and-black-digital-tablet-template-modern-digital.jpg?s=612x612&w=0&k=20&c=2yuQZIz5dKvABFbPRqgfIVe5arxYRgyL7I61v0nAuyc='},
    { id: 8, name: 'Remote Controlled Drone', description: 'This drone has a long control range and a built in camera for recording your flights. A fun item for flying in the open.', price: 280, image:'https://media.istockphoto.com/id/478200246/photo/isolated-flying-phantom-drone.jpg?s=612x612&w=0&k=20&c=bh8MAxJx4NZyliFhtc1STLBinXL6eTMzknA-ZoDNTw4='},
    { id: 9, name: 'Rechargable Batteries', description: 'A pack of batteries that can be recharged for repeated use. Comes with a charger.', price: 8, image:'https://media.istockphoto.com/id/175996438/photo/rechargeable-batteries.jpg?s=612x612&w=0&k=20&c=qe4qbXrPupEWZJcl8ChbqUfStPPxL01LDYH02mKe2Ho='},
    { id: 10, name: 'Water Bottle', description: 'A stainless steel water bottle that insulates the liquid inside. Keep cool drinks cold and warm drinks hot with this.', price: 10, image:'https://media.istockphoto.com/id/1471610592/vector/white-soft-touch-thermos-bottle-with-metallic-cap-mockup.jpg?s=612x612&w=0&k=20&c=9creLG9gdpwsVk117mzsOuEH47w8wof2H0Wra1FMge0='},

  ];
  
  export const getProducts = () => products;
  
  export const getProductById = (productId) =>
    products.find((product) => product.id === productId);
  
  
  