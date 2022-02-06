import Logo from "./Logo"
import Nav from "./Nav"
import Button from "./Button"
import { useState } from "react"
import classnames from "classnames"

export default function Navbar() {
    const [offcanvas, setOffcanvas] = useState(false);

    return (
        <section className="container mx-auto">
            <div className="flex items-center py-10">
                <div className="w-3/12 ">
                    <Logo />
                </div>
                <div className="w-6/12 hidden md:block">
                    <Nav
                        scheme="light"
                        dir="horizontal"
                    />
                </div>
                <div className="w-3/12 text-right hidden md:block">
                    <Button href="#contact" pill variant="outline-yellow">KONTAK</Button>
                </div>
                <div className="w-9/12 md:hidden text-right">
                    <img src="/menu.svg" alt="menu" className="inline-block" onClick={() => setOffcanvas(true)} />
                </div>
            </div>

            <div className={classnames("fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all", offcanvas ? "right-0" : "right-full")}>

                <img src="/close.svg" alt="close" className="absolute top-8 right-8 w-8" onClick={() => setOffcanvas(false)} />
                <Nav
                    scheme="dark"
                    dir="vertical"
                />
            </div>
        </section>

    )

}