"use client";

import { type FormEvent, useId, useState } from "react";
import { cn } from "@/lib/cn";
import { booking, links } from "../../content";
import { Button } from "../ui/button";
import { InlineLink } from "../ui/text-link";

/**
 * Front-end only: two quick choices, then “See available times”. Both groups
 * are real radio inputs styled as chips and cards, so they work with a
 * keyboard and a screen reader without extra ARIA.
 */
export function BookingForm() {
  const id = useId();
  const [pet, setPet] = useState<string>(booking.pets[0]);
  const [visit, setVisit] = useState<string>(booking.visitTypes[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[26px] md:gap-9">
      <fieldset className="flex flex-col">
        <legend className="mb-3 text-[14.5px] font-semibold md:mb-3.5 md:text-[15px]">Your pet</legend>
        <div className="flex flex-wrap gap-2 md:gap-2.5">
          {booking.pets.map((option) => (
            <label key={option} className="relative">
              <input
                type="radio"
                name={`${id}-pet`}
                value={option}
                checked={pet === option}
                onChange={() => setPet(option)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "inline-flex h-11 cursor-pointer items-center rounded-full border px-4 text-[15px] font-medium transition-colors md:px-[18px]",
                  "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-terracotta-ink",
                  "border-hairline bg-linen-50 text-juniper hovered:border-juniper",
                  "peer-checked:border-juniper peer-checked:bg-juniper peer-checked:text-linen",
                )}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col">
        <legend className="mb-3 text-[14.5px] font-semibold md:mb-3.5 md:text-[15px]">What kind of visit?</legend>
        <div className="grid gap-2 sm:grid-cols-2 md:gap-3">
          {booking.visitTypes.map((option) => {
            const checked = visit === option;
            return (
              <label
                key={option}
                className={cn(
                  "flex min-h-[52px] cursor-pointer items-center gap-3 rounded-field bg-linen-50 px-4 text-[15px] transition-colors md:py-4 md:pr-[18px] md:pl-[18px] md:text-[15.5px]",
                  "has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-terracotta-ink",
                  checked
                    ? "border-[1.5px] border-juniper"
                    : "border border-hairline hovered:border-juniper/60",
                )}
              >
                <input
                  type="radio"
                  name={`${id}-visit`}
                  value={option}
                  checked={checked}
                  onChange={() => setVisit(option)}
                  className="m-0 size-[18px] shrink-0 accent-terracotta-ink focus-visible:outline-none"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 border-linen-300 md:flex-row-reverse md:items-center md:justify-between md:gap-6 md:border-t md:pt-7">
        <Button type="submit" size="tall" fluid>
          {booking.cta}
        </Button>
        <p className="text-center text-sm leading-[1.55] text-moss md:text-left md:text-[15px]">
          <span className="md:hidden">New here? </span>
          <span className="hidden md:inline">New to Juniper House? </span>
          <InlineLink href={links.register} className="font-semibold">
            Become a client
          </InlineLink>
          <span className="md:hidden"> first.</span>
          <span className="hidden md:inline"> and we’ll set up your pet’s record first.</span>
        </p>
      </div>

      <p role="status" aria-live="polite" className={cn("text-[15px] text-moss", !sent && "sr-only")}>
        {sent &&
          `Thank you. Claire will text you a few times that suit ${pet === "Someone else" ? "your pet" : `your ${pet.toLowerCase()}`} for a ${visit.toLowerCase()}.`}
      </p>
    </form>
  );
}
