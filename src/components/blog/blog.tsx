interface BlogProps {
  title: string;
  content: string;
  time: string;
}

export default function Blog({ title, content, time }: BlogProps) {
  return (
    <div className="w-full h-full">
      <span>{title}</span>
      <span>{content}</span>
      <span>{time}</span>
    </div>
  );
}
