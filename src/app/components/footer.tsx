import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="max-w-7xl flex flex-col m-auto py-8 ">
                <div className="flex w-full justify-between items-start pb-4">
                    {/* TECHCAREER Section */}
                    <div className="grid gap-3">
                        <div className="opacity-45 font-light text-md">TECHCAREER</div>
                        <ul className="grid gap-2">
                            <li className="text-sm hover:underline cursor-pointer">Hakkımızda</li>
                            <li className="text-sm hover:underline cursor-pointer">Etkinlikler</li>
                            <li className="text-sm hover:underline cursor-pointer">Şirketler İçin</li>
                            <li className="text-sm hover:underline cursor-pointer">Eğitmen Ol</li>
                            <li className="text-sm hover:underline cursor-pointer">İş Birliği</li>
                            <li className="text-sm hover:underline cursor-pointer">İletişim</li>
                        </ul>
                    </div>

                    {/* BAŞVUR Section */}
                    <div className="grid gap-3">
                        <div className="opacity-45 font-light text-md">BAŞVUR</div>
                        <ul className="grid gap-2">
                            <li className="text-sm hover:underline cursor-pointer">Bootcamp</li>
                            <li className="text-sm hover:underline cursor-pointer">Hackathon</li>
                            <li className="text-sm hover:underline cursor-pointer">Hiring Challange</li>
                            <li className="text-sm hover:underline cursor-pointer">İş İlanları</li>
                        </ul>
                    </div>

                    {/* SENİN İÇİN Section */}
                    <div className="grid gap-3">
                        <div className="opacity-45 font-light text-md">SENİN İÇİN</div>
                        <ul className="grid gap-2">
                            <li className="text-sm hover:underline cursor-pointer">Komünite</li>
                            <li className="text-sm hover:underline cursor-pointer">TDC</li>
                            <li className="text-sm hover:underline cursor-pointer">Blog</li>
                            <li className="text-sm hover:underline cursor-pointer">Podcast</li>
                            <li className="text-sm hover:underline cursor-pointer">Kariyer Rehberi</li>
                            <li className="text-sm hover:underline cursor-pointer">Teknik Sözlük</li>
                        </ul>
                    </div>

                    {/* VERİ POLİTİKAMIZ Section */}
                    <div className="grid gap-3">
                        <div className="opacity-45 font-light text-md">VERİ POLİTİKAMIZ</div>
                        <ul className="grid gap-2">
                            <li className="text-sm hover:underline cursor-pointer">Aydınlatma Metni</li>
                            <li className="text-sm hover:underline cursor-pointer">Hizmet Sözleşmesi</li>
                            <li className="text-sm hover:underline cursor-pointer">Açık Rıza Metni</li>
                            <li className="text-sm hover:underline cursor-pointer">Çerez Politikası</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col justify-between h-48">
                        <div className="grid gap-4">
                            <div className="text-3xl font-bold">
                                tech<span className="text-green-400">career</span>.net
                            </div>
                            <div className="text-sm">Türkiye’nin teknoloji kariyeri platformu</div>
                        </div>
                        <div className="grid gap-3">
                            <div className="opacity-45">SOSYAL MEDYA</div>
                            <div className="flex space-x-4 text-xl text-gray-600">
                                {/* LinkedIn Icon */}
                                <span className="hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                                    <FaLinkedin />
                                </span>

                                {/* Instagram Icon */}
                                <span className="hover:text-pink-500 transition-colors duration-200 cursor-pointer">
                                    <FaInstagram />
                                </span>

                                {/* YouTube Icon */}
                                <span className="hover:text-red-600 transition-colors duration-200 cursor-pointer">
                                    <FaYoutube />
                                </span>

                                {/* Facebook Icon */}
                                <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                    <FaFacebook />
                                </span>

                                {/* Twitter Icon */}
                                <span className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                                    <FaTwitter />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="pt-4" />
                <div className="flex flex-col gap-5 justify-between">
                    <div className="flex gap-5 justify-between">
                        <div className="flex">
                            <div>TR</div>
                            <div className="opacity-45 px-4">|</div>
                            <div className="opacity-45 ">EN</div>
                        </div>
                        <div>
                            <div className="flex gap-4 text-xs opacity-40">
                                <div>Tüm hakları saklıdır</div>
                                <div>© Copyright 2024</div>
                                <a href="mailto:support@techcareer.net" className=" hover:underline">
                                    support@techcareer.net
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Image
                            src="/img/iskur.webp"
                            alt=""
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                        <div className="text-xs opacity-30 pl-4">
                            Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel
                            İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette
                            bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069
                            sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904
                            sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin
                            edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına
                            başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87
                            Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :
                            0216 523 90 26
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
