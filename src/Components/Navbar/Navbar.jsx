import bgImg from '../../assets/bg-sidebar-mobile.svg'
import './Navbar.css'

const Navbar = ({selectedId}) => {
  let className = 'border cursor-default rounded-full border-solid border-white flex justify-center items-center text-white w-8 h-8'
  const steps_indicator = ['1', '2', '3', '4']
  console.log(typeof selectedId);
  if (steps_indicator.includes(selectedId)) {
    steps_indicator[Number(selectedId)]
    className += ' bg-[#d6d9e6] text-[#02295a]'
  }
  return (
    <header style={{
      backgroundImage: `url(${bgImg})`
    }} className="bg-img flex justify-center gap-3 pt-4">
      {
        steps_indicator.map((step, index) => {
          return <div id={index} key={index} className={className}>{step}</div>
        })
      }
      {/* <div className={className}>1</div>
      <div className={className}>2</div>
      <div className={className}>3</div>
      <div className={className}>4</div> */}

    </header>
  )
}

export default Navbar