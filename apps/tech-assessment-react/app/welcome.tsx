import { Link } from 'react-router';

export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcome-title atp-heading-l atp-font-weight-bold">
        ATPCO UXE Technical Assessment
      </h1>
      <p className="atp-body-m">
        This assessment familiarizes you with ATPCO&apos;s{' '}
        <a
          href="http://d2vz07p3m3c4xg.cloudfront.net/"
          target="_blank"
          rel="noreferrer"
        >
          Lift Design System
        </a>{' '}
        while letting you showcase your frontend engineering skills and your ability to
        integrate an API with a form. Plan to spend around <strong>90 minutes</strong>, and
        be ready to discuss your work during your interviews.
      </p>

      <h2 className="atp-heading-m">Your task</h2>
      <p className="atp-body-m">
        Build the Create Delivery Configuration form from the provided Figma mockup at the
        route <code>/delivery-configurations/create</code>. The page header and sidebar are
        already implemented, please focus on the form. Use Lift Design System components
        throughout; most UI elements in the mockup have a corresponding component.
      </p>

      <h2 className="atp-heading-m">Requirements</h2>
      <ul className="atp-body-m">
        <li>
          <strong>POST</strong> the form data and show a success indicator of your choosing,
          or an error indicator if it fails. Tip: append <code>?error=true</code> to the
          POST to force an error response.
        </li>
        <li>
          On load, use the <strong>GET</strong> request to log the existing configs to the
          developer console, ordered by <code>acceptedAt</code> from oldest to most recent.
        </li>
        <li>The finished application should build successfully with no errors.</li>
      </ul>

      <h2 className="atp-heading-m">Good to know</h2>
      <ul className="atp-body-m">
        <li>
          This React Router starter is one option, you may also use the Angular starter if you prefer, so
          pick whichever lets you do your best work. ATPCO uses both frameworks.
        </li>
        <li>
          You may use AI to assist, but be prepared to discuss every aspect of your
          solution. A lack of understanding will count against you.
        </li>
        <li>
          Questions to your recruiter are welcome. Thoughtful questions and feedback
          are considered a plus.
        </li>
      </ul>

      <p className="welcome-cta atp-body-m">
        <Link to="/delivery-configurations/create">
          Start the assessment &rarr;
        </Link>
      </p>
    </div>
  );
}
