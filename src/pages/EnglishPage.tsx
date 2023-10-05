import React from 'react';

export const EnglishPage = () => {
  const imagePath = '/images/profile.jpg';

  return (
    <div className='pt-16 mx-auto max-w-screen-lg'>
      <div className='my-4 px-4 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Hiroki Azuma</h1>
      </div>
      <p>
        I am Hiroki Azuma, a first-year master's student in the Department of Information & Communication Engineering at
        the Graduate School of Information Science and Technology, The University of Tokyo. I am a member of the Aizawa,
        Yamakata, and Matsui Labs, conducting research in Computer Vision. I have interests in machine learning, MLOps,
        infrastructure development, and backend development.
      </p>
      <div>
        <img src={imagePath} alt='My Image' className='w-32 h-auto' />
      </div>
      <br />
      <div>
        <a className='text-blue-500' href='https://github.com/azuma164'>
          Github
        </a>{' '}
        /{' '}
        <a className='text-blue-500' href='https://scholar.google.com/citations?user=7RyCGewAAAAJ&hl=en'>
          Google Scholar
        </a>{' '}
        / CV
      </div>
      <section className='my-4 px-4'>
        <h2 className='text-2xl font-semibold'>Education</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>The University of Tokyo</span>
            <br />
            Master's Program in Information & Communication Engineering, Matsui Laboratory
            <br />
            2023.4 ~ Present
          </li>
          <li className='mb-2'>
            <span className='font-bold'>KTH Royal Institute of Technology</span>
            <br />
            Division of Robotics, Perception and Learning (RPL)
            <br />
            2023.8 ~ Present
          </li>
          <li className='mb-2'>
            <span className='font-bold'>The University of Tokyo</span>
            <br />
            Bachelor of Computer Science in Electrical Engineering & Information Communication
            <br />
            2019.4 ~ 2023.3
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>Development of Human Flow Digital Twins Generated from Camera Images</span>
            <br />
            Accepted for the 2023 MITOU Advanced Program from Information-technology Promotion Agency, Japan (Contract
            price: 14,400,000 yen)
            <br />
            I am in charge of a software development product manager and machine learning model advisor (I couldn't
            become a regular member due to studying abroad)
            <br />
            <a className='text-blue-500' href='https://www.ipa.go.jp/jinzai/mitou/advanced/2023/gaiyou_is-1.html'>
              Details
            </a>
          </li>
          <li className='mb-2'>
            <span className='font-bold'>NEDO Supply Chain Data Challenge</span>
            <br />
            Passed the first round of screening but did not win in the final selection
            <br />
            I was responsible for building machine learning models as an image processing engineer
            <br />
            <a className='text-blue-500' href='https://www.nedo.go.jp/news/press/AA5_101591.html'>
              Details
            </a>
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Publications</h2>
        <h3 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-600'>International</span>
        </h3>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>Defense-Prefix for Preventing Typographic Attacks on CLIP</span>
            <br />
            <u>Hiroki Azuma</u>, Yusuke Matsui
            <br />
            <a className='text-blue-500' href='https://iccv23-arow.github.io/'>
              ICCV2023 Workshop
            </a>
            , Best Paper Award
            <br />
            <a className='text-blue-500' href='https://arxiv.org/abs/2304.04512'>
              Paper
            </a>{' '}
            /{' '}
            <a className='text-blue-500' href='https://github.com/azuma164/Defense-Prefix'>
              Code
            </a>
          </li>
        </ul>
        <h3 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-600'>Domestic (Japan)</span>
        </h3>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>CLIPにおけるタイポグラフィック攻撃を防ぐPrefix学習</span>
            <br />
            <u>東大樹</u>, 松井勇佑
            <br />
            <a className='text-blue-500' href='http://cvim.ipsj.or.jp/MIRU2023/award/'>
              MIRU2023
            </a>
            , Long Oral (Acceptance rate: approximately 16%), MIRU Student Best Paper Award
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Awards</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2023.10 Best Paper Award @ ICCV Workshop 2023</li>
          <li className='mb-2'>2023.7 Best Student Paper Award @ MIRU 2023</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Internship</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2022.4 ~: Function</li>
          <li className='mb-2'>2023.1 ~ 2023.7: Mutex</li>
          <li className='mb-2'>2022.11 ~ 2023.1: Cellid</li>
          <li className='mb-2'>2021.8 ~ 2021.9: Cocone</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Language</h2>
        Japanese (Native), English (Academic Level)
      </section>
    </div>
  );
};
