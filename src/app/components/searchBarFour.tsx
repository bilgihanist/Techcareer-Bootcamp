import { MdEmail } from "react-icons/md";

const EmailInput = () => (
    <div className="flex justify-center items-center">

        <div className="flex border  w-1/2 rounded-md  bg-white">
            <span className="flex items-center px-3 text-gray-500">
                <MdEmail size={30}/>
            </span>

            <input
                type="email"
                placeholder="Şirket E-Mail Adresiniz"
                className="py-4 px-3 flex-grow outline-none"
            />

            <div className="p-2">
                <button className="bg-green-500 rounded-md text-white px-4 py-2 font-semibold">
                    Gönder
                </button>
            </div>
        </div>
    </div>
);

export default EmailInput;
