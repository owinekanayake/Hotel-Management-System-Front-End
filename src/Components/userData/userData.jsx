import { FaCircleUser } from "react-icons/fa6";
function UserTag(props) {
    
    return (
        <div className="ml-auto mr-12  flex items-center cursor-pointer">
                <FaCircleUser size={45}/>
                <span className="text-black ml-5 mr-0 font-bold">Owin Eknayake</span>
        </div>
    )
}

export default UserTag;