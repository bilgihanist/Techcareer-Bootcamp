"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainCard = () => {
    const router = useRouter();

    const navigateToCardPage = () => {
       
        router.push("/pages"); 
    };
    return (
        <div className="grid m-auto gap-7  max-w-7xl pb-44">
            <div className="text-4xl text-center py-5">Başvurunu Bekleyen Etkinlikler</div>
            <div className="flex gap-5 justify-center">
                <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                    <div><Image className="rounded-md" src={"/img/01.webp"} width={500} height={400} alt=""></Image></div>
                    <div className="font-bold text-xl text-center">FMSS Bilişim Android Development Bootcamp with kotlin</div>
                    <div className="font-light text-sm text-center">Ücretsiz Bootcamp'a katıl. Jr. Android Developer ol!</div>
                    <div className="flex justify-center gap-2">
                        <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                        <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatları</div>
                    </div>
                    <hr className="w-full" />
                    <div className="flex justify-between">
                        <div>
                            <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                            <div className="text-sm">20.11.2024</div>
                        </div>
                        <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                    </div>
                </div>
                <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                    <div><Image className="rounded-md" src={"/img/02.webp"} width={500} height={400} alt=""></Image></div>
                    <div className="font-bold text-xl text-center">Luxoft Parking Hackathon</div>
                    <div className="font-light text-sm text-center">Yarış, Kazan, Luxoft'a Staj Yap!</div>
                    <div className="flex justify-center gap-2">
                        <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Hackathon</div>
                        <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatları</div>
                    </div>
                    <hr className="w-full" />
                    <div className="flex justify-between">
                        <div>
                            <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                            <div className="text-sm">24.11.2024</div>
                        </div>
                        <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                    </div>
                </div>

                <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                    <div><Image className="rounded-md" src={"/img/03.webp"} width={500} height={400} alt=""></Image></div>
                    <div className="font-bold text-xl text-center">Unity Masters: Workshop & Game Jame</div>
                    <div className="font-light text-sm text-center">Unity ile Oyun Geliştirme için İlk Adım!</div>
                    <div className="flex justify-center gap-2">
                        <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                    </div>
                    <hr className="w-full" />
                    <div className="flex justify-between">
                        <div>
                            <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                            <div className="text-sm">01.12.2024</div>
                        </div>
                        <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
            <button
                onClick={navigateToCardPage}
                className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transition duration-300"
            >
                Tüm Etkinlikleri Gör
            </button>
                </div>
        </div>
    );
}

export default MainCard;
