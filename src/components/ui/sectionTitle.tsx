import { ComponentProps } from 'react';

const SectionTitle = ({children}: ComponentProps<"p">) => {
  return ( 
    <p className='uppercase mb-4 pl-2 font-semibold'>
      {children}
    </p>
   );
}
 
export default SectionTitle;