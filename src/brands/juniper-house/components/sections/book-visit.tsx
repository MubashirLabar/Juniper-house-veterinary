import { booking } from "../../content";
import { Reveal } from "../motion/reveal";
import { Eyebrow } from "../ui/section-header";
import { BookingForm } from "./booking-form";
import { VisitUs } from "./visit-us";

/**
 * Booking and practical details share one band from `xl`: the form in seven
 * columns, where-and-when in the last four. On phones they separate into two
 * sections, the form on a raised band and the details on linen.
 */
export function BookVisit() {
  return (
    <section
      aria-label="Book a visit and visit us"
      className="xl:border-t xl:border-linen-200 xl:bg-linen-50 xl:py-section"
    >
      <div className="xl:page-container xl:grid xl:grid-cols-12 xl:items-start xl:gap-x-6">
        <div
          id="book"
          className="border-t border-linen-200 bg-linen-50 px-4 py-14 md:px-gutter xl:col-span-7 xl:border-0 xl:bg-transparent xl:p-0"
        >
          <Reveal className="flex flex-col gap-[26px] rounded-panel border border-linen-300 bg-linen px-5 py-8 md:gap-9 md:p-14">
            <div className="flex flex-col gap-2.5 md:gap-3.5">
              <Eyebrow>{booking.eyebrow}</Eyebrow>
              <h2 className="serif text-title">{booking.title}</h2>
            </div>
            <BookingForm />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="px-6 py-14 md:px-gutter xl:col-span-4 xl:col-start-9 xl:p-0 xl:pt-3">
          <VisitUs />
        </Reveal>
      </div>
    </section>
  );
}
