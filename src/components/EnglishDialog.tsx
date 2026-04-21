import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import hamster from "@/assets/hamster-peek.png";

export function EnglishDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl border-2">
        <div className="flex justify-center -mt-16 mb-2">
          <div className="rounded-full bg-card p-2 ring-4 ring-background shadow-xl">
            <img src={hamster} alt="" width={96} height={96} className="h-24 w-24" />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl">Hi! 👋 Welcome to scooby.boo</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-3 pt-2 text-center text-base text-foreground/80">
              <p>
                I'm <span className="font-bold text-foreground">Krzyś</span> — a vibe-coder making
                useful webapps, Python scripts and Discord bots.
              </p>
              <p>
                Heads up: I mainly speak <span className="font-bold text-foreground">Polish</span>,
                and most of my projects are in Polish too. Feel free to poke around anyway —
                Google Translate is your friend! 🐹
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
