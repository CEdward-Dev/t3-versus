import { useState } from "react"

const Menu = ({menuActive} : {menuActive: boolean}) => {
  const [active, setActive] = useState(menuActive);

  const closeMenu = () => {
    return setActive(!active)
  }

  return (
    <div>
      <div className="fixed top-0 right-0 w-3/4 bg-slate-500">
          Menu
          <button onClick={closeMenu}>X</button>
      </div>
    </div>
  )
}

export default Menu
