import { ColumnDef } from "@tanstack/react-table";

export type ChampionData = {
    image: string;
    pros: string[];
    cons: string[];
  };
  
  export const columnsPros: ColumnDef<ChampionData>[] = [
    {
      accessorKey: "image",
      header: "Campeón",
      cell: ({ row }) => (
        <img
          src={row.original.image}
          alt="Champion"
          className="w-16 h-16 object-contain mx-auto"
        />
      ),
    },
    {
      accessorKey: "pros",
      header: "Pros",
      cell: ({ row }) => (
        <ul className="list-none pl-5 font-primaryRegular">
          {row.original.pros.map((pro, index) => (
            <li key={index} className="text-green-600">
              {pro}
            </li>
          ))}
        </ul>
      ),
    },
    {
      accessorKey: "cons",
      header: "Contras",
      cell: ({ row }) => (
        <ul className="list-none pl-5 font-primaryRegular">
          {row.original.cons.map((con, index) => (
            <li key={index} className="text-red-600">
              {con}
            </li>
          ))}
        </ul>
      ),
    },
    
  ];

  export const championsDataPros = [
    {
      champion: "Alistar",
      image: "/alistar.webp",
      pros: ["Alta resistencia", "Gran capacidad de iniciar combates"],
      cons: ["Baja movilidad", "Errores irrecuperables"],
    },
    {
      champion: "Annie",
      image: "/annie.webp",
      pros: ["Alto daño explosivo", "Mecánicas simples"],
      cons: ["Baja movilidad", "Mal juego temprano", "Altos tiempos de reutilización"],
    },
    {
      champion: "Bard",
      image: "/bard.webp",
      pros: ["Gran capacidad para moverse por el mapa", "Hacer jugadas impactantes"],
      cons: ["Errores irrecuperables"],
    },
    {
      champion: "Blitzcrank",
      image: "/blitzcrank.webp",
      pros: ["Capacidad de pickeo", "Gran capacidad para iniciar combates"],
      cons: ["Errores irrecuperables"],
    },
    {
      champion: "Brand",
      image: "/brand.webp",
      pros: ["Alto daño", "Control de zonas"],
      cons: ["Poca probabilidad de carreo", "Poco peel", "Errores irrecuperables"],
    },
    {
      champion: "Braum",
      image: "/braum.webp",
      pros: ["Juego defensivo fuerte", "Alta resistencia"],
      cons: ["Poca probabilidad de carreo"],
    },
    {
      champion: "Janna",
      image: "/janna.webp",
      pros: ["Gran peel", "Alta movilidad"],
      cons: ["Poco daño"],
    },
    {
      champion: "Karma",
      image: "/karma.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Difícil recuperación"],
    },
    {
      champion: "Leona",
      image: "/leona.webp",
      pros: ["Alta resistencia", "Gran capacidad de iniciar combates"],
      cons: [],
    },
    {
      champion: "Lulu",
      image: "/lulu.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Poca probabilidad de carreo"],
    },
    {
      champion: "Lux",
      image: "/lux.webp",
      pros: ["Alcance largo", "Daño explosivo"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Malphite",
      image: "/malphite.webp",
      pros: ["Iniciación", "Gran capacidad de iniciar combates"],
      cons: ["Baja movilidad"],
    },
    {
      champion: "Morgana",
      image: "/morgana.webp",
      pros: ["Alta utilidad", "Control de zonas"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Nami",
      image: "/nami.webp",
      pros: ["Curación", "Gran peel"],
      cons: ["Poca probabilidad de carreo", "Mal juego temprano", "Altos tiempos de reutilización"],
    },
    {
      champion: "Nautilus",
      image: "/nautilus.webp",
      pros: ["Alta resistencia", "Gran capacidad de iniciar combates"],
      cons: ["Errores irrecuperables", "Altos tiempos de reutilización"],
    },
    {
      champion: "Pantheon",
      image: "/pantheon.webp",
      pros: ["Alto daño", "Alta capacidad de iniciar combates"],
      cons: ["Poca probabilidad de carreo", "Altos tiempos de reutilización", "Errores irrecuperables"],
    },
    {
      champion: "Pyke",
      image: "/pyke.webp",
      pros: ["Gran capacidad de snowball", "Presión de asesinato"],
      cons: ["Poco peel", "Errores irrecuperables", "Difícil recuperación"],
    },
    {
      champion: "Rakan",
      image: "/rakan.webp",
      pros: ["Iniciación", "Alta movilidad"],
      cons: ["Poco peel"],
    },
    {
      champion: "Senna",
      image: "/senna.webp",
      pros: ["Escalado fuerte", "Alto daño"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Seraphine",
      image: "/seraphine.webp",
      pros: ["Alta utilidad", "Daño en área"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización", "Mal juego temprano"],
    },
    {
      champion: "Sett",
      image: "/sett.webp",
      pros: ["Alta resistencia", "Gran capacidad para hacer jugadas"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Sona",
      image: "/sona.webp",
      pros: ["Escalado fuerte", "Alta utilidad"],
      cons: ["Baja movilidad", "Poca probabilidad de carreo", "Altos tiempos de reutilización"],
    },
    {
      champion: "Soraka",
      image: "/soraka.webp",
      pros: ["Curación", "Escalado fuerte"],
      cons: ["Baja movilidad", "Poca probabilidad de carreo", "Altos tiempos de reutilización"],
    },
    {
      champion: "Swain",
      image: "/swain.webp",
      pros: ["Sustain", "Control de zonas"],
      cons: ["Baja movilidad", "Mal juego temprano"],
    },
    {
      champion: "Tahm Kench",
      image: "/tahm.webp",
      pros: ["Alta resistencia", "Alta utilidad"],
      cons: ["Poca probabilidad de carreo", "Altos tiempos de reutilización", "Difícil recuperación"],
    },
    {
      champion: "Taric",
      image: "/taric.webp",
      pros: ["Alta utilidad", "Alta resistencia"],
      cons: ["Baja movilidad", "Mal juego temprano", "Difícil recuperación"],
    },
    {
      champion: "Thresh",
      image: "/thresh.webp",
      pros: ["Capacidad para hacer jugadas", "Alta utilidad"],
      cons: ["Errores irrecuperables", "Difícil recuperación"],
    },
    {
      champion: "Velkoz",
      image: "/velkoz.webp",
      pros: ["Daño explosivo", "Alcance largo"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Xerath",
      image: "/xerath.webp",
      pros: ["Daño explosivo", "Alcance largo"],
      cons: ["Baja movilidad", "Altos tiempos de reutilización"],
    },
    {
      champion: "Yuumi",
      image: "/yuumi.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Impacto bajo al inicio", "Altos tiempos de reutilización"],
    },
    {
      champion: "Zyra",
      image: "/zyra.webp",
      pros: ["Control de zonas", "Alto daño"],
      cons: ["Baja movilidad", "Difícil recuperación"],
    },
    {
      champion: "Zilean",
      image: "/zilean.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Poca probabilidad de carreo", "Altos tiempos de reutilización"],
    },
  ];
  