import '../css/Welcome.css';
import React from "react";
import Logo from '../img/logodnfinal.png';


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-welcome display-block" : "modal-welcome display-none";

  
  function handleSkin1(){
    handleClose();
    // audio.play();
    // const useAudio = playornot => {
    //   const [audio] = useState(new Audio('./audio/music.mp3'));
    //   const [playing, setPlaying] = useState(true);
    
    //   const toggle = () => setPlaying(!playing);
    
    //   useEffect(() => {
    //       playing ? audio.play() : audio.pause();
    //     },
    //     [playing]
    //   );
    
    //   useEffect(() => {
    //     audio.addEventListener('ended', () => audio.play());
    //     return () => {
    //       audio.removeEventListener('ended', () => audio.play());
    //     };
    //   }, []);
    
    //   return [playing, toggle];
    // };
    // <Game skin="f2.png"/>  
  }

  return (
    <div>
    {/* <TiledMap/> */}
{/*     
    <TiledMap skins={skin}/> */}
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* {children} */}
        <div className="greeting">
          <div className="title-modal">
            Hai Stanners!
          </div>
          <div className="paragraph">
            bla bla blaa blaa halan halan
          </div>
        </div>
        <div className="image">
        <img src={Logo} alt='' className="logo"></img>
        </div>
        <div className="modal-footer">
        <button type="button" onClick={handleSkin1}>
          Gasss
        </button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Modal;