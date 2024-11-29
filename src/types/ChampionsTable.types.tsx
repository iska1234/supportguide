import TooltipComponent from "@/components/genericTooltip";
import { ColumnDef } from "@tanstack/react-table";

export type TransformedChampionType = {
  type: string;
  champions: string[];
};
export const columns: ColumnDef<TransformedChampionType>[] = [
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "champions",
    header: "Campeones",
    cell: ({ row }) => {
      const champions = row.original.champions;
      return (
        <div className="flex flex-wrap gap-2">
          {champions.map((champion) => (
            <TooltipComponent
              content={
                <span
                  className={`px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}
                >
                  {champion}
                </span>
              }
              triggerContent={
                <img
                  key={champion}
                  src={`../${champion.toLowerCase()}.webp`}
                  alt={champion}
                  className="h-20 w-20"
                />
              }
              contentClass="bg-purple-600 text-white"
              triggerClass=""
              side="bottom"
              delayDuration={100}
            />
          ))}
        </div>
      );
    },
  },
];

export const championsData: TransformedChampionType[] = [
  {
    type: "Engage",
    champions: [
      "Leona",
      "Rakan",
      "Alistar",
      "Nautilus",
      "Rell",
      "Maokai",
      "Pyke",
      "Thresh",
      "Tahm",
      "Yuumi",
      "Nami",
    ],
  },
  {
    type: "Disengage/Peel",
    champions: [
      "Janna",
      "Braum",
      "Taric",
      "Renata",
      "Thresh",
      "Alistar",
      "Tahm",
      "Maokai",
      "Rell",
      "Nami",
      "Lulu",
      "Bard",
      "Sona",
      "Milio",
    ],
  },
  {
    type: "Poke",
    champions: [
      "Brand",
      "Xerath",
      "Lux",
      "Velkoz",
      "Karma",
      "Seraphine",
      "Zyra",
      "Senna",
      "Soraka",
    ],
  },
  {
    type: "Mitigation",
    champions: [
      "Lulu",
      "Janna",
      "Braum",
      "Morgana",
      "Yuumi",
      "Sona",
      "Karma",
      "Soraka",
      "Rakan",
      "Lux",
    ],
  },
  {
    type: "Catch",
    champions: [
      "Blitzcrank",
      "Morgana",
      "Bard",
      "Pyke",
      "Thresh",
      "Nautilus",
      "Seraphine",
      "Swain",
      "Zyra",
      "Lux",
      "Nami",
      "Maokai",
      "Janna",
    ],
  },
  {
    type: "Sustain",
    champions: [
      "Soraka",
      "Sona",
      "Yuumi",
      "Nami",
      "Soraka",
      "Senna",
      "Janna",
      "Alistar",
      "Taric",
      "Seraphine",
      "Milio",
    ],
  },
  {
    type: "Enchant",
    champions: [
      "Sona",
      "Lulu",
      "Yuumi",
      "Nami",
      "Karma",
      "Janna",
      "Zilean",
      "Renata",
      "Taric",
      "Soraka",
      "Milio",
    ],
  },
  {
    type: "Tankiness",
    champions: [
      "Alistar",
      "Leona",
      "Tahm",
      "Braum",
      "Taric",
      "Maokai",
      "Rell",
      "Blitzcrank",
      "Nautilus",
    ],
  },
  {
    type: "Zoning",
    champions: [
      "Zilean",
      "Zyra",
      "VelKoz",
      "Renata",
      "Maokai",
      "Bard",
      "Lux",
      "Swain",
      "Yuumi",
      "Nami",
    ],
  },
  {
    type: "Scaling",
    champions: [
      "Sona",
      "Senna",
      "Yuumi",
      "Janna",
      "Lulu",
      "Seraphine",
      "Bard",
      "Zilean",
      "Maokai",
      "Soraka",
      "Taric",
      "Alistar",
      "Milio",
    ],
  },
  {
    type: "Skill Ceiling",
    champions: ["Bard", "Thresh", "Janna", "Xerath", "Velkoz"],
  },
];
