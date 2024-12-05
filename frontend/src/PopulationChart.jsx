import { BarChart, Bar, Tooltip, XAxis } from "recharts";

export default function PopulationChart({population}) {
  return (
    <BarChart data={population} width={600} height={300}>
        <Tooltip />
        <XAxis dataKey="year" />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

