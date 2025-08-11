"use client";
import { Button as ShadBtn } from '../../components/ui/button';

export default function Button({ text, onClick, agreed }: { text: string; onClick: () => void; agreed: boolean }) {
    return (
        <ShadBtn disabled={!agreed} onClick={onClick} style={{ backgroundColor: '#FF6347', cursor: 'pointer' }} className='w-full'>
            {text}
        </ShadBtn>
    );
}
