
const Header = () => {
  return (
    <nav className=" text-white flex gap-4 items-end justify-between " >
      <div>
        <h1 className=" m-4 text-2xl ">Hello👋<br/>
          <span className=" text-3xl"> Arpit</span>
        </h1>
      </div>
      <div className="flex gap-4 items-end m-4">
        <button className=" bg-red-700 px-3 py-2 rounded">Log out</button>
      </div>
    </nav>
  )
}

export default Header