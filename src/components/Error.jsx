const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center uppercase p-3 font-bold mb-3 rounded-md">
        {children}
    </div>
  )
}

export default Error