import { FaMoon, FaSun } from 'react-icons/fa6'

export default function ThemeController() {
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="cdark" />

            <FaSun className="swap-on fill-current" />

            <FaMoon className="swap-off fill-current" />
        </label>
    )
}
