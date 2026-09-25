"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact, hours, links, primaryNav } from "../../content";
import { ButtonLink } from "../ui/button";
import { Icon } from "../ui/icons";
import { Wordmark } from "../ui/logo";

/**
 * Full-screen menu for phones and tablets, built on a native <dialog> so
 * focus trapping, Escape and the top layer come from the platform.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
  };

  // Runs synchronously so an in-page link can scroll as soon as the sheet closes.
  const close = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    document.documentElement.style.overflow = "";
    setOpen(false);
  };

  // Close if the viewport grows past the point where the full nav shows.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 80rem)");
    const onChange = () => {
      if (wide.matches && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={show}
        className="flex size-11 cursor-pointer items-center justify-center rounded-full text-juniper transition-colors hovered:bg-linen-200 xl:hidden"
      >
        <Icon name="menu" strokeWidth={1.6} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={close}
        className="menu-sheet fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-linen p-0 text-juniper backdrop:bg-juniper/40"
      >
        <div className="flex min-h-full flex-col">
          <div className="page-container flex h-(--header-h) shrink-0 items-center justify-between border-b border-linen-300 pr-4 md:pr-gutter">
            <Link href={links.top} onClick={close} aria-label="Juniper House Veterinary, back to top">
              <Wordmark />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors hovered:bg-linen-200"
            >
              <Icon name="close" strokeWidth={1.6} />
            </button>
          </div>

          <nav aria-label="Menu" className="page-container pt-4">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.href} className="border-b border-hairline">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="serif flex items-center justify-between py-4 text-[30px] leading-tight transition-colors hovered:text-terracotta-ink"
                  >
                    {item.label}
                    <Icon name="arrow" size={20} className="text-terracotta" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="page-container flex flex-col gap-2.5 pt-8 sm:flex-row">
            <ButtonLink href={links.book} onClick={close} size="lg" fluid>
              Book a visit
            </ButtonLink>
            <ButtonLink href={links.houseCalls} onClick={close} variant="secondary" size="lg" fluid>
              Request a house call
            </ButtonLink>
          </div>

          <div className="page-container flex items-center justify-center gap-6 pt-5 text-[15px] font-semibold sm:justify-start">
            <Link href={links.register} onClick={close} className="text-terracotta-ink">
              Become a client
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-hairline" />
            <Link href={links.portal} onClick={close} className="text-juniper">
              Client portal
            </Link>
          </div>

          <div className="page-container mt-auto pt-10 pb-8">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-hairline pt-5 text-sm text-moss">
              {hours.map((row) => (
                <p key={row.days} className="contents">
                  <span>{row.days}</span>
                  <span className="text-right">{row.time}</span>
                </p>
              ))}
            </div>
            <p className="pt-4 text-sm text-moss">
              <a href={contact.phoneHref} className="font-semibold text-juniper">
                {contact.phone}
              </a>{" "}
              · call or text
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
