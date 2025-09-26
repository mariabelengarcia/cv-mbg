export default function Individual({ experience }) {
  const periodEnd = (!experience.periodEnd || experience.periodEnd === 2025) 
    ? "Presente" 
    : experience.periodEnd;

  return (
    <tr>
      <td>{experience.companyName}</td>
      <td>{experience.position}</td>
      <td>{experience.periodStart} - {periodEnd}</td>
   
    </tr>
  );
}
