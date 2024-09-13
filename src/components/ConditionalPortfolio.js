'use client';

import { usePathname } from 'next/navigation';
import Portfolio from '../app/portfolio/page';

const ConditionalPortfolio = () => {
  const pathname = usePathname();

  return pathname !== '/portfolio' ? <Portfolio /> : null;
};

export default ConditionalPortfolio;
