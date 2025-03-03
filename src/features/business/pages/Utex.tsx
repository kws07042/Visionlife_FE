import UtexOverview from '../components/UtexOverview.tsx';
import UtexFeatures from '../components/UtexFeatures.tsx';
import UtexInkSystem from '../components/UtexInkSystem.tsx';
import UtexComparison from '../components/UtexComparison.tsx';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const Utex = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.biz_item', 'top 90%')
  return (
    <div className="py-12 sm:py-20 lg:py-32 overflow-x-hidden">
      <UtexOverview ref={sectionRef}/>
      <UtexFeatures ref={sectionRef}/>
      <UtexInkSystem ref={sectionRef}/>
      <UtexComparison ref={sectionRef}/>
    </div>
  );
};

export default Utex;
