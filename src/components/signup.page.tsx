import { ChevronLeft } from "lucide-react"
export const SignupPage = () => {
    return (
        <div className="w-screen h-full justify-between flex items-center">
            <div className="bg-white w-[25%] h-[30%] flex-col flex space-y-4 p-4 justify-center m-auto">
                <ChevronLeft/>
                <h1>Create your account</h1>
                <p>Sign up to explore your favorite dishes.</p>

                <input placeholder="Enter your email address"></input>
                <button className="bg-gray-300">Lets'go</button>
                </div>
            
            <div className="w-[55%] h-[50%] mr-[100px]">
            <img className="w-full h-full object-cover rounded-lg" src="hurgelt.png"/>
               
            </div>
        </div>
    )
}