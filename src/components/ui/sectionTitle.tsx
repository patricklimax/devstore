import { ComponentProps } from 'react';

const SectionTitle = ({children}: ComponentProps<"p">) => {
  return ( 
    <p className='uppercase my-4 pl-4 font-semibold'>
      {children}
    </p>
   );
}
 
export default SectionTitle;