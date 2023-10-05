import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className='fixed w-full bg-teal-500'>
        <div className='mx-auto max-w-screen-lg flex justify-between items-center'>
          <div className='p-4 text-2xl font-semibold text-slate-100'>Hiroki Azuma</div>
          <div className='flex'>
            <Link to='/japanese' className='p-4 mr-4 text-xl text-slate-100 hover:text-slate-200'>
              Japanese
            </Link>
            <Link to='/english' className='p-4 text-xl text-slate-100 hover:text-slate-200'>
              English
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
