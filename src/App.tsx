import { useState } from 'react';
import { Image } from './components/Image';
import { CopyEmail } from './components/CopyEmail';
// import { ImgStack } from 'img-stacks';

type Page = 'home' | 'contact' | 'testimonials' | 'work';

const pages: Page[] = ['contact', 'work', 'testimonials'];
// const mosaicImages = [
//   { src: 'img/heirloom.webp', alt: 'Heirloom', caption: 'Hello world' },
//   { src: 'img/header.webp', alt: 'Nature', caption: 'Nature' },
//   { src: 'img/mosaic.webp', alt: 'Mosaic Puzzles', caption: 'Mosaic Puzzles' },
// ];

const workProjects = [
  {
    title: 'Heirloom',
    src: 'img/heirloom.webp',
    alt: 'Heirloom',
    description:
      'A video book product with a React frontend and Go microservice backend for video, image, and audio processing.',
    href: 'https://sendheirloom.com',
  },
  {
    title: 'Mosaic Puzzles',
    src: 'img/mosaic.webp',
    alt: 'Mosaic Puzzles',
    description:
      'A Ruby on Rails application managing puzzle manufacturing, inventory, and order processing.',
    href: 'https://www.mosaicpuzzles.co/',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const NavBar = () => (
    <div className="pt-4 pb-8 flex justify-center gap-12 relative z-10 items-center">
      <button
        key="home"
        type="button"
        onClick={() => 'home' !== currentPage && setCurrentPage('home')}
        className="absolute left-4 flex items-center"
        aria-label="logo"
      >
        <img src="img/logo.webp" alt="logo" className="h-16 w-auto" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => page !== currentPage && setCurrentPage(page)}
          className={`text-zinc-400 hover:text-white transition-colors tracking-wide ${
            page === currentPage ? 'invisible pointer-events-none' : ''
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );

  if (currentPage === 'contact') {
    return (
      <div className="h-screen w-full bg-[#1f1f1f] text-white overflow-hidden flex flex-col p-8">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="mb-8">Contact</h1>
            <div className="space-y-4">
              <p className="text-zinc-400 inline">Email: </p>
              <CopyEmail
                className="text-zinc-300 inline"
                text="milesjmahon at gmail dot com"
                link="milesjmahon@gmail.com"
              />
              <p className="text-zinc-400">Seattle, WA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'testimonials') {
    return (
      <div className="h-screen w-full bg-[#1f1f1f] text-white overflow-hidden flex flex-col p-8">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl space-y-8">
            <div className="border-l-2 border-zinc-700 pl-6">
              <p className="mb-4 text-zinc-300">
                "Miles is amazing! Very intelligent and knows a wide range of programming languages.
                He was very responsive and I will continue using him for future projects."
              </p>
              <p className="text-zinc-500">— Andy Clor, Founder of Artistik Designs</p>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <p className="mb-4 text-zinc-300">
                "Miles was a pleasure to work with! I was very impressed by his mastery of Scala and
                attention to detail throughout this project."
              </p>
              <p className="text-zinc-500">— Michael Cohen, CohenChessClub</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'work') {
    return (
      <div className="h-screen w-full bg-[#1f1f1f] text-white overflow-hidden flex flex-col p-8">
        <NavBar />
        <div className="flex-1 flex items-center justify-center gap-16">
          {workProjects.map((project, index) => (
            <div
              key={project.title}
              className={`text-center max-w-md ${index !== 0 ? 'mt-16' : ''}`}
            >
              <h1 className="mb-8">{project.title}</h1>
              <a href={project.href} target="_blank" rel="noreferrer" className="block group">
                <Image
                  src={project.src}
                  alt={project.alt}
                  className="mx-auto object-contain rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </a>
              <p className="text-zinc-400 mt-8">{project.description}</p>
            </div>
          ))}
          {/* image stack example */}
          {/* <div className="text-center max-w-md mt-16">
            <h1 className="mb-8">CohenChessClub</h1>
            <ImgStack
              images={mosaicImages}
              size={{ type: 'aspect-ratio', width: 400, ratio: 'wide' }}
            />
            <p className="text-zinc-400 mt-8">
              A Scala Play Framework web application for managing chess tournaments and player
              rankings.
            </p>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-[#1f1f1f] text-white overflow-hidden flex flex-col p-8">
      <NavBar />

      <div className="flex-1 relative overflow-hidden rounded-xl">
        <Image
          src="img/header.webp"
          alt="Photo of Lake Washington with Mount Rainier in the background. I took this photo!"
          loading="eager"
          className="w-full h-full object-cover opacity-70"
        />
        {/* darken image slightly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-2 text-white drop-shadow-lg text-lg">Miles, programmer</h1>
            <p className="text-zinc-200 drop-shadow-lg">
              Available for web & software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
