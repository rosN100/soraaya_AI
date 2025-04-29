
import { cn } from '@/lib/utils';

const CalendarEmbed = () => {
  return (
    <div className={cn("max-w-3xl mx-auto glass-card p-6")}>
      <iframe
        src="https://cal.com/roshan-kumar-n0ihkp/soraaya-ai-book-demo-call"
        className="w-full min-h-[600px] border-0"
        frameBorder="0"
        data-cal-link="roshan-kumar-n0ihkp/soraaya-ai-book-demo-call"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default CalendarEmbed;
