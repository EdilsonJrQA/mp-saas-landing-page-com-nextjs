import Image from "next/image";
import logo from "./assets/Logo.svg";
import womanimg from "./assets/woman.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, MenuIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto py-2 text-center pb-16 px-2 md:px-10">
        <nav
          className="flex gap-2 justify-between items-center py-4">
          <Image src={logo} alt="LogoSaaslivro" />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon className="w-6 md:hidden cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-5">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <a href="#funcionamento">Funcionamento</a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="#preco">Preço</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Button variant="br-white">Login</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="items-center gap-1 hidden md:flex">
            <Button variant="link" asChild>
              <a href="#funcionamento">Funcionamento</a>
            </Button>

            <Button variant="link" asChild>
              <a href="#preco">Preço</a>
            </Button>

            <Button variant="br-white">Login</Button>
          </div>
        </nav>
        <h1 className="md:text-6xl text-4xl font-bold mt-8 md:mt-16">
          Simplifique Seus Estudos
        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>
        <form className="md:mt-16 mt-10">
          <div className="flex gap-2 justify-center">
            <Input placeholder="Coloque seu email"
              type="text"
              className="max-w-sm border-gray-300" />
            <Button>Assine Agora</Button>
          </div>
          <p className="text-muted-foreground text-xs mt-2">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </form>
      </section>
      <section id="funcionamento" className="bg-white md:py-16 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Como funciona?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            <Image
              src={womanimg}
              alt="Mulher lendo um livro"
              className="max-w-sm" />

            <ul className="text-xl md:text-2xl text-muted-foreground space-y-6">
              <li className="flex gap-2 items-center justify-between gap-6">
                Acesso a 1 ebook por mês
                <Check className="text-green-600" />
              </li>

              <li className="flex gap-2 items-center justify-between gap-6">
                Curadoria especial
                <Check className="text-green-600" />
              </li>

              <li className="flex gap-2 items-center justify-between gap-6">
                Cancele quando quiser
                <Check className="text-green-600" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="preco"className="md:py-16 py-8 text-center px-2">
        <h2 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">
          Preço Simples e Transparente
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. </p>
        <Card className="w-[350px] mx-auto text-left md:mt-12 mt-10">
          <CardHeader>
            <CardTitle>Plano Pro Premium VIP</CardTitle>
            <CardDescription>
              Tudo que você precisa para seus estudos
            </CardDescription>

          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-6 mt-4">R$29,90<span className="font-normal text-muted-foreground text-lg">/mês</span></p>
            <ul>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Acesse 1 ebook por mês</li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Curadoria especial</li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Acesso ilimitado</li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="w-4 text-green-600" />
                Cancele a qualquer momento</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="bg-white text-center py-16">
        <h2 className="md:text-6xl text-3xl font-bold mt-8 md:mt-16">
          Pronto Para Mudar Sua Vida?
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos
        </p>
        <Button className="mt-14 w-80 md:w-96">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-2">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
        <footer className="pt-16 border-t  border-gray-300 mt-16">
          <Image src={logo} alt="LogoSaaslivro" className="mx-auto" />
          <p className="text-muted-foreground">© 2026 LivroSaaS. Todos os direitos reservados.</p>
        </footer>

      </section>
    </main>
  );
}
