// import { useState } from "react";
// import TabContent from "../v2/TabContent";
// import TabNavItem from "../v2/TabNavItem";
// import bgImg from '../../assets/bg-sidebar-mobile.svg'
// import Footer from "../Footer/Footer";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="tabs">
//      <header style={{
//       backgroundImage: `url(${bgImg})`
//     }}>
//      <ul className="nav">
//         <TabNavItem title="1" id="1" activeTab={activeTab} setActiveTab={setActiveTab}/>
//         <TabNavItem title="2" id="2" activeTab={activeTab} setActiveTab={setActiveTab}/>
//         <TabNavItem title="3" id="3" activeTab={activeTab} setActiveTab={setActiveTab}/>
//         <TabNavItem title="4" id="4" activeTab={activeTab} setActiveTab={setActiveTab}/>
//         <TabNavItem title="5" id="5" activeTab={activeTab} setActiveTab={setActiveTab}/>
//       </ul>
//      </header>
//       <div className="outlet">
//       <TabContent id="tab1" activeTab={activeTab}>
//           <p>Tab 1 works!</p>
//         </TabContent>
//         <TabContent id="tab2" activeTab={activeTab}>
//           <p>Tab 2 works!</p>
//         </TabContent>
//         <TabContent id="tab3" activeTab={activeTab}>
//           <p>Tab 3 works!</p>
//         </TabContent>
//         <TabContent id="tab4" activeTab={activeTab}>
//           <p>Tab 4 works!</p>
//         </TabContent>
//         <TabContent id="tab5" activeTab={activeTab}>
//           <p>Tab 5 works!</p>
//         </TabContent>
        
//       </div>
//       <Footer
//       // id={}/
//       activeTab={activeTab} 
//       setActiveTab={setActiveTab}
//       />
//     </div>
//   )
// }

// export default Tabs