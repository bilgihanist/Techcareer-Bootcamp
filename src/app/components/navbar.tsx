import MenuList from "./menuList";
import SearchBar from "./searchbar";
import SignIn from "./sign";

const Navbar = () => {
    return (
        <div className="shadow-xl">
            <div className="flex justify-between max-w-7xl m-auto items-center">
                <div className="flex  gap-4 py-6">
                    <div className="text-3xl font-bold">
                        tech<span className="text-green-400">career</span>.net
                    </div>
                    <SearchBar />
                    <MenuList />
                </div>
                <SignIn />
            </div>
        </div>
    );
}

export default Navbar;