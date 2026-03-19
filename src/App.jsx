
import Card from "./Card"
import ArrayObjects from "./components/ArrayObjects"
import Arrays from "./components/Arrays"
import ComponentReUse from "./components/ComponentReUse"
import EventHandling from "./EventHandling"
import Footer from "./components/Footer"
import FunctionArguments from "./components/FunctionArguments"
import Header from "./components/Header"
import Props from "./Props"
import UseStateHook1 from "./components/UseStateHook1"
import OnChange from "./components/OnChange"
import ColorPicker from "./components/ColorPicker"
import UseStateObjectUpdate from "./components/UseStateObjectUpdate"
import UseStateListUpdate from "./components/UseStateListUpdate"
import UseStateArrayObAdd from "./components/UseStateArrayObAdd"
import To_Do_List from "./components/To_Do_List"
import UseEffect from "./components/UseEffect"
import UseEffect2 from "./components/UseEffect2"
import DigitalClock from "./components/DigitalClock"
import APIConn from "./components/APIConn"



function App() {

   const fruits = [{name:'mango' , calories: 95} ,
                    {name:'banana', calories: 80} , 
                    {name:'cherry' , calories: 50} ,
                    {name:'orange' , calories:30}]

   const vegetables = [{name:'potatoes' , calories: 55} ,
                       {name:'carrots' , calories: 88} ,
                       {name:'Avocados' , calories: 90} , 
                       {name:'Onions' , calories: 75}]                 


  return (
    <>
       {/* <Header />
       <Footer /> */}
       {/* <Card /> */}
       {/* <Props firstname="Godfrey" age={26} isStudent="Yes" /> */}
       {/* <Arrays /> */}
       {/* <ArrayObjects /> */}
       {/* {fruits.length > 0 && <ComponentReUse items={fruits} category='Fruits'/>}
       {vegetables.length > 0 && <ComponentReUse items={vegetables} category='Vegetables'/>} */}

       {/* <FunctionArguments /> */}
       {/* <EventHandling /> */}
       {/* <UseStateHook1 /> */}
       {/* <OnChange /> */}

       <ColorPicker />

       {/* <UseStateObjectUpdate /> */}
       {/* <UseStateListUpdate /> */}
       {/* <UseStateArrayObAdd /> */}
       {/* <To_Do_List /> */}
       {/* <UseEffect /> */}
       {/* <UseEffect2 /> */}
       {/* <DigitalClock /> */}
       {/* <APIConn /> */}
      
    </>
  )
}

export default App
