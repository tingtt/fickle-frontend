import { useTheme } from '../../domain/model/theme'
import { ALL_THEMES } from '../../domain/model/theme/@types'
import { ThemeOverViewMini } from '../molecules/ThemeOverViewMini'

export const ThemePickerDropDown = () => {
  const [_, setTheme] = useTheme()
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn m-1'>
        Theme
      </label>
      <ul
        tabIndex={0}
        className={`
          dropdown-content menu p-2 shadow bg-base-100 rounded-box
          w-52 h-60 overflow-scroll no-scrollbar
        `}
      >
        {ALL_THEMES.map((value) => {
          return (
            <div key={value} className='m-2'>
              <ThemeOverViewMini
                theme={value}
                onClick={() => setTheme(value)}
              />
            </div>
          )
        })}
      </ul>
    </div>
  )
}
