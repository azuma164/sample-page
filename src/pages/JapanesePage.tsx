import React from 'react';

export const JapanesePage = () => {
  const imagePath = '/images/profile.jpg';
  return (
    <div className='pt-16 mx-auto max-w-screen-lg'>
      <div className='my-4 px-4 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>東大樹</h1>
      </div>
      <p>
        東京大学情報理工学系研究科電子情報学専攻修士1年の東大樹です. 相澤・山肩・松井研のメンバーで,
        画像処理の研究をしています.
        <br />
        機械学習, MLOps, インフラ構築, バックエンド開発に興味があります.
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
            <span className='font-bold'>東京大学大学院</span>
            <br />
            東京大学情報理工学系研究科電子情報学専攻, 松井研究室
            <br />
            2023.4 ~現在
          </li>
          <li className='mb-2'>
            <span className='font-bold'>スウェーデン王立工科大学</span>
            <br />
            KTH, The Division of Robotics, Perception and Learning (RPL)
            <br />
            2023.8 ~現在
          </li>
          <li className='mb-2'>
            <span className='font-bold'>東京大学</span>
            <br />
            東京大学電子情報工学科, 理科一類
            <br />
            2019.4 ~ 2023.3
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>
            <span className='font-bold'>カメラ映像から自動構築される人流デジタルツインの開発</span>
            <br />
            2023年度未踏アドバンスト事業採択 (契約金額: 14,400,000円)
            <br />
            ソフトウェア開発のプロダクトマネージャー, 及び機械学習モデル構築のアドバイザを担当 (留学中の為,
            規定により正規メンバーにはなれず)
            <br />
            <a className='text-blue-500' href='https://www.ipa.go.jp/jinzai/mitou/advanced/2023/gaiyou_is-1.html'>
              詳細ページ
            </a>
          </li>
          <li className='mb-2'>
            <span className='font-bold'>NEDO Supply Chain Data Challenge</span>
            <br />
            1次審査通過, 最終選考会にて受賞ならず
            <br />
            画像処理エンジニアとして, 機械学習モデルの構築を担当
            <br />
            <a className='text-blue-500' href='https://www.nedo.go.jp/news/press/AA5_101591.html'>
              詳細ページ
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
              論文
            </a>{' '}
            /{' '}
            <a className='text-blue-500' href='https://github.com/azuma164/Defense-Prefix'>
              コード
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
            , Long Oral (採択率: 約16%), MIRU学生優秀賞
          </li>
        </ul>
        <h2 className='text-2xl font-semibold'>Awards</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2023.10 Best Paper Award @ ICCV Workshop 2023</li>
          <li className='mb-2'>2023.7 MIRU優秀学生賞 @ MIRU 2023</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Internship</h2>
        <ul className='list-disc list-inside mt-2'>
          <li className='mb-2'>2022.4 ~: Function</li>
          <li className='mb-2'>2023.1 ~ 2023.7: mutex</li>
          <li className='mb-2'>2022.11 ~ 2023.1: cellid</li>
          <li className='mb-2'>2021.8 ~ 2021.9: cocone</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Language</h2>
        日本語 (Native), English (Academic level)
      </section>
    </div>
  );
};

export default JapanesePage;
