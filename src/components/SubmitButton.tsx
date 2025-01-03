export default function SubmitButton(props: {
    text: string;
    isLoading: boolean;
}) {
    return <button type="submit" className="w-full flex justify-center items-center py-3 h-12 mt-4 bg-blue-500 dark:bg-orange-600 font-bold text-white rounded-sm hover:rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-600 dark:focus:ring-orange-700">
        {props.isLoading ? <>
            <div className="z-50">
                <div className="relative px-3 py-2 border-8 bg-blue-500 dark:bg-orange-600 w-10 h-10 rounded-full bg-transparent">
                    <div>
                        <div className="absolute bg-blue-500 dark:bg-orange-600 w-2 h-10 left-2 -top-2 animate-spinBorder"></div>
                        <div className="absolute bg-white w-3 h-3 left-[6px] top-[6px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </> : props.text}
    </button>
}