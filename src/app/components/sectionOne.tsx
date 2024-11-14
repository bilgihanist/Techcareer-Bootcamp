import Image from "next/image";

const SectionOne = () => {
    return (
        <div className="bg-white py-9">
            <div className="m-auto max-w-7xl grid gap-10">
                <div className="text-3xl">Neden Techcareer.net?</div>
                <div className="flex gap-5">
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/002.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-xl">Ücretsiz etkinliklere katıl</div>
                            <div className="text-sm">Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile başlayacaksın.</div>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/003.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-xl">Kendini kanıtla</div>
                            <div className="text-sm">Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak hem becerilerini geliştirecek hem de ödül kazanma fırsatı yakalayacaksın.</div>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <Image width={100} height={100} alt="" src={"/img/001.svg"}></Image>
                        <div className="max-w-96 grid gap-2">
                            <div className="text-bold text-xl">İş fırsatı yakala</div>
                            <div className="text-sm">Sektöründe lider teknoloji şirketleriyle tanışacak ve iş fırsatları yakalayacaksın.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;
