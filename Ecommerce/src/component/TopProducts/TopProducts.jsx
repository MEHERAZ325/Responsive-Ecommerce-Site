import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from 'react-icons/fa'


const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}
            <div className='text-left mb-24'>
            <p data-aos="fade-up" className='text-sm text-orange-400'>Top Rated Products</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi possimus
             explicabo provident accusamus.</p>
        </div>
            {/* Body Section */}
            <div 
             className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
            >
                {
                    ProductData.map((data) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className='space-y-3'
                        key={data.id}>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' 
                                />
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p
                                 className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'
                                >{data.description}</p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white group-hover:bg-white py-1 px-4 rounded-full mt-4 group-hover:text-primary'
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts