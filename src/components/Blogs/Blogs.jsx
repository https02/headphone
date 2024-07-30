import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, est",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ut quod doloremque beatae, aspernatur eligendi",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, est",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ut quod doloremque beatae, aspernatur eligendi",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, est",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ut quod doloremque beatae, aspernatur eligendi",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, est",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ut quod doloremque beatae, aspernatur eligendi",
    link: "#",
    img: Blog4,
  },
];

function Blogs() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower
                  key={data.key}
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300 gap-6">
                    <img src={data.img} alt="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2 ">{data.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
