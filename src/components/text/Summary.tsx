
interface SummaryProps {
    title: string;
    content: string;
}

function Summary({ title, content }: SummaryProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Summary;