import Image from "next/image";

const SectionTwo = () => {
    return (
        <div className="sectionTwo-bg py-9 relative">
            <div className="m-auto max-w-7xl">
                <div className="max-w-2xl grid gap-5">
                    <div className="text-3xl">Kariyer Rehberi’yle Geliş</div>
                    <div className="text-green-500 text-xl">Yeni teknoloji kariyerini seçmeye hazır mısın?</div>
                    <div>Teknoloji alanında kariyer yapmak istiyor ancak hangi pozisyonu seçeceğini veya seçtiğin pozisyonda hangi adımlardan geçmen gerektiğini bilmiyorsan, Kariyer Rehberi ile en doğru yerdesin!</div>
                    <div><button className="bg-green-400 text-white text-sm px-8 py-3 rounded-md hover:opacity-90 transation duration-300">Hemen İncele</button></div>
                </div>
            </div>
            <Image src={"/img/0001.png"} width={500} height={350} alt="" className="absolute right-0 bottom-0"></Image>
        </div>
    );
}

export default SectionTwo;
