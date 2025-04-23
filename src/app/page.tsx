import Stats from "@/components/Stats";

export default function HomePage() {
  const messages = {
    loan_programs: {
      over: "Over",
      over_value: "$5 Billion",
      over_suffix: "in Closed Loans",
      more_than: "More than",
      more_than_value: "100+",
      more_than_suffix: "Loan Programs",
    },
  };

  return (
    <main>
      <Stats messages={messages} />
    </main>
  );
}