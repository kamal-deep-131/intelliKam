import { BoltLoader } from "react-awesome-loaders";
const Loader = () => {
    return (
        <div className="flex items-center justify-center mt-14">
            <BoltLoader
                className={"loaderbolt"}
                boltColor={"rgb(34 197 94)"}
                backgroundBlurColor={"rgb(34 197 94)"}
            />
        </div>
    );
};

export default Loader