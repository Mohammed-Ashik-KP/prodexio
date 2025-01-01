import { cn } from '@/lib/utils';
import React from 'react';
import { LabelProps } from './label.type';


const Label:React.FC<LabelProps & Partial<HTMLDivElement>> = ({label,className}) => {
    return ( 
        <div className={cn('text-sm text-gray-600 font-medium',className)}>
            {label}
        </div>
     );
}
 
export default Label;