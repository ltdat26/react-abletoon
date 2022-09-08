const HomePageData = [
  {
    img: '/img/homepage/339_Spectral_time_HP2.jpg',
    link: '#',
    title: 'Freeze, Delay and Deconstruct – Sound Design with Spectral Time',
    text: 'Watch the video'
  },
  {
    img: '/img/homepage/HP_Cinimatique_1000x680.jpg',
    link: '#',
    title: 'Plucked Strings by Cinematique Instruments: a collection of highly versatile stringed instruments',
    text: 'Get the Pack'
  },
  {
    img: '/img/homepage/Homepage_Tile.jpg',
    link: '#',
    title: 'Get Together: The Changing Forms of Musical Collaboration',
    text: 'Explore the theme of Loop Create 2022'
  },
]

const HomePageItem = ({ img, link, title, text }) => (
  <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} className="font-semibold h-auto absolute
  first:text-[#00FFAF] first:left-0 first:w-3/5 first:h-4/6
  even:text-[#FDF900] even:right-0 even:w-1/3 even:h-2/5 even:top-1/4
  last:text-black last:bottom-16 last:left-1/2 last:w-1/3 last:h-1/3
  ">
    <a className="" href={link}>
      <div className="p-8">
        <h2 className="text-4xl" >{title}</h2>
        <p className="text-lg underline after:content-['>'] after:ml-0.5">{text}</p>
      </div>
    </a>
  </div>
)

const HomePage = () => {
  return (
    <div className="relative h-256 w-full">
      {HomePageData.map((item) => (
        <HomePageItem img={item.img} link={item.link} title={item.title} text={item.text}/>
      ))}
    </div>
  )
}

export default HomePage