import { useEffect, useState } from "react"
import Header from "./Header"
import ProgressBar from "./ProgressBar"
import ReturnPage from "./ReturnPage"
import Stepper from "./Stepper"

const MOBILE_WIDTH_DEFAULT = 468
const Layout = ({ children, phase }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH_DEFAULT)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < MOBILE_WIDTH_DEFAULT);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [phase]);

    return (
        <div className="layout">
            <div className="layout__header">
                <Header />
            </div>
            {
                isMobile
                ?(<ProgressBar phase={phase} />)
                :(<Stepper phase={phase} />)
            }
            <div className="layout__content">
                {
                    !isMobile && (<ReturnPage />)
                }
                {
                    children
                }
            </div>
        </div>
    )
}

export default Layout