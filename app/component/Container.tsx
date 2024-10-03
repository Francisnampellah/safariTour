import { LuCheckCircle } from "react-icons/lu"


export default function Container({ children, headerText, titleText, icon }: { children: any, headerText: string, titleText: string, icon: any }) {
    return (
        <div className="h-auto flex w-full flex-col gap-8 my-8 md:px-32 py-16">
            <div className="px-16 gap-8 my-8 flex flex-col">
                <div className="text-blue-600 text-3xl flex gap-4 items-end" > <LuCheckCircle className="text-5xl" /> <span className="font-semibold">{headerText}</span></div>
                <h1 className="text-5xl text-start">
                   {titleText}
                </h1>
            </div>
            {children}
        </div>

    )
}
