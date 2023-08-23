

const SkeletonWidget = () => {
  return (
    <div className="shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-800 text-white font-medium group relative animate-pulse">
            <div className="flex justify-center items-center w-14 h-14 bg-gray-300 rounded-full" >
                
            </div>
            <div
                className={`flex absolute top-1 left-2   w-7 h-7 justify-center items-center rounded-full bg-gray-300  text-2xl font-semibold `}
            >
                
            </div>

            <div >
                {/* <Popup visible={showMyModal} onClose={HandleOnClose} dept={type} /> */}
                <p className="rounded bg-slate-300 h-12 w-12"></p>
                <div className="py-2 space-y-1">
                    <p className="h-3 w-full rounded-md bg-gray-300 space-y-3"> </p>
                    <p className="h-3 w-w-full rounded-md bg-gray-300"></p>
                </div>
            </div>
        </div>
  )
}

export default SkeletonWidget