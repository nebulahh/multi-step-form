import bgImg from '../../assets/bg-sidebar-mobile.svg'
import './Navbar.css'

const Navbar = ({ currentStep }) => {
  
  const steps_indicator = ['Your Info', 'Select PLan', 'Add-Ons', 'Summary']

  let className = 'border cursor-default rounded-full border-solid border-white flex justify-center items-center text-white w-8 md:justify-center h-8'  
  className += ' bg-[#d6d9e6] text-[#02295a]'
  
  return (
    <header style={{backgroundImage: `url(${bgImg})`}} 
    className="bg-img md:justify-start flex md:flex-col w-screen md:w-[30%] h-20 md:h-[100%] rounded mx-0 my-auto justify-center gap-3 md:pl-8 md:pt-8 pt-4">
      {   
        steps_indicator.map((step, index) => {
          return <div className='flex gap-3 md:items-center items-start' key={index}>
            <div className={className}>{index}</div>
            <div className='hide'>
              <p className='text-[#9699ab]'>Step {index}</p>
              <b className='text-white'>{step}</b>
            </div>
          </div>
        })
      }

    </header>
  )
}


export default Navbar