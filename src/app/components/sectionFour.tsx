import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import EmailInput from "./searchBarFour";

const SectionFour = () => {
    return (
        <div className="sectionFour-bg py-9">
            <div className="m-auto max-w-7xl text-white text-center grid gap-6">
                <div className="text-4xl">Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?</div>
                <div className="text-2xl font-light">Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail adresinizi girin! 🚀</div>
                <EmailInput />
                <div className="text-green-400">Tüm soru ve önerileriniz için;</div>
                <div className="flex gap-5 text-center justify-center">
                    <div>hello@techcareer.net </div>
                    <hr className="h-full border"/>
                    <div>0216 468 76 00</div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
