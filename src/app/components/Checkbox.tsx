"use client";
import { Checkbox as ShadCheckbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';

export default function Checkbox({ id, label, span, checked, setChecked, url }: { id: string; label: string; span?: string; checked: any; setChecked: any; url?: string }) {
    return (<div className="flex items-center gap-3">
        <ShadCheckbox style={{ outline: 'none' }} color='#E0E0E0' id={id} checked={checked} onCheckedChange={setChecked} />
        <Label style={{ color: '#E0E0E0' }} htmlFor={id}>{label}{span && <span style={{ color: '#FF6347', cursor: 'pointer' }} onClick={() => window.open(url)}>{span}</span>}</Label>
    </div>)
}
