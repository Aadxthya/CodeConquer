import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

import { useUserRole } from "@/hooks/useUserRole";

export default function Home() {
  const { isInterviewer, isCandidate } = useUserRole();

  const handleQuickAction = (title: string) => {
    // Implement your quick action logic here based on the title
    console.log(`Quick action clicked: ${title}`);
  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* WELCOME SECTION */}
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        {/* Add your welcome content here */}
        Welcome! {/* Placeholder */}
      </div>

      {isInterviewer ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action) => (
            <ActionCard
              key={action.title}
              action={action}
              onClick={() => handleQuickAction(action.title)}
            />
          ))}
        </div>
      ) : null} {/* Conditionally render based on interviewer role */}

      {/* Add similar conditional rendering for candidates if needed */}
      {/* {isCandidate ? ( ... ) : null} */}
    </div>
  );
}

// Placeholder for QUICK_ACTIONS data (replace with your actual data)
const QUICK_ACTIONS = [
  { title: "Schedule Interview", description: "Schedule an interview with a candidate." },
  { title: "View Applications", description: "View submitted applications." },
  { title: "Evaluate Candidate", description: "Evaluate a candidate's performance." },
  // ... more actions
];

// Placeholder for the ActionCard component (replace with your actual component)
interface Action {
  title: string;
  description: string;
}

const ActionCard = ({ action, onClick }: { action: Action; onClick: () => void }) => (
  <div className="border rounded p-4 cursor-pointer" onClick={onClick}>
    <h3>{action.title}</h3>
    <p>{action.description}</p>
  </div>
);