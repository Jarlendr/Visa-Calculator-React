import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="about--header">About</h3>
      <h4 className="about--header" id="disclaimer--header">
        DISCLAIMER
      </h4>
      <p className="about--text" id="disclaimer--text">
        I give no warranty and accept no responsibility or liability
        for the accuracy or the completeness of the information and
        materials contained in this website. Under no circumstances
        will I be held responsible or liable in any way for any
        claims, damages, losses, expenses, costs or liabilities
        whatsoever (including, without limitation, any direct or
        indirect damages for loss of profits, business interruption or
        loss of information) resulting or arising directly or
        indirectly from your use of or inability to use this website,
        or from your reliance on the information and material on this
        website, even if I have been advised on the possibility of
        such damages in advance.
      </p>
      <br />
      <p className="about--text">
        Short-term visitors to the Schengen countries that do not need
        a visa and holders of multiple-entry visas valid for at least
        six months and with 90 days of duration of stay are not
        permitted to spend more than 90 days within 180 days in the
        territory of the Schengen Area.<sup>1</sup> <br />
        The first day you enter the Schengen territory is counted as
        day 1 even if it is just before midnight, while the date you
        leave is counted as the last day even if you left before
        sunrise.<sup>2</sup>
      </p>
      <p className="about--text">
        The 180-day period is rolling, meaning that for each day of
        your planned stay, you must count 180 days back and see if you
        exceed the 90/180-day rule. <br />
        This website is designed to make it easier for the frequent
        traveler to plan stays in the EU/Schengen area (or other zones
        and countries with similar visa-free rules). By simply
        inputting the start and end dates for your planned stay, as
        well as any recent stays, the calculator will check if you
        exceed the 90/180-day rule at any point during your planned
        stay.
        <br />
        The calculated number of days will be displayed in the top
        section of this website. If you spend 90% or more of the total
        available days, the website will turn orange/yellow and issue
        a warning. If you spend the full 90 days or more, the website
        will turn red and show the date that you overstay.
        <br />
        Your stays will automatically be sorted by start date in
        descending order.
      </p>
      <p>
        It is recommended that you do not rely solely on the results
        of this calculator, and consult the official documentation at
        <a
          className="external--link"
          href="https://www.schengenvisainfo.com/"
          target="blank"
        >
          <i> schengenvisainfo.com</i>
        </a>
      </p>
      <p className="about--text">
        It is also recommended that you try the official Schengen visa
        calculator, and understand the consequences for overstaying:
        <br />
        <sup>1</sup>
        <a
          className="external--link"
          href="https://www.schengenvisainfo.com/visa-calculator/"
          target="blank"
        >
          Schengen visa calculator
        </a>
        <br />
        <sup>2</sup>
        <a
          className="external--link"
          href="https://www.schengenvisainfo.com/consequences-of-overstaying-in-schengen-area/"
          target="blank"
        >
          Consequences of overstaying in Schengen
        </a>
      </p>
    </section>
  );
};
export default About;
