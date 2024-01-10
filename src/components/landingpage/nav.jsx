import Link from "next/link"
import Image from "next/image"

const nav = () => {
    return (
        <nav className="relative container bg-[#D4FCF9] mx-auto p-6">
                <div className="flex item-center justify-between">
                        <div className="pt-2">
                            <Link href="/">
                                <div className="flex hover:text-slate-500">
                                <Image
                                alt="lumos text"
                                src="/lumos_text.png"
                                width={100}
                                height={100}
                            />
                                </div>
                            </Link>
                        </div>
                        <div className="md:flex space-x-6 drop-shadow-xl">
                            <Link href="/" className="text-xl
                            hover:text-slate-500">Home</Link>
                            <Link href="#about" className="text-xl
                            hover:text-slate-500">About</Link>
                            <Link href="#partners" className="text-xl
                            hover:text-slate-500">Partners</Link>
                            <Link href="#faqs" className="text-xl
                            hover:text-slate-500">FAQs</Link>
                            <Link href="#contact" className="text-xl
                            hover:text-slate-500">Contact</Link>
                            
                            <button className="bg-[#1EB39E] hover:bg-[#169382]
                            text-white rounded-full py-2 px-10 font-bold">
                                Login
                                </button>

                                <button className="bg-[#1EB39E] hover:bg-[#169382]
                            text-white rounded-full py-2 px-10 font-bold">
                                Sign Up
                                </button>
                        </div>
                </div>
        </nav>
    )
}

export default nav