import imgE from "../../img/profile.jpg"

interface ProfileProps {
    srcImg?: string
    name: string
}

const Profile = ({srcImg, name}: ProfileProps) => {

    return (
        <div>
            <div className="profile flex items-center">
                <span className="roboto-medium text-[18pxmodile]">{name}</span>
                <img className="ml-[15px] w-[55px] h-[55px] rounded-full" src={imgE} alt="profile" />
            </div>
        </div>
    )
}

export default Profile;