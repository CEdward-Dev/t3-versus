import type { SetStateAction, Dispatch } from "react"

const Menu = ({menuActive, setMenuActive} : {menuActive: boolean, setMenuActive: Dispatch<SetStateAction<boolean>>}) => {
  // const [active, setActive] = useState(menuActive);

  const closeMenu = () => {
    setMenuActive(!menuActive)
  }

  const sportsArray = ['football', 'basketball', 'hockey', 'soccer', 'baseball']

  return (
    <div>
      <div className="fixed right-0 top-0 z-10 w-3/4 bg-slate-500">
        <h2>Settings</h2>
        <button onClick={closeMenu}>X</button>
        <form>
          <select defaultValue={sportsArray[0]}>
            {sportsArray.map((sport, index) => {
              return <option key={index}>{sport}</option>;
            })}
          </select>

          <label>Enter first competitor or team:</label>
          <input type="text" placeholder="Home Team"></input>
        </form>
      </div>
    </div>
  );
}

export default Menu
