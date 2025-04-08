export default function TicketsPage() {
  return (
    <main className="bg-black text-white px-6 py-16 text-center">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Tickets</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Be a part of TEDxUIUC 2025! Tickets are limited, so reserve yours today and join us
          for a day of powerful ideas and meaningful connections.
        </p>
      </section>

      {/* Ticket Button */}
      <section className="mb-12">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxx9cwKLOhgjeSUt25olUwwCr01-NB2kZXeIVzCp5DevS-jw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
        >
          Reserve Your Ticket
        </a>
        <p className="text-sm text-gray-500 mt-2">You will be redirected to a Google Form.</p>
      </section>

      {/* Optional Ticket Image */}
      <section className="mb-16">
        <img
          src="/ticket.jpg"
          alt="TEDxUIUC Ticket"
          className="mx-auto rounded-md shadow-md max-w-xs md:max-w-md"
        />
      </section>

      {/* Note */}
      <section>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          If you have any questions about ticketing or accessibility, feel free to reach out to us at{' '}
          <a href="mailto:help@tedxuiuc.com" className="text-red-400 hover:underline">help@tedxuiuc.com</a>.
        </p>
      </section>
    </main>
  );
}
