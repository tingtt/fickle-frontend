import { useTheme } from '../../domain/model/theme'
import { ALL_THEMES } from '../../domain/model/theme/@types'
import { ThemeOverView } from '../molecules/ThemeOverView'

export const ThemePickerGrid = () => {
  const [_, setTheme] = useTheme()
  return (
    <div className='rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {ALL_THEMES.map((value) => {
        return (
          <ThemeOverView
            key={value}
            theme={value}
            onClick={() => setTheme(value)}
          />
        )
      })}
    </div>
  )
}
