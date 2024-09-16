import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"
import sideA from '@/src/assets/images/WallpaperA.svg'
import sideB from '@/src/assets/images/WallpaperB.svg'

const LayoutLogin = ({ children }) => {
    return (
        <div className="layoutLogin">
            <div className="layoutLogin__header">
                <Header />
            </div>
            <div className="layoutLogin__content">
                {
                    children
                }
            </div>
            <div className="layoutLogin__footer">
                <Footer />
            </div>
            <div className="layoutLogin__sideA">
                <img src={sideA} alt="" />
            </div>
            <div className="layoutLogin__sideB">
                <img src={sideB} alt="" />
            </div>
        </div>
    )
}

export default LayoutLogin