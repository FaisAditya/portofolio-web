import Navbar from "./Navbar"
import Button from "./Button"

export default function Hero() {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
            <div className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
                    <h1 className="text-white text-3xl font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">Saya Lulusan S1 Teknik Informatika Seorang Front-end Web Developer, Front-end Mobile Developer</h1>
                    <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mt-6 mx-auto leading-relaxed">Saya Sangat Tertarik Dengan Perkembangan Teknologi dan Sudah 6 Tahun Belajar Programing</p>
                    <Button href="#profile" pill variant="yellow" className="mt-14" >Pelajari</Button>
                </div>
            </div>
        </div>
    )
}