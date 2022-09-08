import Category from "../category"

const JSBlogData = [
  {
    img: '/img/jsblog/thumb_Blog_Image.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Get Together: The Changing Forms of Musical Collaboration'
  },
  {
    img: '/img/jsblog/thumb_Blog_Hero_Image_800x400.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Loop: Five Perspectives on Working with Environmental Noise'
  },
  {
    img: '/img/jsblog/thumb_1_Blog_Loop_Session_Grand_River_Blog.jpg.600x340_q85_crop_upscale.jpg',
    link: '#',
    category: 'Loop',
    title: 'Loop Session: In the Studio with Grand River'
  }
]


const JSBlog = () => {
  return (
    <div className="px-10 relative">
      <h2 className="text-4xl font-semibold ml-10">The latest from Ableton</h2>
      <div className="absolute top-3 right-20 flex flex-row">
        {Category.map((item) => (
          <a className="text-xl font-semibold ml-5 text-[#0000ff]" href={item.link}>
            <p>{item.category}</p>
          </a>
        ))}
      </div>
      <div className="flex flex-row my-5">
        {JSBlogData.map((item) => (
          <div className="m-10">
            <a href={item.link}>
              <img className="mb-3" src={item.img} />
              <div>
                <p className="mb-1 text-[#6dcbff] text-sm font-medium" >{item.category}</p>
                <h2 className="font-semibold">{item.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JSBlog