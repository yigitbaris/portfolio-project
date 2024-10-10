import { TbBrandLinkedin } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div className='bg-[#f9f9f9]  h-[92vh] w-full'>
      <div className='flex  flex-col justify-center  my-28 bg-red-300'>
        <div className='flex items-center  w-5/6 gap-5 px-36'>
          <div className='w-'>
            <div className='flex flex-col relative w-[450px] bg-pink-200'>
              <div className='font-extrabold text-5xl text-slate-700 leading-[50px]'>
                Front-End React Developer
              </div>
              <div>
                Hi, I'm Yiğit Barış Kaynakoğlu. A passionate Front-end React
                Developer based in İstanbul , Türkiye.
              </div>
            </div>
            <div className='flex'>
              <TbBrandLinkedin size={30} />
              <FiGithub size={30} />
            </div>
          </div>
          <div>foto</div>
        </div>
        <div className='mt-5 flex gap-5'>
          <div>tech stack</div>
          <div>icons</div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
