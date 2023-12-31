import Logo from "../../assets/img/logo.png"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { NavLink } from "react-router-dom"

const navegacion = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sevicios', href: '#valores' },
    { name: 'Nosotros', href: '#sobreNosotros' },
    { name: 'Contactos', href: '#contactos' },
]

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const cambioBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', cambioBackground)

    return (
        <header className={navbar ? `fixed inset-x-0 top-0 z-50 bg-[#FFFFFF] shadow-lg transition duration-500` : `fixed inset-x-0 top-0 z-50 transition duration-500`}>
            <nav className="flex items-center justify-between p-6 lg:px-[300px]" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <span className="sr-only">Contrato Inteligente</span>
                        <NavLink to="/Contrato-Inteligente" >
                            <img
                                className="h-10 w-auto cursor-pointer"
                                src={Logo}
                                alt='Logo'
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mobile-menu-button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navegacion.map((item) => (
                        <a key={item.name} href={item.href} className="w-[5rem] h-[2rem] flex justify-center items-center rounded-xl hover:bg-Rojo group transition duration-300" >
                            <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white group-hover:font-normal">
                                {item.name}
                            </div>
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink to="/Contrato-Inteligente/login" className="w-[8rem] h-[2rem] flex justify-center items-center rounded-xl hover:bg-Rojo group transition duration-300">
                        <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white group-hover:font-normal">
                            Iniciar Sesión <span aria-hidden="true">&rarr;</span>
                        </div>
                    </NavLink>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="-m-1.5 p-1.5">
                            <span className="sr-only">Contrato Inteligente</span>
                            <img
                                className="h-8 w-auto"
                                src={Logo}
                                alt="Logo"
                            />
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 close-menu-button"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navegacion.map((item) => (
                                    <a key={item.name} href={item.href}>
                                        <button
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="-mx-3 flex w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </button>
                                    </a>
                                ))}
                            </div>

                            <div className="py-6">
                                <NavLink to="/Contrato-Inteligente/login">
                                    <div
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Iniciar Sesión
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar
