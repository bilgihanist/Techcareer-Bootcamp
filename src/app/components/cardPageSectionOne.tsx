import Image from "next/image";

const CardPageSectionOne = () => {
    return (
        <div className="bg-white py-8">
            <div className="flex items-center max-w-7xl m-auto gap-6">
                <Image src={"/img/codelog.svg"} alt="" width={90} height={90} />
                <div className="grid gap-2">
                    <div className="opacity-30 text-xl">Teknoloji Yeteneğinin Kod Günlüğü</div>
                    <div className="opacity-60 text-md">Teknoloji meraklıları, profesyoneller, öğrenci grupları ve tüm araştırmayı sevenler için teknolojideki son gelişmeleri ve yenilikleri takip edebileceği blog sayfamızı hemen ziyaret edebilirsin.</div>
                </div>
                <div><button className="bg-green-400 text-white text-sm px-12 py-2 w-52 rounded-md hover:opacity-90 transation duration-300">Hemen Keşfet</button></div>
            </div>
        </div>
    );
}

export default CardPageSectionOne;