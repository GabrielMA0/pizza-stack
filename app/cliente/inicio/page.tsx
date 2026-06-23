'use client'

import Image from "next/image";
import Link from "next/link";
import {useState} from "react"

import { ProductCard, Button, Category} from "@/shared/components/ui";

const categories = [
  "pizzas",
  "bebidas",
  "beirutes",
  "esfihas",
];

const pizzas = [
  {
    name: "Peperoni",
    price: "R$ 40,00",
    description: "tomate, mussarela, manjericão",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ2TpJu0xNrAKz-OiEKaFctg6nVaAYedxHVn5iNXlKCfTRLDOMFDZBadL0FK41QzT78qQtFXxhZtH4KWFp_crsdWtR0vTPKl-6kmnWPV0y6NVkcIie22yDBH3_-d0EQhduAhlhpf83yVSvNcdE7z05qwd9s8tJjuuELr5j1hHyvu6X5nKiNFKHlNwkCoH5_UxPdkFS5I8MWV41hZixdJYI43T_553x5mlzzoH3ngbJnNRUoBK-5-UjnVSFcL1fH2dKvedo2Le_HA",
  },
  {
    name: "Peperoni Especial",
    price: "R$ 40,00",
    description: "tomate, mussarela, manjericão",
    tag: "Mais vendido",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoPKveMzsJbW1DBo2HmquENoAAtTtkuV8KDtLnVSb_H-DQqmX8iJ0bx_EmIJZ7SOcvLTlGMmsaKMNmcZAdNVrOnbnIkdh8OrcBoT3wTYW4F5Q-rmTr651GOAxtIu5xC7E_qn2TLrshOWfV3snhfm8xx-uEZ23W2kAlBsdGn42tGqGTIWsEY-vh1tpoznkfVu--G6sivPzL5QfaXncc6HMBLviOiss6uroqssUtLLpnqewGlSRD6ZO6BMcVw6nzMYa5yi_S4DM4X0c",
  },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("pizzas")
  return (
    <div className="p-5 flex flex-col gap-5">
      <section className="relative overflow-hidden rounded-[20px] w-full h-100 shadow-lg">
        <img
          alt="banner"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSohPBI14NWgCpGnBlmLOnDiCcxxZQadhcFB3HPdZeDgohiAebtjDO-WC035c5mxjpiWcYqZJz-sNYBZk8yGRq0hwudLBra_8gildn4mB1kt20_c4r2VhVvnXlDu004ZN1nUzeh-hwQexrQmfUaw3DSJRiLSIcHE495vZGl5rbKTWTfelPwfXnK8VzQ7E2pF5DHsDqsykgfiPMOtRvFOJC7QQ4NqX2bPtiDrCTF3PjB_3y82fAUFZmok6AZgBb_Szupw3833cSCzk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1440}
          height={400}
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col p-6 text-white gap-2.5">
          <h2>Promoção Clássicas</h2>

          <p className="text-paragraph-2">Todas pizzas com 20% de desconto</p>

          <Button className="w-37.5">Conferir</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-4">Categorias</h2>

        <div className="flex gap-2.5 overflow-x-auto p-2.5">
          {categories.map((item, index) => (
            <Category key={index} name={item} selectedCategory={selectedCategory === item} index={index} onClick={() => setSelectedCategory(item)}/>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2>Pizzas Grandes</h2>

          <Link href="#" className="text-(--primary) text-small font-semibold underline">Ver tudo →</Link>
        </div>

        <div className="flex gap-5">
          {pizzas.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
