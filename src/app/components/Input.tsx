"use client";

import { Input as ShadInput } from '../../components/ui/input';

export default function Input({ placeholder, value, setValue }: { placeholder: string; value: string; setValue: (value: string) => void }) {
    return (
        <ShadInput style={{ backgroundColor: '#121212', outline: 'none', border: 'none', color: '#AAAAAA' }} className='w-full' content={value} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    );
}
