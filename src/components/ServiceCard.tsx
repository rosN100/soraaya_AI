
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const ServiceCard = ({ title, description, imageSrc, className }: ServiceCardProps) => {
  return (
    <div className={cn("glass-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-soraaya-indigo/50", className)}>
      <div className="mb-4 w-full aspect-square overflow-hidden rounded-lg">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-soraaya-white">{title}</h3>
      <p className="text-soraaya-white/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
