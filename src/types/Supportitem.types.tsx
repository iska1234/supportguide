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
      "Canto de Sangre: Mejora de daño prolongado en un persona.",
    whenToBuild: "Cuando juegas un soporte agresivo como Pyke o Senna. (En ciertos casos sirve en los soportes de engage, pero es solo si a tu equipo le falta daño en mid game y esperan al late)",
    advantage: "Posibilidad de acabar más rápido con un enemigo",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Teje Sueños",
    image: "../dreamMaker.webp",
    description:
      "Creador de Sueños: Proporciona un escudo en área basado en habilidades canalizadas.",
    whenToBuild: "Contra equipos con daño explosivo o asesinos, ya sea contra magicos o de daño fisico, optimo para cualquier soporte enchanter",
    advantage: "Aumenta la fuerza de tus escudos en peleas",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Oposición Celestial",
    image: "../celestialOpposition.webp",
    description:
      "Oposición Celestial: El item te permite reducir el daño que venga en un lapso de 2 segundos un 35% si eres melee y un 25% si eres rango",
    whenToBuild: "Ideal para los campeones que buscan iniciar y salir ilesos despues de haber gastado sus habilidades, tambien puede optarse por buildearselo en enchanters pero son en casos donde sientas que tu eres el focus principal",
    advantage: "Te da 2 segundos más de vida (igual te terminarán matando)",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Trineo del Solsticio",
    image: "../solsticeSleigh.webp",
    description:
      "Trineo del Solsticio: Aumenta la movilidad del equipo al agruparse",
    whenToBuild: "Cuando necesitas iniciar o escapar rápidamente de peleas grupales, tambien sirve si quieren jugar al front to back teniendo personajes de los que necesites tirar una habilidad y moverte hacia atras con tu adc",
    advantage: "Ofrece movilidad para kiteos o engages efectivos",
    category:"Mejoras Iniciales de Support"
  },
  {
    name:"Pua Real de Zazzak",
    image: "../zazzaksRealmspike.webp",
    description:
      "Púa Real de Zazzak: Inflige daño magico adicional al momento de tirar una habilidad",
    whenToBuild: "Cuando juegas un mago o un personaje que constantemenete esté poqueando al enemigo",
    advantage: "Control de zonas y desgaste antes de una pelea grupal",
    category:"Mejoras Iniciales de Support"
  },
  // Soportes utilitarios/enchanters
  {
    name:"Bencición de Mikael",
    image: "../mikaelsBlessing.webp",
    description:
      "Bendición de Mikael: Limpia efectos de control de masas (CC) y restaura un poco de vida",
    whenToBuild: "Cuando el equipo enemigo tiene control de masas como iniciadores, ya sean ashe, lissandra, leona, entre otros",
    advantage: "Elimina CC clave para proteger a tus aliados más importantes",
    category:"Items de Enchanters"
  },
  {
    name:"Renovador de Piedra Lunar",
    image: "../moonstoneRenewer.webp",
    description:
      "Renovador de Piedra Lunar: Excelente para curación en peleas prolongadas; ideal en composiciones de equipo que buscan sostenibilidad.",
    whenToBuild: "Es el mejor item anti pokers, este item da bastante sustain y beneficia a tu team con las auras adicionalees, por ejemplo: Supongamos eres una lulu con moonstone + pebetero, al activar el moonstone puede que 2 de tus aliados sean beneficiados, 3 + el eary y asi promueves tus buffos en parte para todo el team ene general",
    advantage: "Curaciones continuas que aumentan tu utilidad en peleas grupales",
    category:"Items de Enchanters"
  },
  {
    name:"Canto de guerra de Shurelya",
    image: "../shurelyasBattlesong.webp",
    description:
      "Canto de guerra de Shurelya: Te da una breve movilidad en area al activarlo",
    whenToBuild: "Cuando tu equipo necesita salir/entrar en un momento clave, ejemplos: iniciacion de rakan, R de kled, R de sivir, etc. Es muy util cuando tienes compañeros que inicien, como lillia por ejemplo",
    advantage: "Proporciona velocidad adicional para engages o disengages estratégicos, te permite resposicionarte en caso de un error",
    category:"Items de Enchanters"
  },
  {
    name:"Redención",
    image: "../redemption.webp",
    description:
      "Redención: Cura en peleas grupales y mejora la resistencia de tu equipo",
    whenToBuild: "En equipos que dependen de curaciones en peleas largas y si hay alguna habilidad en AOE que los pueda fastidiar, ejemplos: R de karthus, R de ziggs, R de malphine, etc",
    advantage: "Curación en área que puede cambiar el curso de una pelea",
    category:"Items de Enchanters"
  },
  {
    name:"Pebetero Ardiente",
    image: "../ardent.webp",
    description:
      "Censer Ardiente: Aumenta la velocidad de ataque y potencia el daño de ataque básico MAGICO de tus aliados al aplicar curaciones o escudos",
    whenToBuild: "Cuando tienes un ADC que depende de ataques básicos para infligir daño y adicionalmente cuando notes que el equipo enemigo se está haciendo armadura, este item es un antitabis por ejemplo, elimina la pasiva indirectamente de la tabi por el buff de daño mágico en los autoataques",
    advantage: "Sinergia fuerte con campeones de curación y escudos en peleas prolongadas",
    category:"Items de Enchanters"
  },
  {
    name:"Báculo de Aguas Fluyente",
    image: "../staffOfFlowingWater.webp",
    description:
      "Báculo de Aguas Fluyentes: Aumenta el poder de habilidad de los aliados al aplicar curaciones o escudos",
    whenToBuild: "Ideal para personajes con habilidades de AP",
    advantage: "Potencia el daño AP de los aliados",
    category:"items de Enchanters"
  },
  {
    name:"Ecos de Helia",
    image: "../echoesOfHelia.webp",
    description:
      "Ecos de Helia: Inflige daño en área a enemigos cercanos y cura a aliados cuando aplicas curaciones o escudos",
    whenToBuild: "Este item es como la moonstone pero invertida, en lugar de dar buffos grupales puedes inflingir pasivas de tus items a los enemigos, por ejemplo: cuando tengas la piedra anticuraciones y tienes el item, si tu das un escudo a tu aliado se aplicara un daño como de 30 sobre un enemigo PERO se aplicara el buff de tu antiheal, yo siempre me hago esto cuando voy contra healers",
    advantage: "Ofrece daño adicional y curación simultáneamente, ideal para peleas largas",
    category:"Items de Enchanters"
  },
  {
    name:"Mandato Imperial",
    image: "../imperialMandate.webp",
    description:
      "Mandato Imperial: Marca a los enemigos al aplicar control de masas y ralentizaciones, infligiendo daño adicional cuando son atacados",
    whenToBuild: "Con soportes que tienen habilidades de control de masas consistentes y daño AP, mejor ejemplo de esto es Nami, porque cuando la E tiene el slow encima aplica para los demás, tambien sirve para intentar kitear al enemigo porque al hacerte mandato otorgas un pequeño buf de movimiento a tu campeon cuando explotan la marca ",
    advantage: "Sinergia fuerte con habilidades de iniciación o ralentización",
    category:"Items de Enchanters"
  },
  {
    name:"Corazón del Alba",
    image: "../dawncore.webp",
    description:
      "Corazón del Alba: Aumenta la efectividad de tus habilidades de soporte al mejorar la curación y los escudos aplicados.",
    whenToBuild: "SOLO buildartelo de tercer item o cuando tengas MUCHO oro como 2do item, este item es como el rabaddon, mientras mas % de curaciones adicionales tengas más te va a servir.",
    advantage: "Buffea demasiado tus escudos (unicamente cuando ya tienes objetos comprados)",
    category:"Items de Enchanters"
  },

  // Soportes tanques/iniciadores
  {
    name:"Reliacrio de los Solari de Hierro",
    image: "../solaris.webp",
    description:
      "Reliacrio de los Solari de Hierro: Proporciona un escudo en área para tu equipo",
    whenToBuild: "Cuando necesitas mitigar daño en peleas grupales, sobre todo daños en area",
    advantage: "Ofrece un escudo instantáneo que puede salvar a varios aliados",
    category: "Items de tanques"
  },
  {
    name:"Corazón Congelado",
    image: "../frozenHeart.webp",
    description:
      "Corazón Congelado: Reduce la velocidad de ataque de los enemigos cercanos.",
    whenToBuild: "Contra equipos con campeones dependientes de ataques básicos como Jinx o Vayne (puedes buildeartelo con un enchanter si ellos tienen personajes que van a estar a melee tuyo dando básicos como jax, yi, shaco, yasuo, yone) O cuando son full AD",
    advantage: "Reducción significativa de daño sostenido de los carrys enemigos",
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
    whenToBuild: "En composiciones donde la movilidad y la sostenibilidad son esenciales, excelente con bard y con rakan (creo que son los unicos porque no siento que vaya bien con otros personajes)",
    advantage: "Mejora significativamente la velocidad y las capacidades de soporte",
    category: "Items de tanques"
  },
  {
    name:"Máscara Abisal",
    image: "../abyssalMask.webp",
    description:
      "Máscara Abisal: Reduce la resistencia mágica de los enemigos cercanos, potenciando el daño mágico en el área",
    whenToBuild: "Este item es el item más roto para los tanques, reduce bastante la MR enemiga permitiendole a tu mago tener un equivalente a un báculo del vacio de penetración mágica",
    advantage: "Excelente herramienta para amplificar el daño mágico en peleas grupales",
    category: "Items de tanques"
  },


  // Soportes de daño/magos
  {
    name:"Angustia de Liandrys",
    image: "../liandrys.webp",
    description:
      "Liandry, Angustia: Inflige daño prolongado a enemigos con alta vida.",
    whenToBuild: "Contra tanques o equipos con campeones con mucha vida máxima",
    advantage: "Daño persistente que escala en peleas prolongadas.",
    category:"Items de Magos"
  },
  {
    name:"Cetro de Cristal de Rylai",
    image: "../rilay.webp",
    description:
      "Cetro de Cristal de Rylai: Ralentiza a los enemigos, útil para control de masas en peleas",
    whenToBuild: "En composiciones donde el control de zonas es clave y cuando necesites aportar con algo de slow en caso no tenerlo",
    advantage: "Ralentización constante que mejora el kiteo y control en peleas",
    category:"Items de Magos"
  },
  {
    name:"Morellonomicon",
    image: "../morellonomicon.webp",
    description:
      "Cómputo de Sombras: Reduce curaciones enemigas y aumenta tu daño",
    whenToBuild: "Casos super especiales, puedes buildeartelo con un mago o con enchanter en caso el enemigo tenga healers",
    advantage: "Anti-curaciones y potencia de daño en área",
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
      <p className="font-primaryRegular text-justify">
        {row.original.description}
      </p>
    ),
  },
  {
    accessorKey: "advantage",
    header: "Ventajas",
    cell: ({ row }) => (
      <p className="font-primaryRegular text-justify">
        {row.original.advantage}
      </p>
    ),
  },
  {
    accessorKey: "whenToBuild",
    header: "Cuándo Buildearlo",
    cell: ({ row }) => (
      <p className=" font-primaryRegular text-justify">
        {row.original.whenToBuild}
      </p>
    ),
  },

];
