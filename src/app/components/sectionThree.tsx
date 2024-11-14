import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const SectionThree = () => {
    return (
        <div className="bg-white py-9">
            <div className="m-auto max-w-7xl">
                <div className="flex gap-5">
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/00001.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-3xl">Bootcamp</div>
                            <div className="text-base font-light">Bootcamp etkinlikleri, yazılım teknolojileri, veri bilimi, ürün yönetimi gibi teknolojik konularda düzenlenir. Hem eğitim alabilir, hem de o alanda işe başlayabilecek kadar fazla bilgi ve donanım kazanabilirsin.</div>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 text-green-500">
                                Hemen Başvur <MdArrowForward />
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/00002.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-3xl">Hackathon</div>
                            <div className="text-base font-light">Hackathon etkinliklerinde takımlar halinde veya bireysel olarak yarışacaksın. Etkinlik için belli bir zaman verilir ve yeni fikirler, yeni dijital ürünler üretmesi, sonra da bunları kodlaması istenir.</div>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 text-green-500">
                                Hemen Başvur <MdArrowForward />
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/00003.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-3xl">Hiring Challenge</div>
                            <div className="text-base font-light">Hiring Challenge yarışmalarında Android, iOS, algoritma veya kod hatası gibi problemleri belirli bir zaman aralığı içerisinde çözmeye çalışacaksın. Bu yarışmalarda algoritma tasarımına, özgünlüğe ve kod kalitesine göre puan alırsın.</div>
                        </div>
                        <div>
                            <button className="flex items-center gap-2 text-green-500">
                                Hemen Başvur <MdArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;
