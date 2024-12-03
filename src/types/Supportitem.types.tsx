import { ColumnDef } from "@tanstack/react-table";

export type SupportItem = {
  name: string;
  image: string;
  description: string;
  whenToBuild: string;
  advantage: string;
  category: string;
};

export const supportItemsData: SupportItem[] = [

  // Nuevos objetos Iniciales
  {
    name:"Canción de Sangre",
    image: "../bloodsong.webp",
    description:
      "Canto de Sangre: Mejora de daño en áreas prolongadas y curación basada en el daño infligido.",
    whenToBuild: "Cuando juegas un soporte agresivo como Pyke o Senna.",
    advantage: "La curación y el daño en área te mantienen en peleas largas.",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Teje Sueños",
    image: "../dreamMaker.webp",
    description:
      "Creador de Sueños: Proporciona un escudo en área basado en habilidades canalizadas.",
    whenToBuild: "Contra equipos con daño explosivo o asesinos como Zed o Kha'Zix.",
    advantage: "El escudo protege a los carries vulnerables en peleas grupales.",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Oposición Celestial",
    image: "../celestialOpposition.webp",
    description:
      "Oposición Celestial: Otorga inmunidad a control de masas por un tiempo breve al activarse.",
    whenToBuild: "Si el equipo enemigo tiene campeones con mucho control de masas como Leona o Amumu.",
    advantage: "Proporciona una ventana para contrarrestar engages enemigos.",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Trineo del Solsticio",
    image: "../solsticeSleigh.webp",
    description:
      "Trineo del Solsticio: Aumenta la movilidad del equipo al agruparse.",
    whenToBuild: "Cuando necesitas iniciar o escapar rápidamente de peleas grupales.",
    advantage: "Ofrece movilidad para rotaciones o engages efectivos.",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Pua Real de Zazzak",
    image: "../zazzaksRealmspike.webp",
    description:
      "Púa Real de Zazzak: Inflige daño adicional y ralentiza enemigos con ataques básicos.",
    whenToBuild: "Cuando juegas soportes híbridos como Nautilus o Thresh.",
    advantage: "Control de zonas y presión adicional en peleas grupales.",
    category:"Mejoras Iniciales de Support"
  },
  // Soportes utilitarios/enchanters
  {
    name:"Bencición de Mikael",
    image: "../mikaelsBlessing.webp",
    description:
      "Bendición de Mikael: Limpia efectos de control de masas (CC) y restaura vida.",
    whenToBuild: "Cuando el equipo enemigo tiene control de masas pesado como Morgana o Leona.",
    advantage: "Elimina CC clave para proteger a tus aliados más importantes.",
    category:"Items de Enchanters"
  },
  {
    name:"Renovador de Piedra Lunar",
    image: "../moonstoneRenewer.webp",
    description:
      "Renovador de Piedra Lunar: Excelente para curación en peleas prolongadas; ideal en composiciones de equipo que buscan sostenibilidad.",
    whenToBuild: "En equipos que buscan peleas prolongadas y sostenibilidad.",
    advantage: "Curaciones continuas que aumentan tu utilidad en peleas grupales.",
    category:"Items de Enchanters"
  },
  {
    name:"Velo de la Doncella",
    image: "../shurelyasBattlesong.webp",
    description:
      "Velo de la Doncella: Proporciona un escudo útil para proteger aliados clave.",
    whenToBuild: "Cuando tu equipo necesita iniciaciones rápidas o escapatorias.",
    advantage: "Proporciona velocidad adicional para engages o disengages estratégicos.",
    category:"Items de Enchanters"
  },
  {
    name:"Redención",
    image: "../redemption.webp",
    description:
      "Redención: Cura en peleas grupales y mejora la resistencia de tu equipo.",
    whenToBuild: "En equipos que dependen de curaciones en peleas largas.",
    advantage: "Curación en área que puede cambiar el curso de una pelea.",
    category:"Items de Enchanters"
  },
  {
    name:"Pebetero Ardiente",
    image: "../ardent.webp",
    description:
      "Censer Ardiente: Aumenta la velocidad de ataque y potencia el daño de ataque básico de tus aliados al aplicar curaciones o escudos.",
    whenToBuild: "Cuando tienes un ADC que depende de ataques básicos para infligir daño.",
    advantage: "Sinergia fuerte con campeones de curación y escudos en peleas prolongadas.",
    category:"Items de Enchanters"
  },
  {
    name:"Báculo de Aguas Fluyente",
    image: "../staffOfFlowingWater.webp",
    description:
      "Báculo de Aguas Fluyentes: Aumenta la velocidad de habilidad y el poder de habilidad de los aliados al aplicar curaciones o escudos.",
    whenToBuild: "En equipos con magos o campeones dependientes de habilidades.",
    advantage: "Potencia las capacidades ofensivas de tus aliados en peleas grupales.",
    category:"items de Enchanters"
  },
  {
    name:"Ecos de Helia",
    image: "../echoesOfHelia.webp",
    description:
      "Ecos de Helia: Inflige daño en área a enemigos cercanos y cura a aliados cuando aplicas curaciones o escudos.",
    whenToBuild: "En composiciones que necesitan tanto daño en área como sostenibilidad.",
    advantage: "Ofrece daño adicional y curación simultáneamente, ideal para peleas largas.",
    category:"Items de Enchanters"
  },
  {
    name:"Mandato Imperial",
    image: "../imperialMandate.webp",
    description:
      "Mandato Imperial: Marca a los enemigos al aplicar control de masas, infligiendo daño adicional cuando son atacados.",
    whenToBuild: "Con soportes que tienen habilidades de control de masas consistentes.",
    advantage: "Sinergia fuerte con habilidades de iniciación o control en peleas.",
    category:"Items de Enchanters"
  },
  {
    name:"Corazón del Alba",
    image: "../dawncore.webp",
    description:
      "Corazón del Alba: Aumenta la efectividad de tus habilidades de soporte al mejorar la curación y los escudos aplicados.",
    whenToBuild: "Cuando buscas maximizar tus capacidades de curación o protección.",
    advantage: "Fortalece las herramientas de soporte en peleas grupales decisivas.",
    category:"Items de Enchanters"
  },

  // Soportes tanques/iniciadores
  {
    name:"Reliacrio de los Solari de Hierro",
    image: "../solaris.webp",
    description:
      "Medallón de los Solari de Hierro: Proporciona un escudo en área para tu equipo.",
    whenToBuild: "Cuando necesitas mitigar daño en peleas grupales.",
    advantage: "Ofrece un escudo instantáneo que puede salvar a varios aliados.",
    category: "Items de tanques"
  },
  {
    name:"Corazón Congelado",
    image: "../frozenHeart.webp",
    description:
      "Corazón Congelado: Reduce la velocidad de ataque de los enemigos cercanos.",
    whenToBuild: "Contra equipos con campeones dependientes de ataques básicos como Jinx o Vayne.",
    advantage: "Reducción significativa de daño sostenido de los carries enemigos.",
    category: "Items de tanques"
  },
  {
    name:"Convergencia de Zeke",
    image: "../zekesConvergence.webp",
    description:
      "Convergencia de Zeke: Vincula a un aliado, aumentando su daño al activar tu definitiva.",
    whenToBuild: "Cuando quieres potenciar el daño de un aliado clave en peleas grupales.",
    advantage: "Sinergia excelente con definitivas que inician peleas o controlan áreas.",
    category: "Items de tanques"
  },
  {
    name:"Sendero del Eco",
    image: "../trailblazer.webp",
    description:
      "Sendero del Eco: Aumenta tu velocidad de movimiento al acercarte a aliados y potencia tus habilidades de curación y escudos.",
    whenToBuild: "En composiciones donde la movilidad y la sostenibilidad son esenciales.",
    advantage: "Mejora significativamente la velocidad y las capacidades de soporte.",
    category: "Items de tanques"
  },
  {
    name:"Máscara Abisal",
    image: "../abyssalMask.webp",
    description:
      "Máscara Abisal: Reduce la resistencia mágica de los enemigos cercanos, potenciando el daño mágico en el área.",
    whenToBuild: "Cuando tu equipo tiene múltiples campeones que infligen daño mágico.",
    advantage: "Excelente herramienta para amplificar el daño mágico en peleas grupales.",
    category: "Items de tanques"
  },


  // Soportes de daño/magos
  {
    name:"Angustia de Liandrys",
    image: "../liandrys.webp",
    description:
      "Liandry, Angustia: Inflige daño prolongado a enemigos con alta vida.",
    whenToBuild: "Contra tanques o equipos con campeones con mucha vida máxima.",
    advantage: "Daño persistente que escala en peleas prolongadas.",
    category:"Items de Magos"
  },
  {
    name:"Cetro de Cristal de Rylai",
    image: "../rilay.webp",
    description:
      "Cetro de Cristal de Rylai: Ralentiza a los enemigos, útil para control de masas en peleas.",
    whenToBuild: "En composiciones donde el control de zonas es clave.",
    advantage: "Ralentización constante que mejora el kiteo y control en peleas.",
    category:"Items de Magos"
  },
  {
    name:"Morellonomicon",
    image: "../morellonomicon.webp",
    description:
      "Cómputo de Sombras: Reduce curaciones enemigas y aumenta tu daño.",
    whenToBuild: "Contra equipos con curación alta como Soraka o Vladimir.",
    advantage: "Anti-curaciones y potencia de daño en área.",
    category:"Items de Magos"
  },

];

export const columnsItems: ColumnDef<SupportItem>[] = [
  {
    accessorKey: "image",
    header: "Item",
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt={row.original.name}
        className="w-16 h-16 object-contain mx-auto"
      />
    ),
  },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: ({ row }) => (
      <p className="font-primaryRegular">
        {row.original.description}
      </p>
    ),
  },
  {
    accessorKey: "advantage",
    header: "Ventajas",
    cell: ({ row }) => (
      <p className="font-primaryRegular">
        {row.original.advantage}
      </p>
    ),
  },
  {
    accessorKey: "whenToBuild",
    header: "Cuándo Buildearlo",
    cell: ({ row }) => (
      <p className=" font-primaryRegular">
        {row.original.whenToBuild}
      </p>
    ),
  },

];
