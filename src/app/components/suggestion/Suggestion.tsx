interface SuggestionData {
    id: String,
    name: String,
    profileImage: String,
    title: String,
    upVotes: Number,
    downVotes: Number,
    createdAt: String,
}

import { FC } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";

import UpVote from "@/app/assets/images/UpVote.png";
import DownVote from "@/app/assets/images/DownVote.png";

const Suggestion: FC<SuggestionData> = ({id, name, profileImage, title, upVotes, downVotes, createdAt}) => {

    const router = useRouter();

    return(
        <div className="flex p-[5px] hover:cursor-pointer hover:bg-[#ebebeb] hover:rounded-xl" onClick={(() => router.push('/suggestions/' + id))}>
            <div className="grid mt-[5px]">
                <p className="text-[15px] w-[400px]">{title}</p>
                <p className="text-[12px]"><span className="font-bold hover:cursor-pointer">{name}</span> started {createdAt}</p>
            </div>
            <div className="grid mt-[7px] ml-[10px] text-[12px] font-semibold">
                <div className="flex">
                    <Image className="opacity-65 hover:opacity-100 hover:cursor-pointer" width={16} height={16} src={UpVote} alt="UpVote"/>
                    <p className="opacity-65 hover:opacity-100 hover:cursor-pointer">15</p>
                </div>
                <div className="flex">
                    <Image className="opacity-65 hover:opacity-100 hover:cursor-pointer" width={16} height={16} src={DownVote} alt="DownVote"/>
                    <p className="opacity-65 hover:opacity-100 hover:cursor-pointer">2</p>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;