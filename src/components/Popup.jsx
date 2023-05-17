import {useState, useRef} from 'react'

const Popup = () => {
   const toggle = () => setIsOpen(!isOpen)
   const [isOpen, setIsOpen] = useState(false)
   const containerRef = useRef(null)
   const closeOnBackdrop = event => {
      if (event.target === containerRef.current) {
         toggle()
      }
   }

   return (
      <div>
         <button className='btn' onClick={toggle}>Click on Button</button>
         {isOpen && (
            <div
               className='popupcontainer'ref={containerRef}onClick={closeOnBackdrop}
            >
               <div className='popup'>
                     <button onClick={toggle} className='close'>&#10754;</button>
                  <div className='popupnotification'>
                     <h1>Notfication</h1>
                  </div>
                  <div className='div' />
                  <p className='ptag'>i'm Pop-up</p>
               </div>
            </div>
         )}
      </div>
   )
}
export default Popup