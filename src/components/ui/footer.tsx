const Footer = () => {
  return ( 
    <footer className='w-full font-bold text-xs py-4 bg-accent text-center rounded-t'>
      <span className='text-primary'>Developer</span> Store - {new Date().getFullYear()}
    </footer>
   );
}
 
export default Footer;