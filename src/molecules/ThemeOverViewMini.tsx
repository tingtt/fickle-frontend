import { Theme } from '../../domain/model/theme/@types'

export const ThemeOverViewMini = ({
  theme,
  onClick,
}: {
  theme: Theme
  onClick?: () => void
}) => {
  return (
    <div
      className='outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline'
      data-set-theme={theme}
      data-act-class='outline'
      onClick={onClick}
    >
      <div
        data-theme={theme}
        className='bg-base-100 text-base-content w-full cursor-pointer font-sans'
      >
        <div className='grid grid-cols-5 grid-rows-3'>
          <div className='col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4'>
            <div className='flex-grow text-sm font-bold'>{theme}</div>{' '}
            <div className='flex flex-shrink-0 flex-wrap gap-1'>
              <div className='bg-primary w-2 rounded'></div>{' '}
              <div className='bg-secondary w-2 rounded'></div>{' '}
              <div className='bg-accent w-2 rounded'></div>{' '}
              <div className='bg-neutral w-2 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
