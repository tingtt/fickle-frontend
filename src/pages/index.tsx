import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ThemePickerDropDown } from '../organisms/ThemePickerDropDown'

const Home: NextPage = () => {
  return (
    <div className='px-[2rem]'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen flex flex-col flex-1 justify-center items-center py-[4rem]'>
        <h1 className='m-0 text-6xl text-center font-bold leading-tight'>
          Welcome to{' '}
          <a
            className={`
              text-primary no-underline
              active:underilne focus:underline hover:underline
              active:text-primary-focus focus:text-primary-focus hover:text-primary-focus
            `}
            href='https://nextjs.org'
          >
            Next.js!
          </a>
        </h1>

        <p className='text-center leading-normal text-2xl my-[4rem]'>
          Get started by editing{' '}
          <code className='bg-base-300 rounded p-3 text-lg font-[monospace] text-[1.1rem] p-[0.75rem] rounded-[5px]'>
            pages/index.tsx
          </code>
        </p>

        <div className='mb-4'>
          <ThemePickerDropDown />
        </div>

        <div className='flex items-center justify-center flex-wrap max-w-[800px]'>
          <a
            href='https://nextjs.org/docs'
            className={`
              sm:max-w-[300px] sm:min-h-none w-[100%] min-h-[188px]
              m-4 p-6 text-left no-underline border-[1px] rounded-[10px]
              hover:text-primary-focus hover:border-primary-focus
              focus:text-primary-focus focus:border-primary-focus
              active:text-primary-focus active:border-primary-focus
              duration-150 erase-in-out
            `}
          >
            <h2 className='text-2xl font-bold mb-[1rem]'>
              Documentation &rarr;
            </h2>
            <p className='m-0 text-xl leading-normal'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className={`
              sm:max-w-[300px] sm:min-h-none w-[100%] min-h-[188px]
              m-4 p-6 text-left no-underline border-[1px] rounded-[10px]
              hover:text-primary-focus hover:border-primary-focus
              focus:text-primary-focus focus:border-primary-focus
              active:text-primary-focus active:border-primary-focus
              duration-150 erase-in-out
            `}
          >
            <h2 className='text-2xl font-bold mb-[1rem]'>Learn &rarr;</h2>
            <p className='m-0 text-xl leading-normal'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={`
              sm:max-w-[300px] sm:min-h-none w-[100%] min-h-[188px]
              m-4 p-6 text-left no-underline border-[1px] rounded-[10px]
              hover:text-primary-focus hover:border-primary-focus
              focus:text-primary-focus focus:border-primary-focus
              active:text-primary-focus active:border-primary-focus
              duration-150 erase-in-out
            `}
          >
            <h2 className='text-2xl font-bold mb-[1rem]'>Examples &rarr;</h2>
            <p className='m-0 text-xl leading-normal'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={`
              sm:max-w-[300px] sm:min-h-none w-[100%] min-h-[188px]
              m-4 p-6 text-left no-underline border-[1px] rounded-[10px]
              hover:text-primary-focus hover:border-primary-focus
              focus:text-primary-focus focus:border-primary-focus
              active:text-primary-focus active:border-primary-focus
              duration-150 erase-in-out
            `}
          >
            <h2 className='text-2xl font-bold mb-[1rem]'>Deploy &rarr;</h2>
            <p className='m-0 text-xl leading-normal'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className='flex justify-center items-center flex-1 py-[2rem] border-t-1 border-t-base-300'>
        <a
          className='flex justify-center items-center flex-grow'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className='ml-2 h-[1rem]'>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
