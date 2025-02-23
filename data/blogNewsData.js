const blogData = [
  {
    title:
      "Trump’s Gaza proposal rejected by allies and condemned as ethnic cleansing plan",
    author: "Ketan Chopade",
    date: "January 28, 2025",
    body: `Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from
            45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia`,
    image: "./assets/hero-img-3.jpg",
  },
  {
    title: `'India will do what is right on taking back illegal immigrants': Donald Trump after call with PM Modi`,
    author: "Ketan Chopade",
    date: "January 28, 2025",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                error Lorem, ipsum dolor. illum ab, sed doloremque facilis.
                <ul>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui.
                  </li>
                  <li>
                    Deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident.
                  </li>
                  <li>
                    Similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga.
                  </li>
                  <li>Blanditiis sunt in culpa praesentium voluptatum.</li>
                </ul>
    `,
    image: "./assets/hero-img-5.jpg",
  },
  {
    title: "This is new news Lorem ipsum dolor sit, amet adipisicing.",
    author: "Ketan Chopade",
    date: "January 28, 2025",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error Lorem, ipsum dolor. illum ab, sed doloremque facilis.",
    image: "./assets/hero-img-8.jpg",
  },
  {
    title:
      "Trending new news Lorem ipsum this is fine dolor sit, amet adipisicing.",
    author: "Ketan Chopade",
    date: "January 28, 2025",
    body: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Aperiam error Lorem, ipsum dolor. illum ab, sed doloremque facilis.",
    image: "./assets/hero-img-1.jpg",
  },
  {
    title: "This is new news Lorem ipsum dolor sit, amet adipisicing.",
    author: "Ketan Chopade",
    date: "January 28, 2025",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error Lorem, ipsum dolor. illum ab, sed doloremque facilis.",
    image: "./assets/hero-img-2.jpg",
  },
  {
    title: "The role of blockchain in modern finance",
    author: "Olivia Martinez",
    date: "January 23, 2025",
    body: "Blockchain technology, the backbone of cryptocurrencies, is now making waves in the finance sector. From securing transactions to reducing fraud, blockchain has the potential to reshape the industry...",
    image: "./assets/hero-img-6.jpg",
  },
  {
    title: "New trends in digital marketing for 2025",
    author: "James Lee",
    date: "January 22, 2025",
    body: "Digital marketing continues to evolve at a rapid pace. From AI-driven strategies to influencer marketing, businesses must stay on top of the latest trends to stay competitive...",
    image: "./assets/hero-img-7.jpg",
  },
  {
    title: "The future of space tourism and private space travel",
    author: "Claire Robinson",
    date: "January 21, 2025",
    body: "With companies like SpaceX and Blue Origin making breakthroughs in space travel, the concept of space tourism is quickly moving from science fiction to reality. But is the industry ready for mass adoption?...",
    image: "./assets/hero-img-8.jpg",
  },
  {
    title: "Cybersecurity risks in a hyper-connected world",
    author: "John Stevens",
    date: "January 20, 2025",
    body: "As the world becomes increasingly digital, cybersecurity risks are growing. From data breaches to ransomware, the need for advanced security measures is more pressing than ever...",
    image: "./assets/hero-img-1.jpg",
  },
  {
    title: "Reviving the economy through sustainable development",
    author: "Sophia Patel",
    date: "January 19, 2025",
    body: "Sustainable development is key to ensuring long-term economic stability. By focusing on green technologies and renewable resources, countries can stimulate economic growth while combating environmental challenges...",
    image: "./assets/hero-img-10.jpg",
  },
  {
    title: "Global tourism industry bounce-back post-pandemic",
    author: "Michael Adams",
    date: "January 18, 2025",
    body: "As travel restrictions ease, the global tourism industry is showing signs of recovery. However, industry leaders must address safety concerns and shifting consumer preferences to fully bounce back Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus sit illo, voluptates aliquam delectus exercitationem sed aut deserunt cupiditate!",
    image: "./assets/hero-img-1.jpg",
  },
  {
    title: "Understanding the gig economy and its implications",
    author: "Laura Mitchell",
    date: "January 17, 2025",
    body: "The gig economy is reshaping how people work. With more individuals turning to freelance and contract-based jobs, what does this mean for workers' rights, job stability, and income equality?...",
    image: "./assets/hero-img-2.jpg",
  },
  {
    title: "The evolution of social media platforms in 2025",
    author: "Nathan Turner",
    date: "January 16, 2025",
    body: "Social media platforms are constantly evolving. From new algorithms to evolving user needs, how are platforms adapting to stay relevant in 2025 and beyond?...",
    image: "./assets/hero-img-3.jpg",
  },
  {
    title: "The rise of plant-based diets and sustainability",
    author: "Rachel Brown",
    date: "January 15, 2025",
    body: "Plant-based diets are not just a trend—they're a movement. As people become more conscious of their environmental impact, plant-based foods are playing a key role in creating a sustainable future...",
    image: "./assets/hero-img-4.jpg",
  },
  {
    title: "Advancements in quantum computing and their potential",
    author: "Alex Carter",
    date: "January 14, 2025",
    body: "Quantum computing is on the verge of revolutionizing industries from healthcare to finance. But as the technology matures, what challenges and opportunities will arise for businesses and governments alike?...",
    image: "./assets/hero-img-5.jpg",
  },
  {
    title: "How Artificial Intelligence is transforming healthcare",
    author: "Samantha Williams",
    date: "January 13, 2025",
    body: "AI is quickly becoming a game-changer in the healthcare industry. From diagnostics to treatment plans, AI promises to enhance patient care and streamline medical practices...",
    image: "./assets/hero-img-6.jpg",
  },
  {
    title: "The future of cryptocurrency regulations around the world",
    author: "Ethan Clark",
    date: "January 12, 2025",
    body: "Cryptocurrency is booming, but its regulation is still in flux. Countries are taking different approaches, with some embracing it and others imposing strict rules. What will the future hold for crypto regulations?...",
    image: "./assets/hero-img-7.jpg",
  },
  {
    title: "Rising trends in sustainable fashion and eco-friendly clothing",
    author: "Maya Johnson",
    date: "January 11, 2025",
    body: "The fashion industry is undergoing a revolution, with sustainability becoming a key focus. Eco-friendly clothing and practices are growing in popularity as consumers demand more ethical choices from brands...",
    image: "./assets/hero-img-8.jpg",
  },
  {
    title: "Smart cities: Innovations shaping the future of urban living",
    author: "Oliver Walker",
    date: "January 10, 2025",
    body: "Smart cities are integrating technology to enhance urban life. From intelligent transportation systems to energy-efficient buildings, how are these innovations improving the lives of citizens? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus sit illo, voluptates aliquam delectus exercitationem sed aut deserunt cupiditate!",
    image: "./assets/hero-img-1.jpg",
  },
  {
    title: "The impact of 5G technology on global communications",
    author: "Ava King",
    date: "January 9, 2025",
    body: "5G technology is poised to change the way we communicate. Faster speeds and lower latency are opening up new possibilities in everything from healthcare to entertainment...",
    image: "./assets/hero-img-10.jpg",
  },
];
