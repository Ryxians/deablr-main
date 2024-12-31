import { createLazyFileRoute } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export const Route = createLazyFileRoute("/constitution")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p className={"text-2xl"}>Commonwealth Constitution</p>
      <ol className={"list-[upper-roman] list-inside pl-4"}>
        <li>
          <span>
            Rights • Inherent freedoms granted by God to all persons that cannot
            ethically be taken away without due process.
          </span>
          <SubList>
            <li>
              All persons starting from the moment of conception have the
              inherent right to life, liberty, the pursuit of happiness, and the
              enjoyment of the gains of their own industry.
            </li>
            <li>
              The people have the right peaceably to assemble for their own
              good, and to apply to those invested with the powers of government
              for redress of grievances by petition, address, or remonstrance.
            </li>
            <li>
              No person shall be deprived of life, liberty, or property, without
              due process of law.
            </li>
            <li>
              All persons have the right to keep and bear arms in defense of
              themselves, their families, their property and the commonwealth.
            </li>
            <li>
              An individual's right to live free from governmental intrusion in
              private or personal information is natural, essential, and
              inherent.
            </li>
            <li>
              Government being instituted for the common benefit, protection,
              and security, of the whole community, and not for the private
              interest or emolument of any one man, family, or class of men;
              therefore, whenever the ends of government are perverted, and
              public liberty manifestly endangered, and all other means of
              redress are ineffectual, the people may, and of right ought to
              reform the old, or establish a new government. The doctrine of
              nonresistance against arbitrary power, and oppression, is absurd,
              slavish, and destructive of the good and happiness of mankind.
            </li>
          </SubList>
        </li>
        <li>
          <span>
            Privileges • Entitlements granted by the Constitution to citizens
            that cannot be taken away without due process.
          </span>
          <SubList>
            <li>
              The people of this Commonwealth have the sole and exclusive right
              of governing themselves as a free, sovereign, and independent
              Commonwealth; and do, and forever hereafter shall, exercise and
              enjoy every power, jurisdiction, and right, pertaining thereto,
              which is not, or may not hereafter be, by them expressly delegated
              to the United Commonwealths of America in Congress assembled.
            </li>
            <li>
              All power residing originally in, and being derived from, the
              people, all the magistrates and officers of government are their
              substitutes and agents, and at all times accountable to them.
              Government, therefore, should be open, accessible, accountable and
              responsive. To that end, the public’s access to governmental
              proceedings and records shall not be unreasonably restricted.
            </li>
            <li>
              The public also has a privilege to an orderly, lawful, and
              accountable government. Therefore, any individual taxpayer
              eligible to vote in the Commonwealth, shall have standing to
              petition the Superior Court to declare whether the Commonwealth or
              political subdivision in which the taxpayer resides has spent, or
              has approved spending, public funds in violation of a law,
              ordinance, or constitutional provision. In such a case, the
              taxpayer shall not have to demonstrate that his or her personal
              rights and privileges were impaired or prejudiced beyond his or
              her status as a taxpayer.
            </li>
            <li>
              All elections are to be free, and every citizen of the
              commonwealth shall have an equal privilege to vote in any
              election.
            </li>
            <li>
              No individual shall be burdened with taxation from this
              commonwealth and its subdivisions exceeding a net value of 10% of
              his income.
            </li>
            <li>
              The citizens of the Commonwealth shall be protected from legal
              harassment and witch hunts. No individual shall be subject to an
              unreasonable number of legal actions or prosecutions within a
              short time span. Frivolous lawsuits shall be penalized by law.
            </li>
          </SubList>
        </li>
        <li>
          <span>Elections</span>
          <SubList>
            <li>
              All citizens are vested with a single vote from the moment they
              are legally recognized, be it conception, birth, or immigration,
              to death.
            </li>
            <li>
              The votes of individuals deemed dependent, including minors, the
              mentally disabled, and the elderly, shall be managed by their
              legal caretakers. A dependent may assume control of their vote
              upon reaching maturity or demonstrating capability, as determined
              by the judiciary based on criteria established by the
              legislature..
            </li>
            <li>
              All elections shall be free from outside influence and established
              political factions.
              <SubList>
                <li>
                  All political expenditures must be paid for by the campaign
                  using funds raised within the electoral district of the
                  campaign.
                </li>
                <li>
                  The organization of factions or parties shall be ceremonial
                  and in name only
                </li>
              </SubList>
            </li>
            <li>
              Citizens may vote for any individual of their choosing, with
              candidates emerging organically as votes are cast. The
              commonwealth shall not predefine candidates or provide
              pre-determined lists but shall facilitate the efficient and
              transparent counting of votes to determine candidate viability.
              <SubList>
                <li>
                  The commonwealth shall not provide a ballot with a list of
                  candidates
                </li>
                <li>
                  The commonwealth shall provide a ballot which enables for the
                  efficient counting of write in votes as defined by the
                  legislature
                </li>
                <li>
                  The legislature shall define a standard by which candidates
                  may create their own ballots for their voters
                </li>
              </SubList>
            </li>
            <li>
              Once the ballots of a district have been counted, the results
              shall be immediately released.
            </li>
            <li>
              Any candidate receiving less than five percent of the vote shall
              have a week to publicly transfer their votes to a candidate
              receiving more than five percent of the vote.
            </li>
            <li>
              All candidates exceeding five percent of the vote shall meet two
              weeks after the election in an electoral college, in which each
              candidate is given a weighted vote equal to their proportion of
              the total vote
            </li>
            <li>
              The college shall vote amongst themselves to determine the
              district's winner, the candidate with the greatest weight shall
              win the district.
            </li>
          </SubList>
        </li>
        <li>
          <span>Code of Conduct</span>
          <SubList>
            <li>
              Any person who should break the Code of Conduct while in office
              shall be ineligible to continue occupying that office or future
              office.
            </li>
            <li>
              Any company or business under contract with the commonwealth found
              in violation of the Code of Conduct shall have their contract
              considered void.
            </li>
            <li>
              Upon taking office or entering into contract, all office holders
              and contract holders shall pledge to govern their interactions
              with each other, with their citizens, and with the larger
              commonwealth in accordance with the "instruments of good works"
              from chapter 4 of The Rule of St. Benedict.
            </li>
          </SubList>
        </li>
        <li>
          <span>Executive</span>
          <SubList>
            <li>
              The executive powers of the commonwealth shall be vested into the
              High Council
            </li>
            <li>
              Elections for the High Council shall occur every five years, on
              years cleanly divisible by five.
            </li>
            <li>
              Each district drawn for the Chamber of Delegates shall elect an
              elector in the manner described in the Articles on elections
            </li>
            <li>
              The electors shall meet two weeks after having been chosen to
              elect the High Council
            </li>
            <li>
              They shall vote openly and may transfer their votes as need be.
              Voting shall continue till two thirds of the electors vote to
              conclude business, or when thirty days have passed.
            </li>
            <li>
              Electors cannot vote for candidates if voting for said candidate
              would grant them an excess of one fifth of the votes. This
              restriction is to ensure equitable representation among the top
              five candidates.
            </li>
            <li>
              Once business is concluded, the electors shall send the five
              candidates with the most votes to the legislature and those
              candidates shall be the councilors-elect.
            </li>
            <li>
              The councilors-elect shall begin their term at the start of the
              new year.
            </li>
            <li>
              The councilors-elect shall record an individual whom shall become
              acting counselor should the counselor become unable to fulfill
              their duties.
            </li>
          </SubList>
        </li>
        <li>
          <span>Administrative</span>
          <SubList>
            <li>
              The administrative duties and day to day governance of the
              commonwealth and its subdivisions shall be vested in a Manager.
              <SubList>
                <li>
                  The Manager of the Commonwealth shall be granted the titles of
                  Commonwealth Manager and Chief of Administration and what
                  other titles the legislature deems appropriate
                </li>
                <li>
                  The Manager of the city shall be granted the titles of City
                  Manager and what other titles are deemed appropriate by their
                  respective councils
                </li>
              </SubList>
            </li>
            <li>
              The Commonwealth Manager shall be meritocratically selected by the
              High Council from amongst the five longest serving City Managers
            </li>
            <li>
              Managers shall not publically associate with any given party or
              faction.
            </li>
            <li>
              Managers shall be non partisan, and shall execute the will of the
              High Council and the Legislature
            </li>
            <li>
              The High Council shall interview each Manager, and form a contract
              with the Manager of their choosing.
            </li>
            <li>
              Managers cannot be dismissed at will, instead they may only be
              dismissed under the terms agreed to by the High Council and
              Manager or a supermajority of the Legislature.
            </li>
            <li>
              The contract for a Commonwealth Manager shall have a minimum term
              of five years to align with the election cycle of the Legislature.
              City Managers shall have contracts with minimum terms of three
              years, unless otherwise stated by city ordinance. Managers may
              only be removed under the terms of their contracts or by a
              supermajority of their respective legislative bodies.
            </li>
          </SubList>
        </li>
        <li>
          <span>Legislative</span>
          <SubList>
            <li>
              <span>Chamber of Delegates</span>
              <SubList>
                <li>
                  Elections to the Chamber of Delegates shall occur every third
                  year after the election of the High Council.
                </li>
                <li>
                  The commonwealth shall be divided into districts with each
                  district gaining one representative. This district shall be
                  used for the election of delegate under the procedures
                  declared in the article on Elections and shall be used for
                  electing the electors of the High Council.
                </li>
              </SubList>
            </li>
            <li>
              <span>Chamber of Stewards</span>
              <SubList>
                <li>
                  The commonwealth shall be divided into regions referred to as
                  holds, with each hold granted a steward.
                </li>
                <li>
                  The steward shall be tasked with enriching the hold and
                  advancing the general welfare of its people, including but not
                  limited to improving public infrastructure, education,
                  decreasing poverty rates, and enhancing community services.
                </li>
                <li>
                  The steward shall be held accountable by the Auditory
                  Commission as described in the Auditory article. A steward
                  found to be in noncompliance may request a single appeal to a
                  newly formed Auditory Commission selected by a fresh lottery.
                </li>
                <li>
                  If a hold is found to be failing its criteria, the courts may
                  remove the steward, divide the hold, merge it into new holds,
                  or combine it with surrounding holds. Should a new steward
                  take control of a failing hold, they shall be granted a
                  probational grace period by the Auditory Commission, at the
                  commission's discretion. When a steward position is vacant,
                  any bidder may submit a lump sum in hopes of acquiring it.
                  Unsuccessful bids shall be converted into a public donation.
                  The bidding process shall be overseen by the Auditory
                  Commission to ensure transparency and fairness.
                </li>
                <li>
                  While a hold is in bad standing, and probational grace not
                  granted, the steward shall have no vote in chamber
                  proceedings.
                </li>
                <li>
                  The Chamber of Delegates shall set the number of holds within
                  the commonwealth, with a minimum of 15 and a maximum equal to
                  the number of delegates in the chamber.
                </li>
                <li>
                  The stewards may exchange lands among themselves as they deem
                  efficient, provided that all exchanges are documented, follow
                  the rules set forth by the Chamber, and receive approval by a
                  majority of stewards.
                </li>
                <li>
                  Stewards shall serve as the ceremonial head of all governments
                  within their hold and shall attend and host local events when
                  possible.
                </li>
                <li>
                  Stewards may formally submit requests for ordinances to any
                  council within their hold. The steward is required to be
                  present and participatory during the council’s discussion of
                  the request but shall not cast a deciding vote if the council
                  reaches a tie.
                </li>
              </SubList>
            </li>
          </SubList>
        </li>
        <li>
          <span>Judicial</span>
          <SubList>
            <li>
              Judicial power shall be vested in an independent judiciary which
              shall be helmed by a Supreme Court and a Constitutional Court and
              moderated by a Judicial Conclave.
            </li>
            <li>
              The Judicial Conclave shall be composed of all justices within the
              Commonwealth Judiciary having served longer than ten years.
            </li>
            <li>
              The Judicial Conclave shall divide the commonwealth into district
              courts, ensuring every city has its own court, territories may be
              granted their own courts or may be added onto city courts.
            </li>
            <li>
              City justices shall be appointed by the Chief Justice of the
              Supreme Court with the consent of the city council.
            </li>
            <li>
              Territorial justices shall be appointed by the Chief Justice of
              the Supreme Court with the consent of the nearest city council.
            </li>
            <li>Justices shall reside in the district they preside over.</li>
            <li>
              The Chief Justice shall be elected by two-thirds of Judicial
              Conclave using approval voting.
            </li>
            <li>
              The Chief Justice shall appoint any number of Supreme Court
              justices he deems fit, so long as they are even in number.
            </li>
            <li>
              Justices of the Supreme Court cannot be dismissed by the Chief
              Justice under any scenario, and must be removed by the Judicial
              Conclave or Impeachment.
            </li>
            <li>
              The Supreme Court, if acting unanimously, may dismiss the Chief
              Justice.
            </li>
            <li>
              The Judicial Conclave shall define intermediate courts existing
              between city/territorial courts and the Supreme Court.
            </li>
            <li>
              The judiciary shall prioritize the principles of stability,
              consistency, and adherence to established law and precedent. The
              courts are not to legislate from the bench or innovate policy but
              shall focus on interpreting and applying the laws as written.
            </li>
            <li>
              Any time a higher court overturns a lower courts decision, the
              justices of the lower court shall receive a strike. Should a
              justice receive three strikes in a given decade or six strikes in
              their career, they shall be promptly dismissed and be rendered
              ineligible for the Judiciary.
            </li>
            <li>
              The Supreme Court and the Constitutional Court shall be courts of
              final say, and cannot overrule each other. When making an appeal,
              both parties must agree to either the Supreme Court or the
              Constitutional Court. When making an appeal, the Legislature may
              request either.
            </li>
            <li>
              The Constitutional Court shall be composed of justices chosen via
              lottery for each case, no justice of the Supreme Court shall serve
              on the Constitutional Court.
            </li>
            <li>
              In order to become a member of the Judiciary a judge to be must
              qualify with the following:
              <SubList>
                <li>A college degree in law</li>
                <li>Married and never divorced</li>
                <li>
                  Multiple living children OR Multiple living granchildren
                </li>
                <li>A declared worldview</li>
                <li>Prior work experience</li>
              </SubList>
            </li>
          </SubList>
        </li>
        <li>
          <span>Auditory</span>
          <SubList>
            <li>
              Auditory power shall be vested in an Auditory Commission, which
              shall serve as the principal body for evaluating the commonwealth
              and performance of the holds.
            </li>
            <li>
              The commission shall be called into session at the beginning of
              each year and shall be composed of two stewards, two delegates,
              and three justices chosen via lottery
            </li>
            <li>
              The Commission shall assess the commonwealth and the performance
              of the holds.
            </li>
            <li>
              The Auditory Commission shall also oversee the electoral process,
              ensuring compliance with campaign finance laws, ballot integrity,
              and the prohibition of external influences.
            </li>
            <li>
              The findings of the Auditory Commission shall be published
              annually in a publicly accessible report, detailing the
              performance of the commonwealth and each hold and the compliance
              status with established criteria.
            </li>
          </SubList>
        </li>
        <li>
          <span>Amendment</span>
          <SubList>
            <li>
              The Constitution of the Commonwealth shall be made difficult to
              amend, but open to scrutiny and change. One year following the
              adoption of the constitution the Legislature shall call into
              session the first Constitutional Repository Commission.
            </li>
            <li>
              The Constitutional Repository Commission shall meet quarterly to
              review and discuss issues opened.
              <SubList>
                <li>
                  Anyone may open an issue with the Constitutional Repository,
                  given a process set forth by the legislature.
                </li>
                <li>
                  Heads of Executive Departments, Members of the Judiciary, and
                  Managers of the cities may earmark issues they did not submit
                  for priority.
                </li>
                <li>
                  The Commission shall give priority to issues which have been
                  earmarked, clearing out all earmarked issues in a given
                  schedule.
                </li>
                <li>
                  The schedule of the commission shall be set by the
                  Legislature, but shall be no less than fifteen days in a
                  quarter.
                </li>
                <li>
                  The Commission shall meet one month prior to the beginning of
                  a schedule to vote on what issues shall be discussed when in a
                  given schedule. The week before a schedule is to begin, the
                  full schedule shall be released.
                </li>
              </SubList>
            </li>
            <li>
              The Constitutional Repository Commission shall be composed as
              follows
              <SubList>
                <li>
                  One half shall be citizens selected via lottery, and shall be
                  treated and compensated in the same manner as citizens in Jury
                  Duty.
                </li>
                <li>
                  One fourth shall be members of the executive branch, as
                  outlined by the legislature, selected via lottery.
                </li>
                <li>
                  One fourth shall be members of the legislature, selected via
                  lottery.
                </li>
                <li>
                  The number of members shall be determined by the Legislature
                  and shall be no less than twenty.
                </li>
                <li>
                  In addition to the members, a justice of the Judiciary shall
                  preside over the Commission.
                </li>
                <li>
                  When creating committees, the justice of the commission shall
                  appoint other justices to preside over each committee.
                </li>
              </SubList>
            </li>
            <li>
              The individual committees shall be open to the public for
              discussion
            </li>
            <li>
              At the end of a session the committee shall vote to table an
              issue, merge with another issue for consideration by another
              committee, or allow the issue to proceed.
            </li>
            <li>
              At the end of a schedule the Commission shall meet and vote on
              each remaining issue, each being sent to the Judiciary to be
              formalized into legal text. The process for which shall be defined
              by the Legislature.
            </li>
            <li>
              The Judiciary shall take the issues and convert them into
              amendment proposals. The amendments shall have a section on
              Quality Assurance left blank.
            </li>
            <li>
              At the beginning of the next schedule, the Commission shall vote
              on the proposed amendments drafted by the Judiciary and shall
              either discard them, send them back to committee and issues, or
              send them forward.
            </li>
            <li>
              Should an amendment be sent forward the Commission shall fill in
              the Quality Assurance section with a testing period no less than
              five years and no more than twenty years.
            </li>
            <li>
              All proposals shall be laid out in both chambers of the
              legislature and must receive an endorsement from one member of
              each chamber.
            </li>
            <li>
              Once having received endorsements in both chambers, both chambers
              may begin debating the proposed amendment.
            </li>
            <li>
              Each chamber must pass the Amendment unaltered or publish their
              altered amendment publicly - thus ending the process.
            </li>
            <li>
              If both chambers pass the Amendment unaltered, the High Council
              shall have forty five days to veto the Amendment before it goes to
              a commonwealthwide referendum.
            </li>
            <li>
              If left without veto, the Amendment shall go before the people at
              large for ratification. To be ratified, the Amendment requires a
              decisive majority of sixty percent of the vote. If the Amendment
              is left blank on the ballot, that shall count against the
              Amendment.
            </li>
            <li>
              Once ratified, the Supreme Court shall set a date for it to go
              into law no later than three years after ratification.
            </li>
            <li>
              Once an amendment has gone into effect, it can be repealed in this
              manner
              <SubList>
                <li>
                  Once the Quality Assurance time frame specified by the
                  Commission has come to pass, the Legislature shall have a year
                  to repeal the Amendment by simple majority
                </li>
                <li>
                  In extreme circumstances, the Supreme Court may request an
                  early repeal of an amendment, which can then be repealed by a
                  supermajority of the legislature.
                </li>
                <li>
                  When a time frame equal to the average lifespan - as recorded
                  by the census - has passed the legislature shall have the
                  option to repeal with a simple majority.
                </li>
                <li>
                  Amendments amending other Amendments will automatically be
                  repealed if the older Amendment is repealed
                </li>
              </SubList>
            </li>
          </SubList>
        </li>
      </ol>
    </div>
  );
}

const SubList: React.FC<PropsWithChildren> = (props) => {
  return (
    <ol className={"list-[lower-roman] list-inside p-6 text-sm"}>
      {props.children}
    </ol>
  );
};
