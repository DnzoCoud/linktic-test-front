interface HeaderPageProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function HeaderPage({
  title,
  description,
  icon,
}: HeaderPageProps) {
  return (
    <div className="flex items-center justify-start gap-4">
      <span className="size-10 rounded-xl bg-zinc-700 flex items-center justify-center">
        {icon}
      </span>
      <span>
        <h1 className="font-extrabold text-3xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </span>
    </div>
  );
}
