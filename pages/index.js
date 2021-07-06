import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>30 Days of TailwindCss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" >
            30 Days of TailwindCSS
          </a>
        </h1>

        <h2 className="text-4xl mt-5">Participant Name :&nbsp;
          <a className="text-blue-600" href="https://twitter.com/yhdesai">
            Yash Desai
          </a>
        </h2>




        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto lg:px-40">
            <div class="flex flex-wrap -m-4">

              <a class="p-4 md:w-1/3" href="challenge/c1">
                <div class="overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #1
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Install Tailwind CSS without any Javascript Framework locally with purgeCSS,
                          enable the dark mode option, preferences
                          or class is up to you.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>


              <a class="p-4 md:w-1/3" href="challenge/c2">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #2
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Write some text including headings and subheadings, quotes, italics. Train
                          your typography.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              <a class="p-4 md:w-1/3" href="challenge/c3">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #3
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create state buttons with a hover and a transition effect, like primary
                          button, secondary and for example disable.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c4">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #4
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create and rework a select element including options and style it with only
                          Tailwind.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c5">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #5
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a form with buttons, inputs and text areas. Remember the download and
                          upload buttons, those can be also included.
                          And center it in the middle. Make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c6">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-lightBlue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #6
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create an avatar inside a card along with some text, and make it 100%
                          reponsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c7">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-300 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #7
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a navigation bar with logo, links and a CTA. Make it fixed, sticky or
                          normal.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c8">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-400 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #8
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a grid with columns and rows, use tailwinds flexbox utilities make it
                          responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c9">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-500 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #9
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a 5 widget and position them differently on the website.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c10">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-600 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #10
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make a card with and image and text. The text has to be on top of the image,
                          use absolute and relative.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c11">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-700 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #11
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make some sections and a container within and give them different widths and
                          heights.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c12">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-blue-800 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #12
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a section with an image, with text to the right, left or underneath
                          or on top of it. Make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c13">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-300 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #13
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a footer layout with links and logo. Remember the white space and to
                          make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c14">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-400 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #14
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a sidebar, fixed, sticky or normal. include links and a top logo.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c15">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-500 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #15
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make sidebar layout with left or right scrollable content.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c16">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-600 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #16
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create your color, font and shadow themes within the tailwind.config.js and
                          use them on any layout you created before.
                          Give them custom names.
                          .
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c17">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-700 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #17
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a kan ban layout, with cards and boxes and make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c18">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-indigo-800 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #18
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make a dropdown with links and icons. You can use Alpine.js too, why not.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c19">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-300 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #19
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make a dropdown with two columns, links and icons. Make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c20">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-400 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #20
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a layout, any of your choice. Use your creations as content, make it
                          responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c21">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-500 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #21
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a horizontal scrollable layout only using Tailwind CSS, for example a
                          card row and make it responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c22">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-600 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #22
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a full width and height grid of two columns and 5 rows, make it
                          responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c23">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-700 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #23
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a grid with cards for your team and make them responsive, include a
                          picture, name and twitter.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c24">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 text-pink-800 bg-white rounded-t-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #24
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a grid layout with cards, give them different widths and heights.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c25">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #25
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create notifications for a few states with a close icon. Make it work with
                          Alpine.js
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c26">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #26
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create some cards and give them different Tailwind gradients.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c27">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #27
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Make some headings and give them a gradient color, use bg-clip-text
                          .
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c28">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #28
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create pagination widgets. With a button group, separated and side to side.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c29">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #29
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Create a pricing table with three or more cards, make this ones responsive.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a class="p-4 md:w-1/3" href="challenge/c30">
                <div class="h-full overflow-hidden bg-white rounded-lg shadow-xl order ">
                  <div class="flex items-center w-full h-32 p-8 bg-white rounded-t-lg text-rose-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="64" height="64"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div class="p-6 border-t rounded-b-lg ">
                    <div class="inline-flex items-center w-full text-gray-500">
                      <span class="text-2xl font-semibold tracking-tighter">
                        Challenge #30
                        <p
                          class="mb-2 text-2xl font-normal leading-snug tracking-tight lg:text-lg text-coolGray-400">
                          Re-create your favourite UI or a whole website only using Tailwind.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by&nbsp; <a href="https://twitter.com/yhdesai" className="text-blue-600"> Yash Desai</a>


          &nbsp; | Challenge by &nbsp; <a href="https://twitter.com/mike_andreuzza" className="text-blue-600">Mike Andreuzza</a>
        </a>
      </footer>
    </div>
  )
}
