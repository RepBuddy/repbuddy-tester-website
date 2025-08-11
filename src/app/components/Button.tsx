"use client";
import { Button as ShadBtn } from '../../components/ui/button';

export default function Button({ children, onClick, agreed }: any) {
    return (
        <ShadBtn disabled={!agreed} onClick={onClick} style={{ backgroundColor: '#FF6347', cursor: 'pointer' }} className='w-full' children={children} />
    );
}
