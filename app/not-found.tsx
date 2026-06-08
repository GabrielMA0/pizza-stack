import {Button} from "@/shared/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2.5">
      <h1 className="text-(--primary) font-poppins text-[128px] font-black">404</h1>

      <h2 className="font-black text-[60px] text-center max-w-118.75 font-poppins">Ops! Página não encontrada</h2>

      <Button
        href="/"
        variant="primary"
      >
        Voltar para início
      </Button>
    </main>
  );
}