const Footer = () => {
  return ( 
    <footer className='font-bold text-xs py-4 bg-accent text-center'>
      <span className='text-primary'>Developer</span> Store - {new Date().getFullYear()}
    </footer>
   );
}
 
export default Footer;