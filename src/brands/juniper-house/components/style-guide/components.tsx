import { services, team, testimonials } from "../../content";
import { BookingPrompt } from "../patterns/booking-prompt";
import { CareMessage } from "../patterns/care-message";
import { DoctorCard } from "../patterns/doctor-card";
import { ServiceItem } from "../patterns/service-item";
import { Testimonial } from "../patterns/testimonial";
import { GuideSection, Label } from "./primitives";

const [, , priya] = team.members;
const recovery = services.items[4];
const [, catReview] = testimonials;

/** The same components the landing page renders, fed the same content. */
export function KeyComponents() {
  return (
    <GuideSection id="components" title="Key components">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-6">
        <div className="flex flex-col gap-3 lg:col-span-3">
          <Label>Doctor card</Label>
          <div className="max-w-[282px]">
            <DoctorCard doctor={priya} />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-4">
          <div className="flex flex-col gap-3">
            <Label>Service item</Label>
            <ServiceItem service={recovery} />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Care-team message</Label>
            <CareMessage initials="MH" name="Dr. Hale" time="11:02 am">
              All done. Pepper was a model patient, apart from the singing.
            </CareMessage>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:col-span-2 lg:col-span-5">
          <div className="flex flex-col gap-3">
            <Label>Review</Label>
            <Testimonial testimonial={catReview} variant="card" />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Booking prompt</Label>
            <BookingPrompt href="/juniper-house#book" />
          </div>
        </div>
      </div>
    </GuideSection>
  );
}
