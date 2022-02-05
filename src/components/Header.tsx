import { useRef } from 'react';
import closeIcon from '../resources/closeIcon.svg'

function Header(props: { HideHeader: any }) {
  
  function hideHeader(){
    props.HideHeader()
  }

  return <header className="p-4 bg-slate-800 text-slate-100 flex flex-col justify-center items-center">
    <button className="text-left self-end hover:scale-105" onClick={hideHeader}>
      <img className='' src={closeIcon} alt="close icon" />
    </button>
    <div className="text-center">
      <p className='text-slate-300'>Bienvenido <br /> a</p>
      <h1 className='text-6xl'>Finance</h1>
      <p className='pb-4 text-slate-300'>
        El sitio web que te ayuda a controlar tus finanzas
      </p>
    </div>
  </header>;
}

export default Header;
