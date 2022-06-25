const products = [
  {
    name: "Macbook Air M1",
    imageUrl:
      "https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "Apple MacBook Air (M1, 2020) is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Apple M1 processor and it comes with 8GB of RAM. The Apple MacBook Air (M1, 2020) packs 512GB of SSD storage.",
    price: 99900,
    countInStock: 5,
  },
{
    name: "Canon MG2570S Multi-function Color Printer",
    imageUrl:
      "https://images.unsplash.com/photo-1551781069-73a1da89e333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "This affordable, all-in-one printer from Canon comes with basic printing, copying and scanning functions. Mainly aimed for domestic usage, this printer makes use of high-quality ink cartridges that are not only efficient but also economical.",
    price: 3599,
    countInStock: 8,
  },
  {
    name: "Mi 30000 mAh Power Bank",
    imageUrl:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvd2VyYmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Be it on your travels or during power cuts, you can ensure that your smartphones, tablets, and other devices don't run out of charge by getting the Mi Boost Pro 30000 mAh powerbank.",
    price: 2699,
    countInStock: 20,
  },
{
    name: "SAMSUNG T5 500 GB External Solid State Drive",
    imageUrl:
      "https://images.unsplash.com/photo-1518547606470-00ac2ae882af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFyZGRyaXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "This SSD facilitates quick transfer of massive files like 4K videos and graphic-intensive games. Moreover, get the latest firmware updates as this SSD is embedded with an intuitive software for Macs and PCs.",
    price: 5999,
    countInStock: 10,
  },
{
    name: "Mi Smart Band 5",
    imageUrl:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "You can intelligently monitor your daily activities and keep track of your current fitness and health goals by bringing home the Mi Smart Band 5. It features an approximately 2.79 cm (1.1) AMOLED display that lets you adjust the brightness levels as per your preference.",
    price: 2399,
    countInStock: 15,
  },
{
    name: "SanDisk Cruzer Blade USB 2.0 32 GB Flash Pen Drive",
    imageUrl:
      "https://images.unsplash.com/photo-1625886390251-01af1ea39853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "Meet the SanDisk Cruzer Blade 32 GB pendrive - your friendly storage device. Store all that you want, from movies to songs, pictures to videos, PDF files to documents, this in USB 2.0.",
    price: 329,
    countInStock: 20,
  },
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 49900,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 54000,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 110000,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 4500,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 17999,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 10999,
    countInStock: 10,
  },
];

module.exports = products;