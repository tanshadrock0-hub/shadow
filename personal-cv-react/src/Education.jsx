const education = [
  { level: "Bachelor of Science in Information Technology", institution: "College of Information Technology and Computing, USTP – CDO Campus", year: "2028" },
  { level: "Senior High School", institution: "Liceo de Cagayan University", year: "2022" },
  { level: "Junior High School", institution: "Misamis Oriental General Comprehensive High School", year: "2020" },
  { level: "Elementary", institution: "City Central School", year: "2016" },
  { level: "Kindergarten", institution: "City Central School", year: "2010" },
];

export default function Education() {
  return (
    <section className="card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Institution</th>
            <th>Year Graduate</th>
          </tr>
        </thead>
        <tbody>
          {education.map((row) => (
            <tr key={row.level}>
              <td>{row.level}</td>
              <td>{row.institution}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}