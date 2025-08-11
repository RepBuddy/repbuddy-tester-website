import { Alert as ShadAlert, AlertDescription, AlertTitle } from "../../components/ui/alert";

function Alert({ title, description }: { title: string; description: string }) {
    return <ShadAlert style={{ backgroundColor: '#121212', color: '#E0E0E0' }} className='w-full'>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
    </ShadAlert>;
}

export default Alert;
