import Image from "next/image";
import CardPageSectionOne from "../components/cardPageSectionOne";

const CardPage = () => {
    return (
        <div className="py-10">
            <div className="cardPage-bg">
                <div className="max-w-7xl m-auto text-white flex justify-between">
                    <div className=" flex flex-col gap-5 self-center">
                        <div className="text-4xl">Tüm Etkinlikler</div>
                        <div className="text-xl">Techcareer.net ile teknoloji dünyasına adım at! En yenilikçi teknoloji</div>
                        <div className="text-xl">eğitimleri ve yarışmalarına katıl. Becerilerini geliştir!</div>
                        <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Keşfet</button></div>
                    </div>
                    <Image src={"/img/vector.svg"} alt="" width={400} height={400} />
                </div>
            </div>
            <div className="grid m-auto max-w-7xl pb-8">
                <div className="text-4xl text-center py-10">Başvurunu Bekleyen Etkinlikler</div>
                <div className="flex flex-wrap justify-center gap-5 ">
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-whit hover:border-black cursor-pointer">
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
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                        <div><Image className="rounded-md" src={"/img/flt.webp"} width={500} height={400} alt=""></Image></div>
                        <div className="font-bold text-xl text-center">Flutter Builder Bootcamp</div>
                        <div className="font-light text-sm text-center">Ücretsiz öğren, mezun ol, iş fırsatı yakala!</div>
                        <div className="flex justify-center gap-2">
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatı</div>
                        </div>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                                <div className="text-sm">10.11.2024</div>
                            </div>
                            <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                        </div>
                    </div>
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                        <div><Image className="rounded-md" src={"/img/bi.webp"} width={500} height={400} alt=""></Image></div>
                        <div className="font-bold text-xl text-center">Power BI Beginner Bootcamp</div>
                        <div className="font-light text-sm text-center">Ücretsiz öğren, mezun ol, iş fırsatı yakala!</div>
                        <div className="flex justify-center gap-2">
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatı</div>
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
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                        <div><Image className="rounded-md" src={"/img/qa.webp"} width={500} height={400} alt=""></Image></div>
                        <div className="font-bold text-xl text-center">QA Test LabBootcamp</div>
                        <div className="font-light text-sm text-center">Ücretsiz öğren, mezun ol, iş fırsatı yakala!</div>
                        <div className="flex justify-center gap-2">
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatı</div>
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
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                        <div><Image className="rounded-md" src={"/img/aw.webp"} width={500} height={400} alt=""></Image></div>
                        <div className="font-bold text-xl text-center">Android Workshop with jetpack</div>
                        <div className="font-light text-sm text-center">Ücretsiz öğren, mezun ol, iş fırsatı yakala!</div>
                        <div className="flex justify-center gap-2">
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatı</div>
                        </div>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                                <div className="text-sm">13.11.2024</div>
                            </div>
                            <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                        </div>
                    </div>
                    <div className="max-w-96 rounded-md border p-5 grid gap-5 bg-white hover:border-black cursor-pointer">
                        <div><Image className="rounded-md" src={"/img/e2e.webp"} width={500} height={400} alt=""></Image></div>
                        <div className="font-bold text-xl text-center">E2E API Automation Workshop</div>
                        <div className="font-light text-sm text-center">Ücretsiz öğren, mezun ol, iş fırsatı yakala!</div>
                        <div className="flex justify-center gap-2">
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">Bootcamp</div>
                            <div className="border border-black bg-slate-100 font-light rounded-xl text-sm flex justify-center px-3">İş Fırsatı</div>
                        </div>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <div className="opacity-40 text-xs">SON BAŞVURU:</div>
                                <div className="text-sm">10.11.2024</div>
                            </div>
                            <div><button className="bg-green-400 text-white text-sm px-12 py-2 rounded-md hover:opacity-90 transation duration-300">Başvur</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <CardPageSectionOne />
        </div>
    );
}

export default CardPage;