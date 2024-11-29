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
      pros: ["Alta resistencia", "Gran capacidad de iniciar peleas"],
      cons: ["Fallo irreparable (te pueden castigar los errores)"],
    },
    {
      champion: "Annie",
      image: "/annie.webp",
      pros: ["Alto daño explosivo", "Mecánicas simples"],
      cons: ["Cero Movilidad", "Early Malo", "Altos Cooldowns"],
    },
    {
      champion: "Bard",
      image: "/bard.webp",
      pros: ["Gran capacidad para moverse por el mapa", "Buenas estadísticas"],
      cons: ["Fallo irreparable (te pueden castigar los errores)"],
    },
    {
      champion: "Blitzcrank",
      image: "/blitzcrank.webp",
      pros: ["Capacidad de hacer picks", "Gran capacidad para iniciar peleas"],
      cons: ["Fallo irreparable (te pueden castigar los errores)", "Altos Cooldowns"],
    },
    {
      champion: "Brand",
      image: "/brand.webp",
      pros: ["Alto daño", "Control de zonas"],
      cons: ["Poca probabilidad de carreo", "Poco peel", "Fallo irreparable (te pueden castigar los errores)"],
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
      cons: ["Difícil de wardeo"],
    },
    {
      champion: "Leona",
      image: "/leona.webp",
      pros: ["Alta resistencia", "Gran capacidad de iniciar peleas"],
      cons: ["Fallo irreparable (te pueden castigar los errores)"],
    },
    {
      champion: "Lulu",
      image: "/lulu.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Dificultad de wardeo"],
    },
    {
      champion: "Lux",
      image: "/lux.webp",
      pros: ["Alcance largo", "Daño explosivo"],
      cons: ["Baja movilidad", "Altos Cooldowns"],
    },
    {
      champion: "Malphite",
      image: "/malphite.webp",
      pros: ["Iniciación", "Gran capacidad de iniciar combates"],
      cons: ["Baja movilidad", "Fallo irreparable (te pueden castigar los errores)"],
    },
    {
      champion: "Morgana",
      image: "/morgana.webp",
      pros: ["Alta utilidad", "Control de zonas"],
      cons: ["Baja movilidad", "Altos Cooldowns"],
    },
    {
      champion: "Nami",
      image: "/nami.webp",
      pros: ["Curación", "Gran peel"],
      cons: ["Poca probabilidad de carreo", "Mal juego temprano", "Altos Cooldonws", "Dificultad de wardeo", "Pocas Estadísticas"],
    },
    {
      champion: "Nautilus",
      image: "/nautilus.webp",
      pros: ["Alta resistencia", "Gran capacidad de iniciar peleas"],
      cons: ["Fallo irreparable (te pueden castigar los errores)", "Altos Cooldowns"],
    },
    {
      champion: "Pantheon",
      image: "/pantheon.webp",
      pros: ["Alto daño", "Alta capacidad de iniciar peleas"],
      cons: ["Poca probabilidad de carreo", "Altos tiempos de reutilización", "Fallo irreparable (te pueden castigar los errores)", "Late malo"],
    },
    {
      champion: "Pyke",
      image: "/pyke.webp",
      pros: ["Gran capacidad de snowball", "Presión de asesinato"],
      cons: ["Poco peel", "Fallo irreparable (te pueden castigar los errores)", "Difícil recuperación"],
    },
    {
      champion: "Rakan",
      image: "/rakan.webp",
      pros: ["Iniciación", "Alta movilidad"],
      cons: ["Fallo irreparable (te pueden castigar los errores)"],
    },
    {
      champion: "Senna",
      image: "/senna.webp",
      pros: ["Escalado fuerte", "Alto daño"],
      cons: ["Baja movilidad", "Early Malo" ,"Altos cooldowns", "Pocas estadísticas"],
    },
    {
      champion: "Seraphine",
      image: "/seraphine.webp",
      pros: ["Alta utilidad", "Daño en área"],
      cons: ["Baja movilidad", "Altos cooldowns", "Mal early game"],
    },
    {
      champion: "Sett",
      image: "/sett.webp",
      pros: ["Alta resistencia", "Gran capacidad de buscar una play"],
      cons: ["Baja movilidad", "Altos cooldowns"],
    },
    {
      champion: "Sona",
      image: "/sona.webp",
      pros: ["Escalado fuerte", "Alta utilidad"],
      cons: ["Baja movilidad", "Poca probabilidad de carreo", "Early Malo"],
    },
    {
      champion: "Soraka",
      image: "/soraka.webp",
      pros: ["Curación", "Escalado fuerte"],
      cons: ["Baja movilidad", "Poca probabilidad de carreo", "Altos cooldowns"],
    },
    {
      champion: "Swain",
      image: "/swain.webp",
      pros: ["Sustain", "Control de zonas"],
      cons: ["Baja movilidad", "Mal early game"],
    },
    {
      champion: "Tahm Kench",
      image: "/tahm.webp",
      pros: ["Alta resistencia", "Alta utilidad"],
      cons: ["Poca probabilidad de carreo","Fallo irreparable (te pueden castigar los errores)" ,"Altos tiempos de reutilización", "Difícil recuperación"],
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
      cons: ["Fallo irreparable (te pueden castigar los errores)", "Difícil recuperación"],
    },
    {
      champion: "Velkoz",
      image: "/velkoz.webp",
      pros: ["Daño explosivo", "Alcance largo"],
      cons: ["Baja movilidad", "Altos Cooldowns", "Pocas Estadísticas"],
    },
    {
      champion: "Xerath",
      image: "/xerath.webp",
      pros: ["Daño explosivo", "Alcance largo"],
      cons: ["Baja movilidad", "Altos Cooldowns", "Pocas Estadísticas"],
    },
    {
      champion: "Yuumi",
      image: "/yuumi.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Impacto bajo al inicio", "Altos tiempos de reutilización", "Early Malo", "Pocas Estadísticas"],
    },
    {
      champion: "Zyra",
      image: "/zyra.webp",
      pros: ["Control de zonas", "Alto daño"],
      cons: ["Baja movilidad", "Difícil recuperación", "Pocas Estadísticas"],
    },
    {
      champion: "Zilean",
      image: "/zilean.webp",
      pros: ["Alta utilidad", "Escalado fuerte"],
      cons: ["Poca probabilidad de carreo", "Altos tiempos de reutilización", "Mal early game"],
    },
  ];
  