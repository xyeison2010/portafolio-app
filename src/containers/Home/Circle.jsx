import circle_01 from "../../images/bg/circle/circle_01.png"
import circle_02 from "../../images/bg/circle/circle_02.png"
import circle_03 from "../../images/bg/circle/circle_03.png"
import circle_04 from "../../images/bg/circle/circle_04.png"
import circle_05 from "../../images/bg/circle/circle_05.png"
//styles in home.css
const Circle = () =>{

return(<>
 <div style={{zIndex : -2}}>
	<div className="nav__circle">
		<p className="groove1"><img src={circle_01} height="750" width="750" alt=""/></p>
		<p className="groove2"><img src={circle_02} height="750" width="750" alt=""/></p>
		<p className="groove1"><img src={circle_03} height="750" width="750" alt=""/></p>
		<p className="groove2"><img src={circle_04} height="750" width="750" alt=""/></p>
		<p className="groove1"><img src={circle_05} height="750" width="750" alt=""/></p>
	</div>
 </div>



</>)


}
export default Circle;