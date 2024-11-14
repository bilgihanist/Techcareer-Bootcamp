const MenuList = () => {
    return (
        <div className="flex items-center">
            <ul className="flex gap-5 cursor-pointer ">
                <li>Etkinlikler</li>
                <li>İş İlanları</li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Eğitimler
                </li>
                <li>Komünite</li>
                <li>Şirketler</li>
            </ul>
        </div>
    );
}

export default MenuList;