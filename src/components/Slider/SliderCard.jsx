import style from './card.module.css';

const SliderCard = ({ datos }) => {
  return (
    <>
      <div className={style.slide} >
        <div className={style.content_img} >
          <img src={datos.img} alt="" />
        </div>

        <div
         className={style.content_info}
        >
          <h3>{datos.title}</h3>

          <div className={style.datosTags}>
            {datos.tags.map((tag) => {
              return <label className={style.tags}>{tag} </label>;
            })}
          </div>

          <p>{datos.text}</p>
          <div
            style={{
              display: 'inline-flex',
              gap: '9px',
              position: 'absolute',
              bottom: '1rem',
              left: '2rem',
            }}
          >
            {datos.demo && (
              <a href={datos.demo} style={{ textDecoration: 'none' }}>
                <div className={style.link_deploy}>
                  <i class="fi-rr-globe"></i>
                  Demo
                </div>
              </a>
            )}
            {datos.github && (
              <a href={datos.github} style={{ textDecoration: 'none' }}>
                <div className={style.link_deploy}>
                  <i class="devicon-github-original colored"></i>
                  Github
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderCard;
/*  wordWrap: "break-word" , ME AYUDO para que el texto de tags no se salga de su dvi ,
   flex-wrap , trambien me ayudo si uso flex*/
/* display, inline flex, usa flex pero diferencia no me ocupa el 100% del ancho sino dependiendo 
su contenido  */
/* position absolute hace referencia a position relative , si no esta no iria al body */
