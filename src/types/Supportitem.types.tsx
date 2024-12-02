export type SupportItem = {
  image: string;
  description: string;
};

export const supportItemsData: SupportItem[] = [
  // Objetos Iniciales (Starters)
  {
    image: "/items/relic_shield.png",
    description:
      "Hoja de Roble Antigua: Para soportes utilitarios o enchanters como Lulu, Janna y Nami. Proporciona oro cuando atacas a campeones o aliados reciben curación/escudos.",
  },
  {
    image: "/items/spellthiefs_edge.png",
    description:
      "Filo del Robo Hechizos: Para soportes con daño y hostigamiento constante como Brand, Zyra y Karma. Genera oro al infligir daño a campeones enemigos.",
  },
  {
    image: "/items/targons_buckler.png",
    description:
      "Guardián Relicario: Ideal para soportes tanques como Leona, Thresh y Braum. Permite ejecutar súbditos y compartir oro con el ADC.",
  },

  // Soportes utilitarios/enchanters
  {
    image: "/items/chemtech_putrifier.png",
    description:
      "Cáliz de la Eternidad (Putrificador Quimtech): Reduce la curación enemiga al aplicar curaciones o escudos.",
  },
  {
    image: "/items/mikaels_blessing.png",
    description:
      "Bendición de Mikael: Limpia efectos de control de masas (CC) y restaura vida.",
  },
  {
    image: "/items/moonstone_renewer.png",
    description:
      "Renovador de Piedra Lunar: Excelente para curación en peleas prolongadas; ideal en composiciones de equipo que buscan sostenibilidad.",
  },
  {
    image: "/items/shurelyas_battlesong.png",
    description:
      "Velo de la Doncella: Proporciona un escudo útil para proteger aliados clave.",
  },
  {
    image: "/items/redemption.png",
    description:
      "Redención: Cura en peleas grupales y mejora la resistencia de tu equipo.",
  },

  // Soportes tanques/iniciadores
  {
    image: "/items/locket_of_the_iron_solari.png",
    description:
      "Medallón de los Solari de Hierro: Proporciona un escudo en área para tu equipo.",
  },
  {
    image: "/items/frozen_heart.png",
    description:
      "Corazón Congelado: Reduce la velocidad de ataque de los enemigos cercanos.",
  },
  {
    image: "/items/sunfire_aegis.png",
    description:
      "Égida de Fuego Solar: Daño en área basado en vida máxima y útil para empujar oleadas.",
  },
  {
    image: "/items/turbo_chemtank.png",
    description:
      "Quimiotanque Turbo: Ayuda a iniciar peleas con un impulso de velocidad.",
  },

  // Soportes de daño/magos
  {
    image: "/items/liandrys_anguish.png",
    description:
      "Liandry, Angustia: Inflige daño prolongado a enemigos con alta vida.",
  },
  {
    image: "/items/zhonyas_hourglass.png",
    description:
      "Reloj de Arena de Zhonya: Supervivencia en momentos críticos durante peleas grupales.",
  },
  {
    image: "/items/rylais_crystal_scepter.png",
    description:
      "Cetro de Cristal de Rylai: Ralentiza a los enemigos, útil para control de masas en peleas.",
  },
  {
    image: "/items/morellonomicon.png",
    description:
      "Cómputo de Sombras: Reduce curaciones enemigas y aumenta tu daño.",
  },

  // Accesorios y Pinks
  {
    image: "/items/warding_totem.png",
    description:
      "Baratija amarilla (Tótem Centinela): Úsala al principio para controlar la visión del mapa.",
  },
  {
    image: "/items/sweeping_lens.png",
    description:
      "Baratija roja (Lente Reveladora): Ideal para limpiar visión enemiga, especialmente si planeas ganks.",
  },
  {
    image: "/items/control_ward.png",
    description:
      "Centinela de control: Asegúrate de tener siempre uno en el mapa en objetivos clave como dragones o Nashor.",
  },
];


import { ColumnDef } from "@tanstack/react-table";

export const supportItemsColumns: ColumnDef<SupportItem>[] = [
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt="Objeto"
        className="w-16 h-16 object-contain mx-auto"
      />
    ),
  },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: ({ row }) => (
      <p className="text-gray-700 text-justify font-medium">
        {row.original.description}
      </p>
    ),
  },
];
